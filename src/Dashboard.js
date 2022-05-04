import React from "react";
import DashValues from "./Dashvalues";
import { Link } from "react-router-dom";

function Dashboard() {
  let dashCard = [
    {
      period: "Earnings(Monthly)",
      rate: "$40,000",
      border: "darkblue",
      calender: true,
    },
    {
      period: "Earnings(Annual)",
      rate: "$2,15,000",
      border: "green",
      dollar: true,
    },
    {
      period: "Tasks",
      rate: "50%",
      border: "skyBlue",
      progress: true,
    },
    {
      period: "Pending Requests",
      rate: 18,
      border: "yellow",
      pending: true,
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
          <button class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i class="fas fa-download fa-sm text-white-50"></i> Employee Details
          </button>
        </div>
        <div class="row">
          {dashCard.map((x) => {
            return <DashValues value={x}></DashValues>;
          })}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
