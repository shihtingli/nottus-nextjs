import React from "react";

// components


import CardOverView from "components/Demos/CardOverview.js";

// layout for page

import Admin from "layouts/DemoAdmin.js";

export default function Overview() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardOverView />
        </div>
       
      </div>
    </>
  );
}

Overview.layout = Admin;
