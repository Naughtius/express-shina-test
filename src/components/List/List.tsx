import { FC, useCallback } from "react";
import css from "./List.module.scss";
import cn from "classnames";
import { ListProps } from "./List.props";
import { useDispatch, useSelector } from "@hooks/index";
// Components
import ListItem from "@components/ListItem";
// Types
import { IListItem } from "@main-types/list";
// Store
import { changeGeoHandler } from "@store/list/list";

const List: FC<ListProps> = ({ className, list }) => {
  const activeGeoId = useSelector((state) => state.list.activeGeoId);
  const dispatch = useDispatch();

  const changeGeo = useCallback(
    (id: number) => {
      dispatch(changeGeoHandler(id));
    },
    [dispatch]
  );

  return (
    <div className={cn(css.list, className)}>
      {list?.map((item: IListItem) => (
        <ListItem
          {...item}
          key={item.customId}
          className={cn(css.list_item, "coord-js")}
          onClick={() => changeGeo(item.customId)}
          active={activeGeoId === item.customId}
        />
      ))}
    </div>
  );
};

export default List;
