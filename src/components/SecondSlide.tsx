import { PropsWithChildren } from "react";
import SecondSlideDesktop from "./SecondSlideDesktop";
import SecondSlideMobile from "./SecondSlideMobile";
import { Desktop, Mobile } from "./commons/responsives";

type Props = PropsWithChildren<unknown>;
export default function SecondSlide(props: Props): JSX.Element {
  return (
    <>
      <Desktop>
        <SecondSlideDesktop />
      </Desktop>
      <Mobile>
        <SecondSlideMobile />
      </Mobile>
    </>
  );
}
