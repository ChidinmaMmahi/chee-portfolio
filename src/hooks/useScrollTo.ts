export const useScrollTo = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
  };

  return scrollTo;
};
