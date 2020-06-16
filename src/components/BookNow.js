import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment)
const myEventsList = [{ 
  'title': 'All Day Event very long title',
  'allDay': true,
  'start': new Date(2020, 6, 0),
  'end': new Date(2020, 6, 1)
},
{
  'title': 'Long Event',
  'start': new Date(2020, 6, 7),
  'end': new Date(2020, 6, 10)
}]


class BookNow extends React.Component {
    constructor() {
        super();
      }
 

      render() {
        return (
          <div>
          <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
        />
        </div>
        )
      }
}
export default BookNow