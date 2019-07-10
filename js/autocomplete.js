const url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?';
const types = '(cities)';
const apiKey = 'AIzaSyDSEVUXrp5DMeCJKRPIAbfshuBq-vzK0nA';
const language = 'pl';

const predictions = document.getElementById('predictions');

function autocomplete(userInput) {
    
    const cities = [];
    
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = `${url}input=${userInput}&types=${types}&language=${language}&key=${apiKey}`;
    fetch(proxyUrl + apiUrl)
        .then(response => response.json())
        .then(data => cities.push(...data.predictions))
    
    console.log(cities);
    
    
    const listItem = cities.map(place => {
        return `<li><span>${place}</span></li>`;
    });
    //.join('');

    console.log(listItem)
    //predictions.innerHTML = listItem;
}

export default autocomplete;