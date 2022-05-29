import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// Components
import App from "@components/App";
// Styles
import "@styles/reset.scss";
import "@styles/common.scss";
// Store
import { store } from "@store/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
