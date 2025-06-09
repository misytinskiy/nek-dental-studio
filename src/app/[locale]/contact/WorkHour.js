"use client";

import { useTranslations } from "next-intl";
import "./workhour-table.css";

export default function WorkHour() {
  const w = useTranslations("week");
  const tOpen = useTranslations("footer.open");

  const hours = [
    { id: 1, day: w("mon"), time: "11:00 – 19:00" },
    { id: 2, day: w("tue"), time: "11:00 – 19:00" },
    { id: 3, day: w("wed"), time: "11:00 – 19:00" },
    { id: 4, day: w("thu"), time: "11:00 – 19:00" },
    { id: 5, day: w("fri"), time: "11:00 – 19:00" },
    { id: 6, day: w("sat"), time: tOpen("closed") },
    { id: 7, day: w("sun"), time: tOpen("closed") },
  ];

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
