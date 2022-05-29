import { takeEvery, put, call } from "redux-saga/effects";
import { getFetchList, getFetchListError, getFetchListSuccess } from "./list";
// Api
import { getAllGeo } from "@api/geo";
// Types
import { IListItem } from "@main-types/list";

function* workGetFetchList() {
  try {
    const { data } = yield call(getAllGeo);

    const dataWithId = data.pickPoints.map(
      (item: IListItem, index: number) => ({
        ...item,
        customId: index,
      })
    );

    const dataWithCoords = data.pickPoints.map(
      (item: IListItem, index: number) => [item.latitude, item.longitude]
    );

    yield put(
      getFetchListSuccess({ list: dataWithId, coords: dataWithCoords })
    );
  } catch (error) {
    yield put(getFetchListError());
  }
}

function* listSagaWatcher() {
  yield takeEvery(getFetchList.type, workGetFetchList);
}

export default listSagaWatcher;
