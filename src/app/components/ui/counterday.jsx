"use client";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counterday = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div>
        {counterOn && (
          <CountUp
            className="text-black"
            start={383500}
            end={3835039}
            duration={2}
            delay={0}
          />
        )}
      </div>
    </ScrollTrigger>
  );
};

export default Counterday;
