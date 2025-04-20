import React from "react";
import { ScrollArea } from "./ui/scroll-area";

const TabContentAbout = ({ data }) => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h2 className="text-4xl font-bold">{data.title}</h2>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {data.description}
      </p>

      {data.items.length > 0 && (
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
          {data.items.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center xl:justify-start gap-4"
            >
              {item.name && <span className="text-white/60">{item.name}</span>}
              {item.value && <span className="text-xl">{item.value}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TabContentAbout;
