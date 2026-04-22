import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://sanuytin.net';
    
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/api/', '/_next/', '/private/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
