"use client";

import { useState } from "react";

const years = ["2024", "2023", "2022", "2021", "2020"];

const YearFilter = () => {
  const [selectedYear, setSelectedYear] = useState(years[0]);
  return (
    <div className="bg-white flex items-center space-x-5 rounded-3xl p-1 text-primary-links">
      {years.map((item, i) => (
        <span
          onClick={() => setSelectedYear(item)}
          key={i}
          className={`
            text-xs
            ${
              selectedYear === item
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

export default YearFilter;
