// Microsoft Clarity custom event tracking
export const trackEvent = (eventName: string, metadata?: Record<string, any>) => {
  if (window.clarity) {
    window.clarity("event", eventName, metadata);
  }
};

// Predefined events
export const ANALYTICS_EVENTS = {
  DOWNLOAD_WINDOWS: 'download_windows_app',
  PAGE_VIEW: 'page_view',
  BUTTON_CLICK: 'button_click'
} as const;
