import { SvgIcon, SvgIconProps } from "@mui/material";
import {
  Children,
  ComponentType,
  createContext,
  PropsWithChildren,
  useContext,
} from "react";

type ReplacerObj = Record<string, ComponentType<any>>;
const Replacer = createContext<ReplacerObj>({});

function Traverser({ component, children, ...props }: PropsWithChildren<any>) {
  const replacer = useContext(Replacer);
  const Comp = replacer[props["data-name"]] || component;

  const newChildren = Children.map(children, (c) =>
    typeof c === "object" && c !== null && "type" in c ? (
      <Traverser component={c.type} {...c.props} />
    ) : (
      c
    )
  );

  return <Comp {...props}>{newChildren}</Comp>;
}

type AnimateSvgIconProps = {
  replacer?: ReplacerObj;
};
export default function AnimateSvgIcon({
  children,
  replacer = {},
  ...props
}: SvgIconProps & AnimateSvgIconProps): JSX.Element {
  const newChildren = Children.map(
    children,
    (c) =>
      typeof c === "object" &&
      c !== null &&
      "type" in c && <Traverser component={c.type} {...c.props} />
  );
  return (
    <Replacer.Provider value={replacer}>
      <SvgIcon {...props}>{newChildren}</SvgIcon>
    </Replacer.Provider>
  );
}
