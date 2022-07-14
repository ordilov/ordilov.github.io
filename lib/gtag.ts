export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || 'UA-XXXXX-Y';

declare global {
    interface Window {
        gtag: (param1: string, param2: string, param3: object) => void;
    }
}

export const pageview = (url: string) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};