import { readdir, readFile, writeFile } from "fs";
import { extname, join, basename } from "path";
import { addExam, deleteExam } from "./managers/exam.js";
import {
  addPatient,
  deletePatient,
  resetPatients,
} from "./managers/patient.js";

function parseCommands(data) {
  return data.split("\n").map((line) => line.trim().split(" "));
}

function processCommands(commands) {
  let data = {};

  let summary = "";
  commands.forEach((command) => {
    const [action, type, id, ...args] = command;
    if (action === "ADD") {
      if (type === "PATIENT") {
        data = addPatient(id, args.join(" "), data);
      } else if (type === "EXAM") {
        data = addExam(id, args[0], data);
      }
    } else if (action === "DEL") {
      if (type === "PATIENT") {
        data = deletePatient(id, data);
      } else if (type === "EXAM") {
        data = deleteExam(args[0], data);
      }
    }
  });

  Object.entries(data).forEach(([id, { name, exams }]) => {
    name = name.trim();
    summary += `Name: ${name}, Id: ${id}, Exam Count: ${exams.length}\n`;
  });
  console.log(summary);
  data = resetPatients();

  return summary.trim();
}

function run(testDir) {
  readdir(testDir, (err, files) => {
    if (err) {
      console.error("Error reading the test directory:", err);
      return;
    }
    files.forEach((file) => {
      if (extname(file) === ".txt") {
        const filePath = join(testDir, file);
        const outputFilePath = join(
          "./test/output",
          `${basename(file, ".txt")}.out.txt`
        );
        readFile(filePath, "utf8", (err, data) => {
          if (err) {
            console.error(`Error reading file: ${file}`, err);
            return;
          }
          const commands = parseCommands(data);
          console.log("-----------------------------")
          console.log(`Processing file: ${file}`);
          console.log("-----------------------------")
          const output = processCommands(commands);
          writeFile(outputFilePath, output, (err) => {
            if (err) {
              console.error(`Error writing to file: ${outputFilePath}`, err);
            }
          });
        });
      }
    });
  });
}

export { run };
