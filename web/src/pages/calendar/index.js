import * as React from 'react';
import Navbar from '../../components/navbar';

import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2018-11-01';
const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];

const Calendar = () => {
    return (
      <div>
      <Navbar></Navbar>
      <Paper>
        <Scheduler data={schedulerData}>
          <ViewState currentDate={currentDate}/>
          <DayView startDayHour={9} endDayHour={14}/>
          <Appointments />
        </Scheduler>
      </Paper>
      </div>
    );
}

export default Calendar;