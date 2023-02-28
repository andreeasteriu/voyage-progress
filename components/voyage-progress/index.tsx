import React from "react";

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
  return <div>VoyageProgress</div>;
};

export default VoyageProgress;
