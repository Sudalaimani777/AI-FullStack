import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import process from 'process';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runAllTasks() {
    try {
        console.log("=======================================");
        console.log(" TASK 1: Student File Management");
        console.log("=======================================\n");
        
        const studentsDir = path.join(__dirname, 'students');
        const studentsFile = path.join(studentsDir, 'students.txt');
        const renamedFile = path.join(studentsDir, 'student-list.txt');

        // Create folder
        await fs.mkdir(studentsDir, { recursive: true });
        console.log(" Created 'students' folder.");

        // Create file and add 5 names
        const initialStudents = "1. Alice\n2. Bob\n3. Charlie\n4. David\n5. Eve\n";
        await fs.writeFile(studentsFile, initialStudents);
        console.log(" Created 'students.txt' with 5 students.");

        // Read and display
        let content = await fs.readFile(studentsFile, 'utf-8');
        console.log("\n--- File Contents ---");
        console.log(content);

        // Append new student
        await fs.appendFile(studentsFile, "6. Frank\n");
        console.log(" Appended a new student name.");

        // Rename file
        await fs.rename(studentsFile, renamedFile);
        console.log(" Renamed file to 'student-list.txt'.");

        // Delete file
        await fs.unlink(renamedFile);
        console.log(" Deleted the file.\n");


        console.log("=======================================");
        console.log(" STARTING TASK 2: Project Folder Generator");
        console.log("=======================================\n");

        const projectBase = path.join(__dirname, 'Project');
        const foldersToCreate = [
            path.join(projectBase, 'public', 'css'),
            path.join(projectBase, 'public', 'js'),
            path.join(projectBase, 'public', 'images'),
            path.join(projectBase, 'uploads', 'documents'),
            path.join(projectBase, 'uploads', 'videos'),
            path.join(projectBase, 'config'),
            path.join(projectBase, 'logs')
        ];

        for (const folder of foldersToCreate) {
            await fs.mkdir(folder, { recursive: true });
            console.log(` Created: ${folder}`);
        }
        console.log("\n All project folders generated successfully.\n");


        console.log("=======================================");
        console.log(" STARTING TASK 3: System Information Dashboard");
        console.log("=======================================\n");

        console.log(`🔹 Node Version           : ${process.version}`);
        console.log(`🔹 Current Working Dir    : ${process.cwd()}`);
        console.log(`🔹 Hostname               : ${os.hostname()}`);
        console.log(`🔹 Platform               : ${os.platform()}`);
        console.log(`🔹 Architecture           : ${os.arch()}`);
        console.log(`🔹 CPU Count              : ${os.cpus().length}`);
        console.log(`🔹 Total RAM              : ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
        console.log(`🔹 Free RAM               : ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
        console.log(`🔹 Process ID             : ${process.pid}\n`);


        console.log("=======================================");
        console.log(" STARTING TASK 4: Environment Configuration");
        console.log("=======================================\n");

        const envFile = path.join(__dirname, '.env');
        const envContent = `APP_NAME=Student Management\nPORT=5000\nAUTHOR=Sudhan\nDB_NAME=StudentDB\n`;
        
        await fs.writeFile(envFile, envContent);
        console.log(" Created .env file.");

        // Load the environment variables we just created
        dotenv.config({ path: envFile });

        console.log("\n--- Environment Variables ---");
        console.log(`APP_NAME : ${process.env.APP_NAME}`);
        console.log(`PORT     : ${process.env.PORT}`);
        console.log(`AUTHOR   : ${process.env.AUTHOR}`);
        console.log(`DB_NAME  : ${process.env.DB_NAME}`);
        
        console.log("\n--- Additional Info ---");
        console.log(`Node Version   : ${process.version}`);
        console.log(`Project Folder : ${process.cwd()}\n`);


        console.log("=======================================");
        console.log(" STARTING TASK 5: Mini File Manager Project");
        console.log("=======================================\n");

        const nodeDay3Base = path.join(__dirname, 'Node-Day3');
        const storageReports = path.join(nodeDay3Base, 'storage', 'reports');
        const storageBackup = path.join(nodeDay3Base, 'storage', 'backup');
        const uploadsImages = path.join(nodeDay3Base, 'uploads', 'images');
        const uploadsDocs = path.join(nodeDay3Base, 'uploads', 'documents');

        // Create folders
        await fs.mkdir(storageReports, { recursive: true });
        await fs.mkdir(storageBackup, { recursive: true });
        await fs.mkdir(uploadsImages, { recursive: true });
        await fs.mkdir(uploadsDocs, { recursive: true });
        console.log(" Created all Node-Day3 folders.");

        // Create, Write, and Read report.txt
        const reportFile = path.join(storageReports, 'report.txt');
        await fs.writeFile(reportFile, "This is the daily system report.");
        console.log(" Created and wrote data to report.txt.");

        const reportData = await fs.readFile(reportFile, 'utf-8');
        console.log(`\n--- Report Contents ---\n${reportData}\n`);

        // Display Info for Task 5
        console.log("--- System & Env Info ---");
        console.log(`Hostname     : ${os.hostname()}`);
        console.log(`Platform     : ${os.platform()}`);
        console.log(`Node Version : ${process.version}`);
        console.log(`Working Dir  : ${process.cwd()}`);
        console.log(`APP_NAME     : ${process.env.APP_NAME} (from .env)\n`);

        // Rename, Copy, and Delete
        const dailyReportFile = path.join(storageReports, 'daily-report.txt');
        const backupReportFile = path.join(storageBackup, 'daily-report.txt');

        await fs.rename(reportFile, dailyReportFile);
        console.log(" Renamed to daily-report.txt");

        await fs.copyFile(dailyReportFile, backupReportFile);
        console.log(" Copied to backup folder.");

        await fs.unlink(dailyReportFile);
        console.log(" Deleted the original daily-report.txt from reports folder.\n");

        console.log(" ALL TASKS COMPLETED SUCCESSFULLY!");

    } catch (error) {
        console.error(" An error occurred:", error);
    }
}

// Execute the async function
runAllTasks();