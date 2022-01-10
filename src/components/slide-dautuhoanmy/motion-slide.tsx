import {
  Children,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { useCycledList } from "./use-cycled-list";
import { Box, styled } from "@mui/material";
import { AnimatePresence, m } from "framer-motion";
import { SizeMeProps, withSize } from "react-sizeme";

const GAP = 16;

type MotionSlideProps = PropsWithChildren<
  {
    slidesToShow: number;
    speed?: number;
  } & SizeMeProps
>;

const MotionBox = m(Box),
  StyledMotionBox = styled(MotionBox)`
    &:first-child,
    &:last-child {
      opacity: 0 !important;
    }
  `;

const MotionSlide = withSize()(function MotionSlide(
  props: MotionSlideProps
): JSX.Element {
  const [newChildren, prev, next] = useCycledList(
    Children.toArray(props.children) as unknown as ReactElement[],
    {
      size: props.slidesToShow + 2,
    }
  );

  const center = Math.round((props.slidesToShow + 1) / 2);

  const intervalRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    if (props.speed) intervalRef.current = setInterval(next, props.speed);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [props.speed, next]);

  const slideWidth = useMemo(() => {
    const totalGap = GAP * (props.slidesToShow - 1);
    return (props.size.width! * 1.0 - totalGap) / (props.slidesToShow + 1);
  }, [props.slidesToShow, props.size]);

  const variants = useMemo(() => {
    return {
      initial: { opacity: 0, x: "200%", flex: 0 },
      animate: (index: number) => ({
        opacity: index === 0 || index === props.slidesToShow + 1 ? 0 : 1,
        x: 0,
        flex: index === center ? 2 : 1,
      }),
      exit: { opacity: 0, x: "-200%", flex: 0 },
    };
  }, [center, props.slidesToShow]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: `${GAP}px`,
          alignItems: "center",
          height: 300,
          transform: `translateY(-50%)`,
          ml: `-${slideWidth}px`,
          mr: `-${slideWidth}px`,
        }}
      >
        <AnimatePresence>
          {newChildren.map((child, index) => {
            return (
              <MotionBox
                layout
                key={child.key}
                transition={{ duration: 0.55 }}
                variants={variants}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
                style={{ originX: 0.5, originY: 0.5 }}
                custom={index}
              >
                {child}
              </MotionBox>
            );
          })}
        </AnimatePresence>
      </Box>
    </Box>
  );
});

export default MotionSlide;
