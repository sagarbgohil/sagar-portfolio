import React from "react";
import { ScrollArea } from "./ui/scroll-area";

const TabContent = ({ data }) => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h2 className="text-4xl font-bold">{data.title}</h2>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {data.description}
      </p>

      {data.items.length > 0 && (
        <ScrollArea className="h-[400px]">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {data.items.map((item, index) => (
              <li
                key={index}
                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
              >
                {item.top && <span className="text-accent">{item.top}</span>}
                {item.title && (
                  <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                    {item.title}
                  </h3>
                )}
                {item.bottom && (
                  <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-white/60">{item.bottom}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </ScrollArea>
      )}
    </div>
  );
};

export default TabContent;
