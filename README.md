# Dog Breed Identifier

## Project Overview

- **Project Name:** Dog Breed Identifier
- **Group Members:** Aditya Bhoir, Rohit Kamble, Yash
- **Date:** 18/10/2023


The **Dog Breed Identifier** project is a cloud-based solution that utilizes Azure services to identify dog breeds. This project is designed to be scalable, reliable, and easy to use for anyone who wants to identify the breed of their dog.


## Introduction

The **Dog Breed Identifier** project is a cloud-based solution that utilizes Azure services to identify dog breeds. The project is designed to be a scalable, reliable, and easy-to-use solution for anyone who wants to identify the breed of their dog.

- **Azure Custom Vision**: This project uses Azure Custom Vision, a machine learning service that is trained to identify dog breeds accurately using a large dataset of dog images.

- **Azure Virtual Network (VNet)**: The project is deployed on an Azure Virtual Network, providing a secure and isolated network environment for its components, which are hosted on Azure Virtual Machines (VMs).

- **Scalability**: The project is designed to be scalable, allowing the number of VMs to be increased to handle a large number of users.

- **Reliability**: High availability features are configured for the VMs to ensure the project is always available.

- **User-Friendly**: Users can easily upload an image of their dog to the project's web page, and the Custom Vision model identifies the breed, displaying the results on the web page.

## Objectives

The goals of the Dog Breed Identifier project are to:

- Develop a machine learning model that can accurately identify dog breeds.
- Create a cloud-based solution that is scalable and reliable.
- Develop a user-friendly interface that is easy to use.

## Benefits

The Dog Breed Identifier project provides the following benefits:

- Accurate dog breed identification: The project's Custom Vision model is trained on a large dataset of dog images, ensuring accurate identification of various dog breeds.

- Scalable and reliable architecture: The project's architecture is designed to be scalable and reliable, capable of handling a large number of users with high availability.

- Easy to use: Users can upload a dog image to the web page, and the project displays the identification results.

## Azure Services

1. **Azure Virtual Machine**: Virtual Machines (VMs) are used to host the project's web servers and the Custom Vision model, providing isolation, resource allocation, and flexibility.

2. **Azure Application Gateway**: This load balancing solution ensures high availability, scalability, and security for web applications by distributing network traffic across multiple services or VMs.

3. **Azure Custom Vision**: A cloud-based service that simplifies the creation and training of custom machine learning models for image classification, making it accessible for various applications.

4. **Azure Web Application Firewall**: Protects web applications from online threats and vulnerabilities, ensuring security and compliance.

## Code Overview

### index.html

```html
<!DOCTYPE html>
<html>
<head>
<style>
    /* CSS Styles for the page */
    /* ... (CSS styles) ... */
</style>
</head>
<body>
<h1>Dog Breed Prediction</h1>
<form id="upload-form">
    <input type="file" id="photo" name="photo">
    <input type="submit" value="Predict Breed">
</form>
<div id="results">
    <p>Results will display here...</p>
</div>
<script src="dog-app.js"></script>
</body>
</html>
```

### dog-app.js

```javascript
// app.js

// Custom Vision prediction API 
const predictionKey = 'my prediction key'; 
const predictionUrl = 'my prediction url’;

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

  for (let prediction of data.predictions) {
    const breed = prediction.tagName;
    const probability = prediction.probability * 100;
    const percent = probability.toFixed(2);

    resultsHTML.push(`
      <p>Breed: ${breed}</p>
      <p>Probability: ${percent}%</p>
    `);
  }

  results.innerHTML = resultsHTML.join('');
}
```

## Data Preparation

- **Labeling and Organizing Images**: Label your images with relevant tags, ensure high-quality images, include a variety of images, and maintain a well-organized dataset.

- **Uploading Images**: Use Azure Custom Vision Service to upload labeled and organized images, making the training process iterative.

## Project Architecture

- **Custom Vision**: Custom Vision resource created on Azure to build an image classification model.

- **Virtual Machine**: Two Azure Virtual Machines created to host the front-end app, configured with IIS to run as web servers.

- **Virtual Networking**: Virtual Network with two subnets: one for web servers and another for the Application Gateway.

- **Application Gateway**: Azure Application Gateway added to the web subnet, integrated with a backend pool containing the two VMs.

- **Web Application**: An HTML, CSS, and JavaScript app that allows users to upload images, call the Custom Vision prediction API, and display the top prediction with breed name and probability.

## User Instructions

1. **Uploading an Image**:
   - Visit the Dog Breed Identifier web page.
   - Look for the file upload form labeled "Upload Image."
   - Select an image of a dog from your local device.

2. **Initiating Predictions**:
   - Click the "Predict" button to initiate the prediction process.

3. **Viewing the Results**:
   - After processing, the web page will display the predicted dog breed along with the associated probability.

## Conclusion

The **Dog Breed Identifier** project demonstrates the practical application of deep learning and machine learning for classifying dog breeds. Its user-friendly interface enables easy dog breed identification through the power of Azure Custom Vision AI. This project showcases the real-world utility of artificial intelligence in image recognition tasks and has the potential for further enhancements in user experience, accuracy, and scalability.

## Step by Step Process

 - Login into Azure and create a new Azure Custom Vision project.
   ![image](https://github.com/azureadi/AZUREPROJECT/assets/147136012/f4abd24c-23a7-424c-894a-3c7be489423c)

 - Upload and label images for training the AI model.
   ![image](https://github.com/azureadi/AZUREPROJECT/assets/147136012/efde0f46-589a-421f-b3dd-bb202807124d)

 - Configure the Virtual Network and create subnets for web servers and Application Gateway.
   ![image](https://github.com/azureadi/AZUREPROJECT/assets/147136012/c153f612-e624-4d74-9031-4ef0a39ac35d)

 - Create Virtual Machines for web hosting.
   ![image](https://github.com/azureadi/AZUREPROJECT/assets/147136012/088c324d-f078-4db8-bdf3-6cd3407cdf2b)

 - Develop the web application with HTML, CSS, and JavaScript.
    (provided the code alreadly also the file in repository)
   
 - Run the Website

Follow the user instructions to use the application.

For a detailed step-by-step guide, refer to the project's documentation.

## Diagram

![image](https://github.com/azureadi/AZUREPROJECT/assets/147136012/55066de3-fbf5-4d7a-ba0b-46b1a1541ba6)

## Results
To see the project in action, you can access it by clicking in the link about section.
![image](https://github.com/azureadi/AZUREPROJECT/assets/147136012/ec5ea11b-dfc9-49e2-9ff7-66d60b17a094)

