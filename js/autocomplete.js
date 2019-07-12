const url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?';
const types = '(cities)';
const apiKey = 'AIzaSyDSEVUXrp5DMeCJKRPIAbfshuBq-vzK0nA';
const language = 'pl';

const predictions = document.getElementById('predictions');

async function getPredictions(userInput) {

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = `${url}input=${userInput}&types=${types}&language=${language}&key=${apiKey}`;
    const cities = await fetch(proxyUrl + apiUrl)
        .then(response => response.json())
        .then(data => data.predictions.map(place => `<option value="${place.description}" class="suggestion">`));
    
    predictions.innerHTML=cities.join(' ');

};

export default getPredictions;