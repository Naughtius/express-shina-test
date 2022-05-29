import { FC, useEffect } from "react";
import css from "./App.module.scss";
import { useDispatch, useSelector } from "@hooks/index";
// Components
import Map from "@components/Map";
import List from "@components/List";
import Spinner from "@components/Spinner";
// Store
import { getFetchList } from "@store/list/list";

const App: FC = () => {
  const isLoading = useSelector((state) => state.list.isLoading);
  const isError = useSelector((state) => state.list.isError);
  const list = useSelector((state) => state.list.list);
  const coords = useSelector((state) => state.list.coords);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetchList());
  }, [dispatch]);

  if (isError) {
    return (
      <div className={css.app}>
        <div className={css.app_error}>Попробуйте позже!</div>
      </div>
    );
  }

  return (
    <div className={css.app}>
      {isLoading ? (
        <div className={css.app_loader}>
          <Spinner />
        </div>
      ) : (
        <div className={css.app_wrapper}>
          <List className={css.app_list} list={list} />
          <Map className={css.app_map} coords={coords} />
        </div>
      )}
    </div>
  );
};

export default App;
