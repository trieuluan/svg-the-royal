import { createContext, useContext } from "react";

export const SlideContext = createContext<any>(undefined);

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
      fill: `url(#area)`,
      opacity: context === id ? 0.75 : 0,
      onMouseEnter: () => setContext(id),
      onMouseLeave: () => setContext(""),
    },
  };
};
