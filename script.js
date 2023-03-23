$('.carousel').carousel({interval: 3000 })// establece el tiempo de espera entre noticias en milisegundos (en este caso, 3 segundos


var petition = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '91f1f9f28dmshefae46cc03fb424p10a296jsn88d8773aa986',
            'X-RapidAPI-Host': 'sofasport.p.rapidapi.com'
        }
    };
    fetch('https://sofasport.p.rapidapi.com/v1/events/schedule/live?sport_id=1', options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            return response;
        })
        .catch(err => console.error(err));
}
var res = petition()
console.log(res)
