import {
  Children,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useRef,
} from "react";
import { useCycledList } from "./use-cycled-list";
import { Box } from "@mui/material";
import { AnimatePresence, m } from "framer-motion";

type MotionSlideProps = PropsWithChildren<{
  slidesToShow: number;
  speed?: number;
}>;

const MotionBox = m(Box);

export default function MotionSlide(props: MotionSlideProps): JSX.Element {
  const [newChildren, prev, next] = useCycledList(
    Children.toArray(props.children) as unknown as ReactElement[],
    {
      size: props.slidesToShow,
    }
  );

  const center = Math.round((props.slidesToShow - 1) / 2);

  console.log(newChildren.map((c) => c.key));

  const intervalRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    if (props.speed) intervalRef.current = setInterval(next, props.speed);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [props.speed, next]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        height: 300,
        transform: `translateY(-50%)`,
      }}
    >
      <AnimatePresence>
        {newChildren.map((child, index) => {
          return (
            <MotionBox
              layout
              key={child.key}
              transition={{ duration: 0.55 }}
              initial={{ opacity: 0, x: "200%", flex: 0 }}
              animate={{ opacity: 1, x: 0, flex: index === center ? 2 : 1 }}
              exit={{ opacity: 0, x: "-200%", flex: 0 }}
              style={{ originX: 0.5, originY: 0.5 }}
            >
              {child}
            </MotionBox>
          );
        })}
      </AnimatePresence>
    </Box>
  );
}
