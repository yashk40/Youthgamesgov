const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/yourDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dataSchema = new mongoose.Schema({
  data: String,
  registration_number: String,
  timestamp: { type: Date, default: Date.now },
});

const Data = mongoose.model('Data', dataSchema);

app.post('/upload', async (req, res) => {
  try {
    const { data, registration_number } = req.body;
    const newData = new Data({ data, registration_number });
    await newData.save();
    res.send('Data uploaded successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading data');
  }
});

app.get('/retrieve', async (req, res) => {
  try {
    const { registration_number } = req.query;
    const data = await Data.findOne({ registration_number });
    if (data) {
      res.send(data);
    } else {
      res.send('No data found for the given registration number');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving data');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});