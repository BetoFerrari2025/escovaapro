import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 1, minutes: 55, seconds: 58 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 0; minutes = 0; seconds = 0; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="bg-store-red rounded-lg p-3 text-center">
      <p className="text-primary-foreground text-xs font-bold mb-1.5 uppercase tracking-wider">
        Essa promoção termina em
      </p>
      <div className="flex items-center justify-center gap-2">
        {[
          { value: pad(time.hours), label: "Horas" },
          { value: pad(time.minutes), label: "Minutos" },
          { value: pad(time.seconds), label: "Segundos" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="bg-card rounded-md px-3 py-1.5 min-w-[48px]">
              <span className="text-2xl font-black text-store-red animate-countdown inline-block">
                {item.value}
              </span>
              <p className="text-[9px] text-muted-foreground font-semibold uppercase">{item.label}</p>
            </div>
            {i < 2 && <span className="text-2xl font-black text-primary-foreground">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
