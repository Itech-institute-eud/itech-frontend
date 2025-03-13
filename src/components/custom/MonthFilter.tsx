"use client";

import { useState } from "react";

const MonthFilter = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedMonth, setSelctedMonth] = useState(months[0]);
  return (
    <div className="bg-white flex items-center space-x-5 rounded-3xl p-1 text-primary-links">
      {months.map((item, i) => (
        <span
          onClick={() => setSelctedMonth(item)}
          key={i}
          className={`
          text-xs
          ${
            selectedMonth === item
              ? "bg-primary-desc text-white px-3 py-1 rounded-2xl"
              : "text-xs px-3 cursor-pointer transition-colors"
          }
          `}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default MonthFilter;
