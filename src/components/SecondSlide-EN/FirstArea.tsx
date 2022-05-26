import { useSlideContext } from "./Context";
import { m } from "framer-motion";

export default function FirstArea(props: unknown): JSX.Element {
  const { areaProps } = useSlideContext("first");
  return (
    <a href="/en/mat-bang-chi-tiet/?tab=dinh-song-hoang-kim#mat-bang-chi-tiet">
    <m.path
      d="M1608.826,1314.541l-242.755-49.053-97.009,124.835v-25.967l97.009-127.073,242.755,50.334Z"
      transform="translate(1 -1128)"
      {...areaProps}
    />
    </a>
  );
}
