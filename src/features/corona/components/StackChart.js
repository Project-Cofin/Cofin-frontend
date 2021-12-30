import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { EventTracker, SelectionState } from '@devexpress/dx-react-chart';
import { useState } from 'react';


export default function StackChart (x){
  const [ selection, setSelection] = useState([])
  const data = x.param.slice(0, -1)
  const compare = (
    { series, point }, { series: targetSeries, point: targetPoint },
  ) => series === targetSeries && point === targetPoint;
  const toggle = ({ targets }) => {
      const target = targets[0];
    if (target) {
      setSelection((selection.length > 0) && compare(selection[0], target) ? [] : [target])
      }
    };

    return (
      <div>
        <span>
        {selection.length ? data[selection[0].point].label : undefined}:
          {' '}
          {selection.length ? data[selection[0].point].value*100 : undefined}
        </span>
        <Paper>
          <Chart
            data={data}
          >
            <ArgumentAxis />
            <ValueAxis />

            <BarSeries
              valueField="value"
              argumentField="label"
            />
            <EventTracker onClick={toggle} />
            <SelectionState selection={selection} />
          </Chart>
        </Paper>
      </div>
    );
  }
