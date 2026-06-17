import React from "react";
import {useState} from "react";
import calendar from "./assets/calendar.png";
import citytechlogo from "./assets/citytechlogo.png";
import ScheduleForm from "./ScheduleForm";
import "./App.css";

const times = [
  "8am","9am","10am","11am","12pm",
  "1pm","2pm","3pm","4pm","5pm",
  "6pm","7pm","8pm","9pm","10pm"
];
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ScheduleHeader = () => {
  return (
    <div className="container">
      <hr className="line"/>

      <h1 className="title">
        <img
          src={calendar} alt="Calendar icon" 
          height={70}
          width={70}
          className = "calendar1"
          />
        Student Schedule Builder!
        <img
          src={calendar} alt="Calendar icon" 
          height={70}
          width={70}
          className = "calendar"
          />
      </h1>
    </div>
  )
}
const Intro = () => {
  return (
    <p className = "intro">
      <i>
        Welcome to the student schedule builder! Input your courses in the menu below to see them displayed on the calendar.
      </i>
    </p>
  )
}
const Table = ({ courses }: { courses: Course[] }) => {
  return (
    <div>
      <table id="Calendar" className="table" >
        <thead>
          <tr className="thead">
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>

        <tbody className="tbody">
            {times.map((time) => {
    const hour = mapTime(time);

    return (
      <tr key={time}>
        <td>{time}</td>

        {days.map((day) => {
          const course = courses.find(
            (c) =>
              c.day === day &&
              hour >= c.start_time &&
              hour <= c.end_time
          );

          return (
            <td
              key={day}
              style={{
                background: course
                  ? assignColor(day)
                  : undefined,
              }}
            >
              {course?.course ?? ""}
            </td>
          );
        })}
      </tr>
    );
  })}
        </tbody>
      </table>
    </div>
  )
}

type Course = {
  course: string;
  day: string;
  start_time: number;
  end_time: number;
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

const assignColor = (day: string) => {
  const colors: Record<string, string> = {
    Sunday: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    Monday: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    Tuesday: "linear-gradient(135deg, #84fab0, #8fd3f4)",
    Wednesday: "linear-gradient(135deg, #f6d365, #fda085)",
    Thursday: "linear-gradient(135deg, #c3cfe2, #c3aed6)",
    Friday: "linear-gradient(135deg, #ff6a88, #ff99ac)",
    Saturday: "linear-gradient(135deg, #fbc2eb, #fcb69f)",
  };

  return colors[day];
};


const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const addCourse = (course: Course) => {
    setCourses((prev) => [...prev, course]);
  };
  const clearSchedule = () => {
    setCourses([]);
  };
  return (
    <>
      <ScheduleHeader />
      <Intro />
      <Table courses={courses}/>
      <ScheduleForm 
        addCourse={addCourse}
        clearSchedule={clearSchedule}
      />
    </>
  );
};
export default App;