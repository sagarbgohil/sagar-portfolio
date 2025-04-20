import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const TabContentSkills = ({ data }) => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h2 className="text-4xl font-bold">{data.title}</h2>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {data.description}
      </p>

      {data.items.length > 0 && (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
          {data.items.map((item, index) => (
            <li
              key={index}
              className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
            >
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                    {item.icon && (
                      <div className="text-6xl group-hover:text-accent transition-all duration-300">
                        {item.icon}
                      </div>
                    )}
                  </TooltipTrigger>
                  <TooltipContent className="capitalize">
                    {item.name}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TabContentSkills;
