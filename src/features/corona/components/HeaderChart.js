import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getConfirmed } from '../reducer/coronaSlice';

export default function HeaderChart(){
  const dispatch = useDispatch()
  const data = useSelector(state => state.corona.confirmedState)
  const labelHalfWidth = 50;
  let lastLabelCoordinate;
  const ArgumentLabel = (props) => {
    const { x } = props;
    // filter Labels
    if (
      lastLabelCoordinate &&
      lastLabelCoordinate < x &&
      x - lastLabelCoordinate <= labelHalfWidth
    ) {
      return null;
    }
    lastLabelCoordinate = x;
    return <ArgumentAxis.Label {...props} />;
  };
  
  useEffect(()=>{
    dispatch(getConfirmed())
  },[])

    return (
      <Paper>
        <Chart
          data={data} 
        >
          <ArgumentAxis labelComponent={ArgumentLabel}/>
          <ValueAxis />

          <LineSeries
            name="line"
            valueField="lineValue"
            argumentField="argument"
          />
        </Chart>
      </Paper>
    );
  }
