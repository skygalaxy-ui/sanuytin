// Category slugs that belong to /kien-thuc-forex/ route
// Articles with these categories should NOT appear in /tin-tuc/
export const KNOWLEDGE_CATEGORY_SLUGS = [
    'kien-thuc',
    'kien-thuc-forex',
    'kien-thuc-dau-tu',
    'huong-dan',
    'kinh-nghiem',
];

// Check if a category slug belongs to knowledge route
export function isKnowledgeCategory(categorySlug: string): boolean {
    return KNOWLEDGE_CATEGORY_SLUGS.includes(categorySlug);
}

// Get the correct article route based on category
export function getArticleRoute(categorySlug: string, articleSlug: string): string {
    if (isKnowledgeCategory(categorySlug)) {
        return `/kien-thuc-forex/${articleSlug}`;
    }
    return `/tin-tuc/${articleSlug}`;
}

// Get the correct broker review route based on slug
export function getBrokerLink(slug: string): string {
    return `/${slug}/`;
}

