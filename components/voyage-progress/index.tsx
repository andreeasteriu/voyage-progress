import React, { useState, useEffect } from "react";
import { ProgressBar } from "./progress-bar";
import { Container, Ports, ProgressMessage, Text } from "./styles";

type Progress = {
  portOfLoading: string;
  portOfDischarge: string;
  departureTime: string | Date;
  arrivalTime: string | Date;
};

const VoyageProgress = ({
  portOfLoading,
  portOfDischarge,
  departureTime,
  arrivalTime,
}: Progress) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    const startTime = new Date(departureTime).getTime();
    const endTime = new Date(arrivalTime).getTime();
    const totalTime = endTime - startTime;
    setTotalTime(totalTime);

    const timer = setInterval(() => {
      const elapsedTime = new Date().getTime() - startTime;
      setElapsedTime(elapsedTime);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [departureTime, arrivalTime]);

  const countingTime = ((elapsedTime / totalTime) * 100).toFixed(2);

  const progress = (countingTime: number) => {
    if (countingTime > 100) {
      return 100;
    } else if (countingTime < 0) return 0;
    return Math.floor(countingTime);
  };

  return (
    <Container>
      <ProgressBar progress={progress(+countingTime) || 0} />
      <Ports>
        <Text>{portOfLoading}</Text>
        <Text>{portOfDischarge}</Text>
      </Ports>
      <ProgressMessage>{`${
        progress(+countingTime) | 0
      }% completed`}</ProgressMessage>
    </Container>
  );
};

export default VoyageProgress;
