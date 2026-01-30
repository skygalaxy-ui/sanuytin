const fs = require('fs');
const path = './out/index.html';

try {
    let content = fs.readFileSync(path, 'utf8');

    // Regex to find the Exness card block
    // Looking for a div that contains "exness" link and is bounded by the specific card classes or structure
    // Since structure is repetitive, we rely on the order or specific content.
    // Exness is currently Rank 2.
    // XM is currently Rank 3.

    // Strategy: Split by the card container markers if possible, or use a robust regex.
    // The cards seem to start with <div class="\n                bg-card
    // Let's rely on the specific rank label to be safe?
    // Exness has ">#<!-- -->2</div>"
    // XM has ">#<!-- -->3</div>"

    // We need to capture the FULL div block.
    // Since we know the file content structure from the view_file, we can be somewhat aggressive.
    // We will look for the pattern of the card.

    // We can extract based on the "href" being unique.

    // Find Exness Block
    // It starts with <div and ends with </div>, but nested divs make regex hard.
    // However, we know the indentation from the file view: 20 spaces?
    // Line 423: "                    <div class=\""

    const lines = content.split('\n');

    // Helper to find block boundaries
    function findBlock(keyword, startRank) {
        let start = -1;
        let end = -1;

        // Find line containing keyword (e.g. "/exness/")
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes(keyword)) {
                // Walk backwards to find the start of the card
                // The card start line looks like: <div class="
                // and the line AFTER it has "bg-card dark:bg-card"
                for (let j = i; j >= 0; j--) {
                    if (lines[j].trim() === '<div class="' && lines[j + 1] && lines[j + 1].includes('bg-card dark:bg-card')) {
                        start = j;
                        break;
                    }
                }

                // Walk forwards to find the end
                // The card ends with a </div> that closes the main card div.
                // Based on indentation, the start div has 20 spaces usually.
                // Let's count braces or look for the next card start?
                if (start !== -1) {
                    let openDivs = 0;
                    for (let k = start; k < lines.length; k++) {
                        // Simple brace counting approximation
                        const matchOpen = (lines[k].match(/<div/g) || []).length;
                        const matchClose = (lines[k].match(/<\/div>/g) || []).length;
                        openDivs += matchOpen - matchClose;

                        if (openDivs === 0) {
                            end = k;
                            break;
                        }
                    }
                }
                break;
            }
        }
        return { start, end };
    }

    const exness = findBlock('/exness/', '2');
    const xm = findBlock('/xm/', '3');

    if (exness.start === -1 || xm.start === -1) {
        console.error("Could not find blocks. Exness:", exness, "XM:", xm);
        process.exit(1);
    }

    console.log(`Found Exness block: ${exness.start}-${exness.end}`);
    console.log(`Found XM block: ${xm.start}-${xm.end}`);

    // Get content
    let exnessContent = lines.slice(exness.start, exness.end + 1).join('\n');
    let xmContent = lines.slice(xm.start, xm.end + 1).join('\n');

    // Modify Ranks and Scores
    // Exness (Old #2, Score 9.8) -> New #3, Score 9.5
    exnessContent = exnessContent.replace('>#<!-- -->2</div>', '>#<!-- -->3</div>');
    exnessContent = exnessContent.replace('>9.8</span>', '>9.5</span>');

    // XM (Old #3, Score 9.5) -> New #2, Score 9.8
    xmContent = xmContent.replace('>#<!-- -->3</div>', '>#<!-- -->2</div>');
    xmContent = xmContent.replace('>9.5</span>', '>9.8</span>');

    // Construct new lines array
    // We assume Exness comes BEFORE XM in current file (2 before 3)
    if (exness.end < xm.start) {
        const part1 = lines.slice(0, exness.start);
        const middle = lines.slice(exness.end + 1, xm.start);
        const part3 = lines.slice(xm.end + 1);

        const newLines = [
            ...part1,
            xmContent, // XM moves to pos 2
            ...middle,
            exnessContent, // Exness moves to pos 3
            ...part3
        ];

        fs.writeFileSync(path, newLines.join('\n'));
        console.log("Successfully swapped Exness and XM.");
    } else {
        console.error("Exness block is not before XM block, assumption failed.");
        process.exit(1);
    }

} catch (e) {
    console.error(e);
    process.exit(1);
}
