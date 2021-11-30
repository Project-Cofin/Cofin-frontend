import * as React from 'react';
import Header from 'features/common/components/Header'
import Footer from 'features/common/components/Footer'
import styled from "styled-components";

import 'features/corona/style/ChartLayOutStyle.css'
import { AppBugReports, HeaderChart, MainChart, StackChart } from 'features/corona/index';

const ChartLayOut = (props) => {
  return (
    <div class = "wrapper">
      <div class="Chartcontainer">
      <span className="header"><Header/></span> 

        <span class ="item6"><HeaderChart/>헤드차트</span>
        <span class ="item7"><AppBugReports/>앱1</span>
        <span class ="item8"><AppBugReports/>앱2</span>
        <span class ="item9"><AppBugReports/>앱3</span>
        <span class ="item10"><AppBugReports/>앱4</span>
        <span class ="item11"><StackChart/>스택차트</span>
        <span class ="item12"><MainChart/>메인차트</span>
        
      <span class="ChartFooter"><Footer/></span>
      </div>
    </div>
  );
}

export default ChartLayOut;

