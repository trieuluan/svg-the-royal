import { PropsWithChildren, useMemo } from "react";
import { Collapse } from "@mui/material";
import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";

type CollapsableProps = {};
export default function Collapsable(
  props: PropsWithChildren<{ open: boolean; onToggle: () => void }>
): JSX.Element {
  const Icon = useMemo(() => {
    if (props.open) return MinusIcon;
    return PlusIcon;
  }, [props.open]);

  return (
    <>
      <Icon sx={{ cursor: "pointer" }} onClick={() => props.onToggle()} />
      <Collapse
        in={props.open}
        collapsedSize={"1.45em"}
        sx={{ lineHeight: 1.7, "& strong": { fontWeight: 500 } }}
      >
        {props.children}
      </Collapse>
    </>
  );
}
