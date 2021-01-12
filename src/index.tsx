import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./views/app/App";
import MyStore from "./redux/config/Store";
import "./index.css";

ReactDOM.render(
  <Provider store={MyStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
