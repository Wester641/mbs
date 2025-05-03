declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    _scrollSent?: boolean;
  }
}

export type GAEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

export const sendGAEvent = ({
  action,
  category,
  label,
  value,
}: GAEvent): void => {
  if (typeof window.gtag !== "function") return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
