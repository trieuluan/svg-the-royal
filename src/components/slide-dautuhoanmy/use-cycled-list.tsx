import {
  Children,
  cloneElement,
  ReactElement,
  useCallback,
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
): [T[], Callback, Callback] {
  const doubledList = useRef([
    ...list,
    ...(Children.map(list, (child, i) =>
      cloneElement(child, { key: `cloned__${i}` })
    ) as unknown as T[]),
  ]);
  const [returnedList, setReturnedList] = useState<T[]>(() =>
      doubledList.current.slice(0, size)
    ),
    pos = useRef(size - 1);

  const next = useCallback(() => {
    pos.current = (pos.current + 1) % doubledList.current.length;
    const newReturnedList = produce(returnedList, (draft) => {
      draft.shift();
      draft.push(doubledList.current[pos.current] as unknown as Draft<T>);
    });
    setReturnedList(newReturnedList);
  }, [returnedList]);

  const previous = useCallback(() => {
    pos.current--;
    if (pos.current < 0) pos.current += list.length;
    let headPos = pos.current - list.length;
    if (headPos < 0) headPos += list.length;
    const newReturnedList = produce(returnedList, (draft) => {
      draft.pop();
      draft.unshift(list[headPos] as unknown as Draft<T>);
    });
    setReturnedList(newReturnedList);
  }, [list, returnedList]);

  return [returnedList, previous, next];
}
