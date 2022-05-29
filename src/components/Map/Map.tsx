import { FC, useEffect } from "react";
import css from "./Map.module.scss";
import cn from "classnames";
import { MapProps } from "./Map.props";
// Hooks
import useScript from "@hooks/useScript";
// Config
import config from "@config/index";
// Utils
import mapInit from "./utils";

const Map: FC<MapProps> = ({ className, coords }) => {
  const status = useScript(config.YANDEX_MAP_API_URL);

  useEffect(() => {
    if (status === "ready" && coords.length !== 0) {
      mapInit(ymaps, coords);
    }
  }, [status, coords]);

  return (
    <div className={cn(css.map, className)}>
      <div id="map" className={css.map_wrap}></div>
    </div>
  );
};

export default Map;
