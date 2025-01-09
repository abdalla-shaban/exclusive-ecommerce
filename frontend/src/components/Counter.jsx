import { useEffect, useState } from "react";
export default function Counter() {
  const [timeCounter, setTimeCounter] = useState({
    days: 15,
    hours: 23,
    min: 59,
    sec: 59,
  });

  const counterInfo = [
    {
      durationBy: "Days",
      value: timeCounter.days,
    },
    {
      durationBy: "Hours",
      value: timeCounter.hours,
    },
    {
      durationBy: "Min",
      value: timeCounter.min,
    },
    {
      durationBy: "Sec",
      value: timeCounter.sec,
    },
  ];
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeCounter(({ days, hours, min, sec }) => {
        if (sec > 0) {
          sec--;
        } else {
          sec = 59;
          if (min > 0) {
            min--;
          } else {
            min = 59;
            if (hours > 22) {
              hours--;
            } else {
              hours = 23;
              if (days > 14) {
                days--;
              } else {
                days = 15;
              }
            }
          }
        }
        return { days, hours, min, sec };
      });
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      {counterInfo.map(({ durationBy, value }, i) => (
        <div
          key={i}
          className="flex items-center gap-3 font-semibold capitalize"
        >
          <div className="flex flex-col">
            {durationBy}
            <span className="countdown font-mono text-3xl font-bold">
              <span style={{ "--value": value }}></span>
            </span>
          </div>
          {i < counterInfo.length - 1 && (
            <span className="text-3xl text-[#DB4444]">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
