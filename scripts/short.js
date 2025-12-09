const apiKey = "AIzaSyBFdNZjlbObFYsE14tR_Ks41d44IbER6jk";
const spreadsheetId = "1PLT5F7-M7W-xU3jrBp93iRd79p8-fhOx_QeVWCRxA9A";
const range = new URL(window.location.href).searchParams.get('r');
var responses = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/URL!${range}?key=${apiKey}`);
responses = (await responses.json()).values;
document.querySelector("a").setAttribute('href',responses[0] || "/");
window.location = responses[0] || "https://ato04.github.io";