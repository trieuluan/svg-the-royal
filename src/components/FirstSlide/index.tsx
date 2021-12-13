import { Desktop, Mobile } from "../commons/responsives";
import FirstSlideDesktop from "./FirstSlideDesktop";
import FirstSlideMobile from "./FirstSlideMobile";

type FirstSlideProps = {};
export default function FirstSlide(props: FirstSlideProps): JSX.Element {
  return (
    <>
      <Desktop>
        <FirstSlideDesktop />
      </Desktop>
      <Mobile>
        <FirstSlideMobile />
      </Mobile>
    </>
  );
}
