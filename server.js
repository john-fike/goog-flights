const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const port = 8000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Endpoint to run the Python script
app.get('/run-script', (req, res) => {
  exec('python3 ./script.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error}`);
      res.status(500).send(`Error executing script: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Script stderr: ${stderr}`);
      res.status(500).send(`Script stderr: ${stderr}`);
      return;
    }
    console.log(`Script stdout: ${stdout}`);
    res.send(`Script output: ${stdout}`);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
