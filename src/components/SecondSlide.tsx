import { useMediaQuery } from "react-responsive";
import { PropsWithChildren } from "react";
import SecondSlideDesktop from "./SecondSlideDesktop";
import SecondSlideMobile from "./SecondSlideMobile";

const Desktop = ({ children }: any) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }: any) => {
  const isMobile = useMediaQuery({ maxWidth: 992 });
  return isMobile ? children : null;
};

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
