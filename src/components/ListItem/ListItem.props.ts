import { IListItem } from "@main-types/list";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export interface ListItemProps
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    IListItem {
  className?: string;
  active?: boolean;
}
