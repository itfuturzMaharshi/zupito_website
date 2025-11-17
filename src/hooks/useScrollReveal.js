import { useEffect, useRef } from "react";

const useScrollReveal = ({
  threshold = 0.2,
  root = null,
  rootMargin = "0px",
  once = true,
} = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, once]);

  return elementRef;
};

export default useScrollReveal;

