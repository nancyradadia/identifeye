# Identifeye - HealthRecordsHub

# Description

HealthRecordsHub is a simple, in-memory service designed to aggregate patient and exam data from text file instructions. This project was created as part of a take-home assignment for a Software Engineering Internship application. It demonstrates the ability to read and process commands from a file, manage data in memory, and produce a summarized output of patient records, including exam counts.

# Project Structure

```bash
Identifeye/
│
├── src/                    # Source code directory
│   ├── index.js            # Main application entry point
│   ├── parser.js           # Utility for parsing input files
│   └── managers/           # Directory for data management modules
│       ├── patient.js      # Module to handle patient-related operations
│       └── exam.js         # Module to handle exam-related operations
│
├── test/                   # test files and expected output for testing the application
│   ├── input/              # Directory for input test files (.txt format)
│   └── output/             # Directory for expected output files
│
├── .gitignore              # Specifies intentionally untracked files to ignore
└── README.md               # Project overview, setup instructions
```

# Getting Started

1. Clone the repository to your local machine:
    ```bash
    https://github.com/nancyradadia/identifeye.git
    ```
2. ```bash
    cd Identifeye
    ```
3. Install Node.js (Recommended version: 14.x or newer).
   
There are no external dependencies required for this project, so you can skip straight to running the application by running index.js


# How to Run 

To test the application with different sets of instructions, add your test files to the /test directory. Then write the following command that will run all the test cases present in the input directory
``` bash
    npm run start
```

## Input File Specification

Instructions in the input files should follow the format described in the project assignment. Here is a quick overview:

1. ADD PATIENT [patientId] [patientName] - Adds a new patient record if the patient dosent already exists.
2. ADD EXAM [patientId] [examId] - Adds a new exam record associated with a patient, if the examId already exists it simply ignores
3. DEL PATIENT [patientId] - Deletes a patient record and associated exams if the id is present in memory.
4. DEL EXAM [examId] - Deletes an exam record if exam id exists

After you run your file it creates .out.txt file for each test case that provides the summary of the test file.
