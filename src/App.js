import logo from "./logo.svg";
// import "./App.css";
import Sidebar from "./Sidebar";
import TopBar from "./Topbar";
import Dashboard from "./Dashboard";
import Users from "./Users";
import CreateUsers from "./CreateUsers";
import UserView from "./UserView";
import UserEdit from "./UserEdit";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <TopBar></TopBar>
            <div class="container-fluid">
              <Routes>
                <Route path="/Dashboard" element={<Dashboard></Dashboard>} />
                <Route path="/Users" element={<Users />} />
                <Route
                  path="/create-users"
                  element={<CreateUsers></CreateUsers>}
                />
                <Route
                  path="/user-view/:id"
                  element={<UserView></UserView>}
                ></Route>
                <Route
                  path="/user-edit/:id"
                  element={<UserEdit></UserEdit>}
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
