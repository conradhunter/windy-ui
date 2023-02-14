export function scrollToTopOnMount() {
  window.scrollTo(0, 0);
}

export const handleNavigatePricing = () => {
  setTimeout(() => {
    window.location.href = 'https://127.0.0.1:5173/#pricing';
  }, 500);
};
