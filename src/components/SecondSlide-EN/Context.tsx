import { createContext, useContext } from "react";

export const SlideContext = createContext<any>(undefined);

const areaVariants = {
  inactive: { opacity: 0 },
  active: { opacity: 0.75 },
};

export const useSlideContext = (id: string) => {
  const [context, setContext] = useContext(SlideContext);

  return {
    labelPathProps: {
      fill: `url(#active)`,
      opacity: context === id ? 1 : 0.3,
    },
    labelProps: {
      style: { cursor: "pointer" },
      onMouseEnter: () => setContext(id),
      onMouseLeave: () => setContext(""),
    },
    areaProps: {
      className: "pointable",
      fill: `url(#area)`,
      onMouseEnter: () => setContext(id),
      onMouseLeave: () => setContext(""),
      variants: areaVariants,
      animate: context === id ? "active" : "inactive",
      transition: { duration: 0 },
    },
  };
};
