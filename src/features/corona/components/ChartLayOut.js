import * as React from 'react';
import Header from 'features/common/components/Header'
import Footer from 'features/common/components/Footer'

import 'features/corona/style/ChartLayOutStyle.css'
import { AppBugReports, HeaderChart, MainChart, StackChart } from 'features/corona/index';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToday, getWeek } from "../reducer/coronaSlice";

const ChartLayOut = () => {
  const dispatch = useDispatch()
  const today = useSelector(state => state.corona.todayState)
  const week = useSelector(state => state.corona.weekState)
  useEffect(()=>{
      dispatch(getToday())
      dispatch(getWeek())
  },[])
  return (
    <div class = "wrapper">
      <div class="Chartcontainer">
      <span className="header"><Header/></span> 

        <span class ="item6"><HeaderChart/></span>
        {
          Object.keys(today).map((x, i) => {
            if(x != 'update_at'){
              return(<span class = {`item${i+7}`}><AppBugReports param={{'label':x, 'value': today[x]}}/></span>)
            }
          })
        }
        <span class ="item11"><StackChart param={Object.keys(week).map(x => {
              return({'label':x, 'value': week[x]*0.01})
          })}/></span>

        
      <span class="ChartFooter"><Footer/></span>
      </div>
    </div>
  );
}

export default ChartLayOut;