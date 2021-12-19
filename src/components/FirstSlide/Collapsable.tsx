import { Children, cloneElement, PropsWithChildren, ReactElement } from "react";
import { Collapse } from "@mui/material";

type CollapsableProps = {};
export default function Collapsable(
  props: PropsWithChildren<{ open: boolean; onToggle: () => void }>
): JSX.Element {
  const [_icon, _typo] = Children.toArray(props.children);

  const newIcon = cloneElement(_icon as ReactElement, {
    sx: { cursor: "pointer" },
    onClick: () => props.onToggle(),
  });

  return (
    <>
      {newIcon}
      <Collapse
        in={props.open}
        collapsedSize={"1.45rem"}
        sx={{ lineHeight: 1.7 }}
      >
        {_typo}
      </Collapse>
    </>
  );
}
