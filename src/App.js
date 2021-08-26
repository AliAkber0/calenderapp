//import logo from "./logo.svg";
import "./App.css";
import MyCalendar from "./Component/calender";
import Countries from "./Component/country";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const [events, setEvents] = useState([]);
  const holidays = useSelector((state) => state.holidays);

  console.log(holidays);
  useEffect(() => {
    holidays.length &&
      setEvents(
        holidays.map((event, index) => ({
          id: index,
          title: event.name,
          allDay: true,
          start: new Date(event.date.iso),
          end: new Date(event.date.iso),
        }))
      );
  }, [holidays]);
  return (
    <>
      <div className="App">
        <MyCalendar holidays={events} />
        <Countries />
      </div>
      {/* <div>{holidays}</div> */}
    </>
  );
}
export default App;
