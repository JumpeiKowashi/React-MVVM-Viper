import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserView from "./Feature/User/UserView";
import { Routes, Route } from "react-router";
import PostView from "./Feature/Post/PostView";
import NoMatch from "./Feature/NoMatch/NoMatch";
import { Provider } from "react-redux"; // react-reduxからProviderをインポート
import { store } from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserView />} />
          <Route path="/post" element={<PostView />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
