"use client";

import { useState } from "react";
import "./workhour-table.css";

export default function WorkHour() {
  const [hours] = useState([
    { id: 1, day: "Monday", time: "11:00 – 19:00" },
    { id: 2, day: "Tuesday", time: "11:00 – 19:00" },
    { id: 3, day: "Wednesday", time: "11:00 – 19:00" },
    { id: 4, day: "Thursday", time: "11:00 – 19:00" },
    { id: 5, day: "Friday", time: "11:00 – 19:00" },
    { id: 6, day: "Saturday", time: "11:00 – 19:00" },
    { id: 7, day: "Sunday", time: "11:00 – 19:00" },
  ]);

  return (
    <div className="table-responsive workhour-table">
      <table className="table table-bordered table-sm">
        <tbody>
          {hours.map(({ id, day, time }) => (
            <tr key={id}>
              <th style={{ width: "50%" }}>{day}</th>
              <td className="text-end">{time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
