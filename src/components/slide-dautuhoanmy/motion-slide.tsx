import {
  Children,
  forwardRef,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { useCycledList } from "./use-cycled-list";
import { Box, css, styled, SxProps } from "@mui/material";
import { AnimatePresence, m } from "framer-motion";
import { SizeMe, SizeMeProps } from "react-sizeme";
import { range } from "lodash";

const Bullet = styled(Box)<{ isActive: boolean }>`
  cursor: pointer;
  height: 0.7rem;
  width: 0.7rem;
  border-radius: 50%;
  border: 1px solid #333;
  ${(props: any) =>
    props.isActive &&
    css`
      border-color: #a01f26;
      background-color: #a01f26;
      outline: 1px solid #a01f26;
      outline-offset: 0.45rem;
    `}
`;

type MotionSlideProps = PropsWithChildren<
  {
    slidesToShow: number;
    speed?: number;
    animationSpeed?: number;
    indicatorSxProps?: SxProps;
    centerMode?: boolean;
    sx?: SxProps;
    outerSx?: SxProps;
    gap?: number;
  } & SizeMeProps
>;

export type MotionSlideHandle = {
  next(): void;
  prev(): void;
};

const MotionBox = m(Box);

const MotionSlideInner = forwardRef<MotionSlideHandle, MotionSlideProps>(
  function MotionSlide(props, ref): JSX.Element {
    const {
      animationSpeed = 0.55,
      indicatorSxProps,
      centerMode,
      sx,
      outerSx,
      gap = 16,
    } = props;
    const [speed, setSpeed] = useState(props.speed);
    const [step, setStep] = useState(1);
    const [newChildren, prev, next, { current, direction }] = useCycledList(
      Children.toArray(props.children) as unknown as ReactElement[],
      {
        size: props.slidesToShow + 2,
      }
    );

    useImperativeHandle(ref, () => ({
      next,
      prev,
    }));

    useEffect(() => {
      console.log(newChildren.map((c) => c.key));
    }, [newChildren]);

    const center = useMemo(
      () => Math.round((props.slidesToShow + 1) / 2),
      [props.slidesToShow]
    );

    const intervalRef = useRef<NodeJS.Timeout>();
    useEffect(() => {
      if (speed) intervalRef.current = setInterval(() => next(), speed);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, [speed, next]);

    const slideWidth = useMemo(() => {
      const totalGap = gap * (props.slidesToShow - 1);
      // noinspection PointlessArithmeticExpressionJS
      return (
        (props.size.width! * 1.0 - totalGap) /
        (props.slidesToShow + (centerMode ? 1 : 0))
      );
    }, [props.slidesToShow, props.size, gap, centerMode]);

    const isCenter = useCallback(
      (index: number) => {
        if (!centerMode) return false;
        return index === center;
      },
      [centerMode, center]
    );

    const variants = useMemo(() => {
        return {
          initial: {
            opacity: 0,
            x: direction === "prev" ? "-200%" : "200%",
            flex: 0,
          },
          animate: ({ index }: { index: number }) => ({
            opacity: index === 0 || index === props.slidesToShow + 1 ? 0 : 1,
            x: 0,
            flex: isCenter(index) ? 2 : 1,
          }),
          exit: {
            opacity: 0,
            x: direction === "prev" ? "200%" : "-200%",
            flex: 0,
          },
        };
      }, [direction, isCenter, props.slidesToShow]),
      innerVariants = useMemo(
        () => ({
          initial: {
            // display: "none",
            width: 0,
          },
          animate: ({ index }: { index: number }) => ({
            // display: "block",
            width: slideWidth,
            scale: isCenter(index) ? 1.8 : 1,
          }),
          exit: {
            // display: "none",
            width: 0,
          },
        }),
        [isCenter, slideWidth]
      );

    return (
      <Box sx={outerSx}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: `${gap}px`,
            ml: `-${slideWidth + gap}px`,
            mr: `-${slideWidth + gap}px`,
            ...sx,
          }}
        >
          <AnimatePresence initial={false}>
            {newChildren.map((child, index) => {
              return (
                <MotionBox
                  layout
                  key={`${child.key}`}
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
              gridGap: "2rem",
            }}
          >
            {range(props.slidesToShow).map((index) => (
              <Bullet
                isActive={index === current}
                onClick={() => {
                  if (current === index) return;
                  setSpeed(0);
                  if (current < index) {
                    //next n step

                    setStep(index - current);
                    next(index - current);
                    setTimeout(() => {
                      setSpeed(props.speed);
                      setStep(1);
                    }, (index - current + 1) * (animationSpeed ?? 550));
                  } else {
                    setStep(current - index);
                    prev(current - index);
                    setTimeout(() => {
                      setSpeed(props.speed);
                      setStep(1);
                    }, (current - index + 1) * (animationSpeed ?? 550));
                  }
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    );
  }
);

const MotionSlide = forwardRef<
  MotionSlideHandle,
  Omit<MotionSlideProps, "size">
>(function (props, ref) {
  return (
    <SizeMe>
      {({ size }) => <MotionSlideInner ref={ref} size={size} {...props} />}
    </SizeMe>
  );
});

export default MotionSlide;
