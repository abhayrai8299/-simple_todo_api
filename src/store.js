import { legacy_createStore as createStore ,applyMiddleware,compose} from "redux";
import rootreducer from "./redux/reducers/main";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)));
export default store;
