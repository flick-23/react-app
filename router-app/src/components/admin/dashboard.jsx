import React from "react";
import Users from "./users";
import Posts from "./posts";
import SideBar from "./sidebar";
import {Route} from "react";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Routes>
        <Route path="/admin/users" element={Users} />
        <Route path="/admin/users" element={Posts} />
      </Routes>
    </div>
  );
};

export default Dashboard;
