import { AdvInput, AdvOutput, RollupState } from "@cartesi/rollup-devkit";

interface PatientData {
  name: string;
  age: number;
  // Add more fields as needed
}

interface HealthcareState extends RollupState {
  patients: { [id: string]: PatientData };
}

function handleAddPatient(
  state: HealthcareState,
  id: string,
  data: PatientData
): AdvOutput {
  state.patients[id] = data;
  return { state, logs: [`Patient ${id} added successfully`], notices: [] };
}

function handleGetPatient(state: HealthcareState, id: string): AdvOutput {
  const patient = state.patients[id];
  if (patient) {
    return {
      state,
      logs: [`Retrieved patient ${id}`],
      notices: [JSON.stringify(patient)],
    };
  } else {
    return { state, logs: [`Patient ${id} not found`], notices: [] };
  }
}

export function handleAdvance(
  state: HealthcareState,
  input: AdvInput
): AdvOutput {
  const { payload } = input;
  const request = JSON.parse(payload);

  switch (request.method) {
    case "addPatient":
      return handleAddPatient(state, request.id, request.data);
    case "getPatient":
      return handleGetPatient(state, request.id);
    default:
      return { state, logs: ["Invalid method"], notices: [] };
  }
}

export function handleInspect(
  state: HealthcareState,
  input: AdvInput
): AdvOutput {
  // Implement inspection logic if needed
  return { state, logs: [], notices: [] };
}
