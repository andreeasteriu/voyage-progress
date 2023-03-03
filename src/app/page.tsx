"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import VoyageProgress from "components/voyage-progress";
import { useState } from "react";
import Form from "components/form";
import styled from "@emotion/styled";

const Layout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default function Home() {
  const [portOfLoading, setPortOfLoading] = useState("Karlshamn");
  const [portOfDischarge, setPortOfDischarge] = useState("Klaipeda");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <main>
      <Layout>
        <Form
          portOfLoading={portOfLoading}
          setPortOfLoading={setPortOfLoading}
          portOfDischarge={portOfDischarge}
          setPortOfDischarge={setPortOfDischarge}
          departureTime={departureTime}
          setDepartureTime={setDepartureTime}
          arrivalTime={arrivalTime}
          setArrivalTime={setArrivalTime}
          handleSubmit={handleSubmit}
        />
        <VoyageProgress
          portOfLoading={portOfLoading}
          portOfDischarge={portOfDischarge}
          departureTime={departureTime}
          arrivalTime={arrivalTime}
        />
      </Layout>
    </main>
  );
}
