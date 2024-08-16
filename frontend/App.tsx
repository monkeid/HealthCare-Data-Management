// frontend/App.tsx
import React, { useState } from "react";

const App: React.FC = () => {
  const [patientId, setPatientId] = useState("");
  const [patientData, setPatientData] = useState("");
  const [result, setResult] = useState("");

  const addPatient = async () => {
    // In a real app, this would interact with the Cartesi DApp
    setResult(`Patient ${patientId} added`);
  };

  const getPatient = async () => {
    // In a real app, this would interact with the Cartesi DApp
    setResult(`Data for patient ${patientId}: ${patientData}`);
  };

  return (
    <div>
      <h1>Healthcare Data Management</h1>
      <input
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        placeholder="Patient ID"
      />
      <input
        value={patientData}
        onChange={(e) => setPatientData(e.target.value)}
        placeholder="Patient Data"
      />
      <button onClick={addPatient}>Add Patient</button>
      <button onClick={getPatient}>Get Patient</button>
      <div>{result}</div>
    </div>
  );
};

export default App;
