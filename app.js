'use strict';

// Get the video element from the HTML file
const video = document.getElementById('video');

// Get the canvas element from the HTML file
const canvas = document.getElementById('canvas');

// Get the "Take Picture" button element from the HTML file
const takePictureButton = document.getElementById('take-picture');

// Get the "Save Picture" button element from the HTML file
const savePictureButton = document.getElementById('save-picture');

// Check if the browser supports the getUserMedia API
if (navigator.mediaDevices && navigator.mediaDevices. getUserMedia) {
    // Request access to the user's webcam
        navigator.mediaDevices.getUserMedia({ video: true })
        .then (stream => {
            // Set the video element's source to the video stream
            video.srcObject = stream;
        })
        .catch (error => {
        console.error(error);
        });
        } else {
        console.error ('getUserMedia is not supported in this browser.');
     }

// Add an event listener to the "Take Picture" button
     takePictureButton.addEventListener('click', () => {

// Set the canvas dimensions to match the video dimensions
     canvas.width = video.videoWidth;
     canvas.height = video.videoHeight;

// Draw the video frame onto the canvas
     canvas.getContext ('2d'). drawImage (video, 0, 0);

//Create a new image element and set its source to the canvas data URL
     const img = new Image ();
     img.src = canvas. toDataURL () ;
     
// Append the image element to the document
     document.body. appendChild (img);

// Show the "Save Picture" button
     savePictureButton.style.display = 'block'
     });

    // Add an event listener to the "Save Picture" button
    savePictureButton.addEventListener('click', () => {
    
    // Convert the canvas to a data URL
    const dataURL = canvas. toDataURL ();

    // Create a new anchor element and set its href attribute to the data URL
    const link = document. createElement ('a');
    link.href = dataURL;
    
    // Set the download attribute to "webcam.png" and click the link
    link.download = 'webcam.png';
    link.click();
    });