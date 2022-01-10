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

export type UseCycledListOptions = {
  size: number;
};
type Callback = () => void;
export function useCycledList<T extends ReactElement>(
  list: T[],
  { size }: UseCycledListOptions
): [T[], Callback, Callback, { current: number }] {
  const doubledList = useRef([
    ...list,
    ...(Children.map(list, (child, i) =>
      cloneElement(child, { key: `cloned__${i}` })
    ) as unknown as T[]),
  ]);
  const [returnedList, setReturnedList] = useState<T[]>(() =>
      doubledList.current.slice(0, size)
    ),
    [pos, setPos] = useState(size - 1);

  const middle = useMemo(() => {
    let rs = pos - (size - 1) / 2;
    if (rs < 0) rs += list.length;
    if (rs >= list.length) rs -= list.length;
    return rs;
  }, [pos, size, list.length]);

  const next = useCallback(() => {
    const newPos = (pos + 1) % doubledList.current.length;
    const newReturnedList = produce(returnedList, (draft) => {
      draft.shift();
      draft.push(doubledList.current[newPos] as unknown as Draft<T>);
    });
    setReturnedList(newReturnedList);
    setPos(newPos);
  }, [returnedList, pos]);

  const previous = useCallback(() => {
    let newPos = pos - 1;
    if (newPos < 0) newPos += list.length;
    let headPos = newPos - list.length;
    if (headPos < 0) headPos += list.length;
    const newReturnedList = produce(returnedList, (draft) => {
      draft.pop();
      draft.unshift(list[headPos] as unknown as Draft<T>);
    });
    setReturnedList(newReturnedList);
    setPos(newPos);
  }, [list, returnedList, pos]);

  return [
    returnedList,
    previous,
    next,
    {
      current: middle,
    },
  ];
}
