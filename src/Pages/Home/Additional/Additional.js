import React from "react";

const Additional = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold pt-10">
        Monthly Books Data Update{" "}
      </h2>
      <div className="flex flex-row justify-center ">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-6 shadow my-5 shadow-xl">
          <div className="stat place-items-center">
            <div className="stat-title">Revenue</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">From January 1st to February 1st</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Users</div>
            <div className="stat-value text-secondary">4,200</div>
            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additional;
