# Bonus Work

This project was a road for working with more eventlistners. 

## Screenshots

To Come

## How to run this project
* Use npm to install http-server in your terminal:
```sh
npm install -g http-server
```
* Run the server
```sh
hs -p 9999
```
* Open chrome and navigate to:
```
localhost:9999
```

### One Paragraph of project description goes here

## Getting Started
### These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Issues
### Had issues with the outputEl = document.getElementById(bio) Had let outputEl = document.getElementById(bio) and using the 'let' was cuasing the function to 'store' the previous variable set. 

```
function bioChange(bio) {
document.getElementById("inputField").value = '';
outputEl = document.getElementById(bio)
let fieldEl = document.getElementById("inputField");
fieldEl.addEventListener("keyup", function (event) {
    outputEl.innerHTML = event.target.value
    })
};

```
## Deployment
### Add additional notes about how to deploy this on a live system


