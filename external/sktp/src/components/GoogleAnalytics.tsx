import Script from 'next/script';
import { getSiteSettings } from '@/lib/supabase';

export default async function GoogleAnalytics() {
    const settings = await getSiteSettings();
    const integrationsStr = settings.integrations;
    
    if (!integrationsStr) return null;
    
    let GA_ID = null;
    
    try {
        const integrations = typeof integrationsStr === 'string' ? JSON.parse(integrationsStr) : integrationsStr;
        if (integrations.ga4_enabled && integrations.ga4_measurement_id) {
            GA_ID = integrations.ga4_measurement_id;
        }
    } catch {
        return null;
    }

    if (!GA_ID) return null;

    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}');
                `}
            </Script>
        </>
    );
}
