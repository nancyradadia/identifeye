function addExam(patientId, examId, patients) {
  try {
    patientId = patientId.trim();
    examId = examId.trim();
    if (patients[patientId] && !patients[patientId].exams.includes(examId)) {
      patients[patientId].exams.push(examId);
    }
    return patients;
  } catch (error) {
    console.error("Adding exam failed: ", error);
  }
}

function deleteExam(examId, patients) {
  try {
    examId = examId.trim();
    Object.entries(patients).forEach(([id, { name, exams }]) => {
      if (exams.includes(examId)) {
        patients[id].exams = exams.filter((id) => id !== examId);
      }
    });
    return patients;
  } catch (error) {
    console.error("Deleting exam failed: ", error);
  }
}

export { addExam, deleteExam };
