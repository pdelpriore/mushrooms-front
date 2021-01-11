import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./views/app/App";
import configureStore from "./redux/config/Store";
import "./index.css";

const { myStore } = configureStore();

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
