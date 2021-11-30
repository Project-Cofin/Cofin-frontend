import ChartLayOut from "features/corona/components/ChartLayOut";
import React from "react";
import { AppBugReports, HeaderChart, MainChart, StackChart } from "features/corona/index";

const ChartPage = props =>{

    return(<>
        <div>
            <ChartLayOut>
            <h2>모든 차트</h2>
            <HeaderChart></HeaderChart>
            <AppBugReports></AppBugReports>
            <StackChart></StackChart>
            <MainChart></MainChart>
            </ChartLayOut>
        </div>
    
    
    </>)
};

export default ChartPage;