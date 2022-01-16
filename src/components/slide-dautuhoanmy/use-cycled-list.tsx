import {
  Children,
  cloneElement,
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import produce, { Draft } from "immer";
import { range } from "lodash";
import { mod } from "../commons/utils";

export type UseCycledListOptions = {
  size: number;
};
type Callback = (step?: number) => void;
export type CycledListPayload = {
  current: number;
  actualCurrent: number;
  direction: "prev" | "next";
  total: number;
};

export function useCycledList<T extends ReactElement>(
  list: T[],
  { size }: UseCycledListOptions
): [T[], Callback, Callback, CycledListPayload] {
  const doubledList = useRef([
    ...list,
    ...(Children.map(list, (child, i) =>
      cloneElement(child, { key: `cloned__${i}` })
    ) as unknown as T[]),
  ]);
  const [returnedList, setReturnedList] = useState<T[]>(() =>
      doubledList.current.slice(0, size)
    ),
    [pos, setPos] = useState(size - 1),
    [direction, setDirection] = useState<"prev" | "next">("next");

  const middle = useMemo(() => {
    let rs = pos - (size - 1) / 2;
    if (rs < 0) rs += list.length;
    if (rs >= list.length) rs -= list.length;
    return rs;
  }, [pos, size, list.length]);

  const next = useCallback(
    (step: number = 1) => {
      const newPos = (pos + step) % doubledList.current.length;
      const newReturnedList = produce(returnedList, (draft) => {
        range(step).forEach(() => draft.shift());
        range(step).forEach((i: number) => {
          const _newPos = (pos + i + 1) % doubledList.current.length;
          draft.push(doubledList.current[_newPos] as unknown as Draft<T>);
        });
      });
      setDirection("next");
      setPos(newPos);
      setReturnedList(newReturnedList);
    },
    [returnedList, pos]
  );

  const previous = useCallback(
    (step: number = 1) => {
      let newPos = pos - step;
      if (newPos < 0) newPos += doubledList.current.length;
      let headPos = pos - size;
      const newReturnedList = produce(returnedList, (draft) => {
        range(step).forEach(() => draft.pop());
        range(step).forEach(() => {
          headPos--;
          if (headPos < 0) headPos += doubledList.current.length;
          draft.unshift(doubledList.current[headPos] as unknown as Draft<T>);
        });
      });
      setDirection("prev");
      setPos(newPos);
      setReturnedList(newReturnedList);
    },
    [pos, size, returnedList]
  );

  return [
    returnedList,
    previous,
    next,
    {
      current: middle,
      actualCurrent: mod(middle - 1, size),
      direction,
      total: list.length,
    },
  ];
}
