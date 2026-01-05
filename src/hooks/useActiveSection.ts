import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[], enabled = true) => {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    if (!enabled) return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section as Element));

    return () => observer.disconnect();
  }, [sectionIds, enabled]);

  return active;
};
