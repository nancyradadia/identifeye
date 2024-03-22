# Identifeye - HealthRecordsHub

# Description

HealthRecordsHub is a simple, in-memory service designed to aggregate patient and exam data from text file instructions. This project was created as part of a take-home assignment for a Software Engineering Internship application. It demonstrates the ability to read and process commands from a file, manage data in memory, and produce a summarized output of patient records, including exam counts.

## Input File Specification
Instructions in the input files should follow the format described in the project assignment. Here is a quick overview:

1. ADD PATIENT [patientId] [patientName] - Adds a new patient record if the patient dosent already exists.
2. ADD EXAM [patientId] [examId] - Adds a new exam record associated with a patient, if the examId already exists it simply ignores
3. DEL PATIENT [patientId] - Deletes a patient record and associated exams if the id is present in memory.
4. DEL EXAM [examId] - Deletes an exam record if exam id exists
   
After you run your file it creates .out.txt file for each test case that provides the summary of the test file.