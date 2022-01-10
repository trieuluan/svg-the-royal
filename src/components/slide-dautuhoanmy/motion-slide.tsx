import {
  Children,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { useCycledList } from "./use-cycled-list";
import { Box, SxProps } from "@mui/material";
import { AnimatePresence, m } from "framer-motion";
import { SizeMeProps, withSize } from "react-sizeme";

const GAP = 16;

type MotionSlideProps = PropsWithChildren<
  {
    slidesToShow: number;
    speed?: number;
    animationSpeed?: number;
    indicatorSxProps?: SxProps;
  } & SizeMeProps
>;

const MotionBox = m(Box);

const MotionSlide = withSize()(function MotionSlide(
  props: MotionSlideProps
): JSX.Element {
  const { animationSpeed = 0.55, indicatorSxProps } = props;
  const [newChildren, prev, next, { current }] = useCycledList(
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
        animate: ({ index }: { index: number }) => ({
          opacity: index === 0 || index === props.slidesToShow + 1 ? 0 : 1,
          x: 0,
          flex: index === center ? 2 : 1,
        }),
        exit: { opacity: 0, x: "-200%", flex: 0 },
      };
    }, [center, props.slidesToShow]),
    innerVariants = useMemo(
      () => ({
        initial: {
          // display: "none",
          width: 0,
        },
        animate: ({ index }: { index: number }) => ({
          // display: "block",
          width: slideWidth,
          scale: index === center ? 1.8 : 1,
        }),
        exit: {
          // display: "none",
          width: 0,
        },
      }),
      [center, slideWidth]
    );

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: 300,
          transform: `translateY(-50%)`,
          gap: `${GAP}px`,
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
                transition={{ duration: animationSpeed }}
                variants={variants}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
                style={{ originX: 0.5, originY: 0.5 }}
                sx={{ display: "flex", justifyContent: "center" }}
                custom={{ index }}
                className={index === center ? "center" : ""}
              >
                <MotionBox
                  layout
                  variants={innerVariants}
                  transition={{ duration: animationSpeed }}
                  custom={{ index }}
                  style={{
                    width: slideWidth,
                  }}
                >
                  {child}
                </MotionBox>
              </MotionBox>
            );
          })}
        </AnimatePresence>
      </Box>
      <Box sx={indicatorSxProps}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(${props.slidesToShow},1fr)`,
            gridGap: "20px",
          }}
        ></Box>
      </Box>
    </Box>
  );
});

export default MotionSlide;
