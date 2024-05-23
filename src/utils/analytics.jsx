export const trackPageView = (page_path) => {
    if (window.gtag) {
      window.gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID', {
        page_path,
      });
    }
  };
  
  export const trackEvent = (event) => {
    if (window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }
  };
  