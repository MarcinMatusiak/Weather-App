const url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?';
const types = '(cities)';
const apiKey = 'AIzaSyDSEVUXrp5DMeCJKRPIAbfshuBq-vzK0nA';
const language = 'pl';

function autocomplete(userInput) {
    const API = `${url}input=${userInput}&types=${types}&language=${language}&key=${apiKey}`;

    return fetch(API, {mode: 'no-cors'})
        .then(response => response())
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        })
}

export default autocomplete;