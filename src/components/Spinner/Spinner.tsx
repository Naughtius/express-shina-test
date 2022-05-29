import { FC } from "react";
import css from "./Spinner.module.scss";
import cn from "classnames";
import { SpinnerProps } from "./Spinner.props";

const Spinner: FC<SpinnerProps> = ({ className }) => (
  <div className={cn(css.spinner, className)}>
    <div></div>
    <div></div>
  </div>
);

export default Spinner;
