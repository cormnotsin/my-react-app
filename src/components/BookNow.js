import React from 'react'
import Iframe from 'react-iframe'
import ApiCalendar from 'react-google-calendar-api';

// export default function BookNow(){
//     return <div>
//             <Iframe url="https://calendar.google.com/calendar/embed?src=corm1337%40gmail.com&ctz=America%2FLos_Angeles" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"/>
//             </div>
// }

class BookNow extends React.Component {
    constructor() {
        super();
      }
      render() {
        return (
          <div>
              Book Now!
          </div>
        )
      }
}
export default BookNow