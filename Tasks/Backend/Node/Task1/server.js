import http from "http";
import os from "os";
import dotenv from "dotenv";
import process, { cwd } from "process";
import path from "path";
import fs from 'node:fs';
import { fileURLToPath } from "node:url";




dotenv.config();

const PORT = process.env.PORT || 6000;

const app = http.createServer((request, response) => {
    response.end("Running Successfully");
})

app.listen(PORT, () => {
    console.log(`The port is running in local host ${PORT}`);
})

// OS :-
// console.log(os);
console.log("Host Name ->", os.hostname());
console.log("Platform ->", os.platform());
console.log("Architecture ->", os.arch());
console.log("CPU ->", os.cpus);
console.log("Total RAM ->", os.totalmem());
console.log("Free RAM ->", os.freemem());

// Process :-
console.log("-- PROCESS --");
console.log("Node Version ->", process.version);
console.log("Current Working Directory ->", cwd());
console.log("Platform ->", process.platform);
console.log("Command Line Arguments ->", process.argv);
console.log("ENV ->", process.env)

// PATH :-
const rootDir = 'Project';
const imagesPath = path.join(rootDir, 'uploads', 'images');
const videosPath = path.join(rootDir, 'uploads', 'videos');
const documentsPath = path.join(rootDir, 'uploads', 'documents');

console.log('--- Generated Folder Paths ---');
console.log('Images Path:   ', imagesPath);
console.log('Videos Path:   ', videosPath);
console.log('Documents Path:', documentsPath);
console.log('-------------------------------\n');

// Task 4: Relative Path vs Absolute Path


// Setup __dirname equivalent for ES Modules (if using CommonJS, __dirname is globally available)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Define the relative path from the root of the project to the image
const relativePath = './public/images/logo.png';

// 2. Compute the absolute path using path.resolve()
const absolutePath = path.resolve(relativePath);

// Display the paths
console.log('=== PATH COMPARISON ===');
console.log('Relative Path:\n', relativePath);
console.log('\nAbsolute Path:\n', absolutePath);
console.log('=======================\n');

// 3. Explain the difference via console output
console.log('=== CONCEPT EXPLANATION ===');
console.log('1. RELATIVE PATH:');
console.log('   - It depends on your current working directory (where you run the terminal command).');
console.log('   - It uses indicators like "." (current folder) or ".." (parent folder).');
console.log(`   - If you move this script or run it from a different folder, "${relativePath}" might break.`);
console.log('\n2. ABSOLUTE PATH:');
console.log('   - It provides the full, complete path starting from the root directory of your file system.');
console.log('   - It is unique, location-independent, and always points to the exact same file layout.');
console.log('===========================');

// ENV :-
console.log("-- ENV --");
console.log("PORT_ENV ->", process.env.PORT);
console.log("AUTHOR_NAME_ENV ->", process.env.AUTHOR_NAME);
console.log("APPLICATION_NAME_ENV ->", process.env.APPLICATION_NAME);