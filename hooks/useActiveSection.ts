import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook to track which section of the page is currently visible
 * @param sectionIds - array of section IDs to watch, e.g. ["about", "experience", "projects", "contact"]
 * @returns { activeSection, setActiveManually }
 *   - activeSection: the ID of the section currently most visible
 *   - setActiveManually: function to override active section manually (e.g. when clicking a nav link)
 */

const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] || ""
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible: IntersectionObserverEntry | null = null;

        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            if (
              !mostVisible ||
              entry.intersectionRatio >
                (mostVisible as IntersectionObserverEntry).intersectionRatio
            ) {
              mostVisible = entry;
            }
          }
        });
        if (mostVisible) {
          const element = (mostVisible as IntersectionObserverEntry)
            .target as HTMLElement;
          setActiveSection(element.id);
        }
      },
      { threshold: [0.3, 0.5, 0.7] }
    );

    sectionIds.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) observer.unobserve(section);
      });
      observer.disconnect();
    };
  }, [sectionIds]);

  const setActiveManually = useCallback((id: string) => {
    setActiveSection(id);
  }, []);

  return { activeSection, setActiveManually };
};

export default useActiveSection;
