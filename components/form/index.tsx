"use client";

import { Dispatch, SetStateAction } from "react";
import { StyledForm, Container } from "./styles";

type FormProps = {
  portOfLoading: string;
  setPortOfLoading: Dispatch<SetStateAction<string>>;
  portOfDischarge: string;
  setPortOfDischarge: Dispatch<SetStateAction<string>>;
  departureTime: string;
  setDepartureTime: Dispatch<SetStateAction<string>>;
  arrivalTime: string;
  setArrivalTime: Dispatch<SetStateAction<string>>;
  handleSubmit: (key: any) => void;
};

const Form = ({
  portOfLoading,
  setPortOfLoading,
  portOfDischarge,
  setPortOfDischarge,
  departureTime,
  setDepartureTime,
  arrivalTime,
  setArrivalTime,
  handleSubmit,
}: FormProps) => {
  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="portOfLoading">Port of Loading</label>
        <input
          type="text"
          id="portOfLoading"
          value={portOfLoading}
          onChange={(event) => setPortOfLoading(event.target.value)}
        />
        <label htmlFor="portOfDischarge">Port of Discharge</label>
        <input
          type="text"
          id="portOfDischarge"
          value={portOfDischarge}
          onChange={(event) => setPortOfDischarge(event.target.value)}
        />
        <label htmlFor="departureTime">Departure Time</label>
        <input
          type="datetime-local"
          id="departureTime"
          value={departureTime}
          onChange={(event) => setDepartureTime(event.target.value)}
        />
        <label htmlFor="arrivalTime">Arrival Time</label>
        <input
          type="datetime-local"
          id="arrivalTime"
          value={arrivalTime}
          onChange={(event) => setArrivalTime(event.target.value)}
        />
        <button type="submit">Submit</button>
      </StyledForm>
    </Container>
  );
};

export default Form;
