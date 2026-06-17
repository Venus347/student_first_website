import React from "react";
import {useState} from "react";
import "./ScheduleForm.css";

type Course = {
    course: string;
    day: string;
    start_time: number;
    end_time: number;
};
type ScheduleFormProps = {
    addCourse: (course: Course) => void;
    clearSchedule: () => void;
};

const mapTime = (time: string): number => {
  const map: Record<string, number> = {
    "8am": 8,
    "9am": 9,
    "10am": 10,
    "11am": 11,
    "12pm": 12,
    "1pm": 13,
    "2pm": 14,
    "3pm": 15,
    "4pm": 16,
    "5pm": 17,
    "6pm": 18,
    "7pm": 19,
    "8pm": 20,
    "9pm": 21,
    "10pm": 22,
  };

  return map[time];
};

export default function ScheduleForm({
    addCourse,
    clearSchedule,

}: ScheduleFormProps){

  const [day, setDay] = useState("Monday");
  const [startTime, setStartTime] = useState("8am");
  const [endTime, setEndTime] = useState("9am");
  const [courseTitle, setCourseTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const start = mapTime(startTime);
    const end = mapTime(endTime);
    if (end <= start) {
      alert("Please pick a valid time.");
      return;
    }

    if (!courseTitle.trim()) {
      alert("Please enter a course title.");
      return;
    }

  addCourse({
    course: courseTitle,
    day,
    start_time: start,
    end_time: end,
  });

  setCourseTitle("");
};
  return (

    <div className="form">
      <div className="formHeader">
      <p className="label">
        <b>Enter course title, start time, and end time here:</b>
      </p>
      </div>
      
    
      <form id="form" className="inner" onSubmit={handleSubmit}>
        {/* Day */}
        <div className="dropdown">
          <label htmlFor="day">Day:</label>
          <select id="day" value={day} onChange= {(e) => setDay(e.target.value)} name="day" className="dropdown">
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
        </div>

        {/* Start time */}
        <div className="dropdown">
          <label htmlFor="start_time">Start time:</label>
          <select id="start_time" value={startTime} onChange= {(e) => setStartTime(e.target.value)} name="start_time" className="dropdown">
            <option value="8am">8am</option>
            <option value="9am">9am</option>
            <option value="10am">10am</option>
            <option value="11am">11am</option>
            <option value="12pm">12pm</option>
            <option value="1pm">1pm</option>
            <option value="2pm">2pm</option>
            <option value="3pm">3pm</option>
            <option value="4pm">4pm</option>
            <option value="5pm">5pm</option>
            <option value="6pm">6pm</option>
            <option value="7pm">7pm</option>
            <option value="8pm">8pm</option>
            <option value="9pm">9pm</option>
            <option value="10pm">10pm</option>
          </select>
        </div>

        {/* End time */}
        <div className="dropdown">
          <label htmlFor="end_time">End time:</label>
          <select id="end_time" value={endTime} onChange= {(e) => setEndTime(e.target.value)} name="end_time" className="dropdown">
            <option value="8am">8am</option>
            <option value="9am">9am</option>
            <option value="10am">10am</option>
            <option value="11am">11am</option>
            <option value="12pm">12pm</option>
            <option value="1pm">1pm</option>
            <option value="2pm">2pm</option>
            <option value="3pm">3pm</option>
            <option value="4pm">4pm</option>
            <option value="5pm">5pm</option>
            <option value="6pm">6pm</option>
            <option value="7pm">7pm</option>
            <option value="8pm">8pm</option>
            <option value="9pm">9pm</option>
            <option value="10pm">10pm</option>
          </select>
        </div>

        {/* Course title */}
        <div className="dropdown">
          <label htmlFor="ctitle">Course title:</label>
          <input
            className="dropdown"
            type="text"
            id="ctitle"
            value={courseTitle}
            name="ctitle"
            onChange= {(e) => setCourseTitle(e.target.value)}
            placeholder="Enter course title here."
          />
        </div>

        {/* Buttons */}
        <div className="buttonRow">
         <button className = "button"
            type="button"
            onClick={() => {
            
            setCourseTitle("");
            setDay("Monday");
          setStartTime("8am");
           setEndTime("9am");
        }}
    >
    Reset
  </button>

  <button type="submit" className = "button">
    Add Course
  </button>

  <button
    className = "button"
    type="button"
    id="erase"
    onClick={clearSchedule}
  >
    Erase Schedule
  </button>
</div>
</form>
</div>
);
}
