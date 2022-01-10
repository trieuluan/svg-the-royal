import { useCallback, useRef, useState } from "react";
import produce, { Draft } from "immer";

export type UseCycledListOptions = {
  size: number;
};
type Callback = () => void;
export function useCycledList<T>(
  list: T[],
  { size }: UseCycledListOptions
): [T[], Callback, Callback] {
  const [returnedList, setReturnedList] = useState<T[]>(() =>
      list.slice(0, size)
    ),
    pos = useRef(size - 1);

  const next = useCallback(() => {
    pos.current = (pos.current + 1) % list.length;
    console.log(pos);
    const newReturnedList = produce(returnedList, (draft) => {
      draft.shift();
      draft.push(list[pos.current] as unknown as Draft<T>);
    });
    setReturnedList(newReturnedList);
  }, [list, returnedList]);

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
