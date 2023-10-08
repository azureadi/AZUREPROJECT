// app.js

// Custom Vision prediction API 
const predictionKey = '43d65d8ba51d4179a942f30f7a497ef1'; 
const predictionUrl = 'https://dogai-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/f2245281-3672-46e1-95eb-1a61999f9e94/classify/iterations/Iteration1/image';

// Get DOM elements
const uploadForm = document.getElementById('upload-form');
const results = document.getElementById('results');

// Listen for upload
uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  handleUpload();
});

// Handle upload
async function handleUpload() {
  const file = document.getElementById('photo').files[0];

  const formData = new FormData();
  formData.append('photo', file);

  // Make prediction
  const response = await fetch(predictionUrl, {
    method: 'POST',
    headers: {
      'Prediction-Key': predictionKey
    },
    body: formData
  });

  const data = await response.json();

  // Display results 
const resultsHTML = [];

for(let prediction of data.predictions) {

  const breed = prediction.tagName;
  
  // Calculate percentage
  const probability = prediction.probability * 100;
  const percent = probability.toFixed(2);

  resultsHTML.push(`
    <p>Breed: ${breed}</p>
    <p>Probability: ${percent}%</p>
  `); 

}

results.innerHTML = resultsHTML.join('');
}
