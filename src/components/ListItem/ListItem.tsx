import { FC } from "react";
import css from "./ListItem.module.scss";
import cn from "classnames";
import { ListItemProps } from "./ListItem.props";

const ListItem: FC<ListItemProps> = ({
  address,
  budgets,
  className,
  active,
  onClick,
  latitude,
  longitude,
}) => (
  <button
    className={cn(css.item, className, active && css.active)}
    onClick={onClick}
    data-latitude={latitude}
    data-longitude={longitude}
  >
    <div className={css.item_address}>{address}</div>
    <div className={css.item_budgets}>
      {budgets.map((item, index) => (
        <div className={css.item_budget} key={index}>
          {item}
        </div>
      ))}
    </div>
  </button>
);

export default ListItem;
