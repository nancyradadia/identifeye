// Strucutre of patients object:

// {
//     "patientId": {
//         "name": "patientName",
//         "exams": ["examId1", "examId2", ...]
//     }

function addPatient(id, name, patients) {
  try {
    id = id.trim();
    name = name.trim();
    if (!patients[id]) {
      patients[id] = { name, exams: [] };
    }
    return patients;
  } catch (error) {
    console.error("Adding patient failed: ", error);
  }
}

function deletePatient(id, patients) {
  try {
    id = id.trim();
    if (patients[id]) {
      delete patients[id];
    }

    return patients;
  } catch (error) {
    console.error("Deleting patient failed: ", error);
  }
}

function resetPatients(patients) {
  for (let key in patients) {
    delete patients[key];
  }
  return patients;
}

export { addPatient, deletePatient, resetPatients };
