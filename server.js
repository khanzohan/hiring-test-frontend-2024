const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('src'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Ensure this serves your main HTML file
});

app.get('/step1', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/components/Step1.html'));
});

app.get('/step2', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/components/Step2.html'));
});

app.get('/step3', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/components/Step3.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
