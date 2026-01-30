
function resolvePath(current, target) {
    if (!current) current = "/";

    // NORMALIZE PATH
    const currentLower = current.toLowerCase();

    // Remove index.html, trailing slash
    let normalizedCurrent = current.replace(/\/index\.html$/, "").replace(/\/$/, "");

    let effectiveCurrent = normalizedCurrent;

    if (normalizedCurrent.includes("/landing")) {
        const parts = normalizedCurrent.split("/landing");
        if (parts.length > 1) {
            effectiveCurrent = parts.pop() || "";
            if (effectiveCurrent === "") effectiveCurrent = "/";
        }
    } else if (normalizedCurrent.includes("/home")) {
        const parts = normalizedCurrent.split("/home");
        if (parts.length > 1) {
            effectiveCurrent = parts.pop() || "";
            if (effectiveCurrent === "") effectiveCurrent = "/";
        }
    }

    const stepsUp = effectiveCurrent === "/" || effectiveCurrent === ""
        ? 0
        : effectiveCurrent.split("/").filter(Boolean).length;

    // Default prefix logic
    const prefix = stepsUp > 0 ? "../".repeat(stepsUp) : "./";

    const targetSegments = target.split("/").filter(Boolean);
    const cleanTarget = targetSegments.join("/");

    if (targetSegments.length === 0) {
        // Navigating to Home
        if (effectiveCurrent === "" || effectiveCurrent === "/") {
            return "./index.html";
        }
        // If inside subpage, standard "../" logic works to get back to root
        return `${prefix}index.html`;
    }

    let finalTarget = cleanTarget;
    if (!finalTarget.match(/\.[a-zA-Z0-9]+$/)) {
        finalTarget += "/index.html";
    }

    return `${prefix}${finalTarget}`;
}

function getRelativePath(currentPath, targetPath) {
    if (targetPath.startsWith("http") || targetPath.startsWith("mailto:") || targetPath.startsWith("tel:")) {
        return targetPath;
    }

    if (targetPath.startsWith("/#") || targetPath.startsWith("#")) {
        // simplify for test
        return targetPath;
    }

    return resolvePath(currentPath, targetPath);
}

console.log("From '/' to '/danh-gia-san':", getRelativePath("/", "/danh-gia-san"));
console.log("From '/danh-gia-san' to '/vantage':", getRelativePath("/danh-gia-san", "/vantage"));
console.log("From '/danh-gia-san' to '/danh-gia-san':", getRelativePath("/danh-gia-san", "/danh-gia-san"));
