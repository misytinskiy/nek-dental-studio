"use client";

import "./price-table.css";

export default function PriceTable({ data }) {
  return (
    <div className="table-responsive price-table">
      <table className="table table-hover custom-price-table">
        <thead>
          <tr>
            <th style={{ width: "75%" }}>Service</th>
            <th className="text-end" style={{ width: "25%" }}>
              Price
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.service}</td>
              <td className="text-end">{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
