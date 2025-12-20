"use client";
import { cardData } from "../common/Helper";
import StatusCard from "../common/StatusCard";
import SalesChart from "./SalesChart";

const Dashboard = () => {
  return (
    <>
      <div className="mb-40">
        <div className="status-card-container-style">
          {cardData.map((card, index) => (
            <StatusCard key={index} {...card} />
          ))}
        </div>
        <div className="sales-chart-container-style">
          <SalesChart />
        </div>
      </div>
      <div className="left-bottom-style"></div>
      <div className="right-bottom-style"></div>
    </>
  );
};

export default Dashboard;
