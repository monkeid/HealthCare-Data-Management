import React, { useState } from "react";

const App: React.FC = () => {
  const [patientId, setPatientId] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [result, setResult] = useState("");

  const addPatient = async () => {
    try {
      const response = await fetch("http://localhost:8080/add-patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          method: "addPatient",
          id: patientId,
          data: { name: patientName, age: parseInt(patientAge) },
        }),
      });
      const data = await response.json();
      setResult(JSON.stringify(data));
    } catch (error) {
      setResult("Error adding patient");
    }
  };

  const getPatient = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/get-patient/${patientId}`
      );
      const data = await response.json();
      setResult(JSON.stringify(data));
    } catch (error) {
      setResult("Error getting patient");
    }
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
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        placeholder="Patient Name"
      />
      <input
        value={patientAge}
        onChange={(e) => setPatientAge(e.target.value)}
        placeholder="Patient Age"
        type="number"
      />
      <button onClick={addPatient}>Add Patient</button>
      <button onClick={getPatient}>Get Patient</button>
      <div>{result}</div>
    </div>
  );
};

export default App;
