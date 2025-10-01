import { useState, useEffect, useCallback } from "react";

const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] || ""
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible: IntersectionObserverEntry | null = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              !mostVisible ||
              entry.intersectionRatio > mostVisible.intersectionRatio
            ) {
              mostVisible = entry;
            }
          }
        });
        if (mostVisible) {
          setActiveSection(mostVisible.target.id);
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
