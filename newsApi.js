const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cc0fb5a26bmsh0d5ed101ed492e7p176a22jsn5749a5e006cb',
		'X-RapidAPI-Host': 'livescore-sports.p.rapidapi.com'
	}
};

fetch('https://livescore-sports.p.rapidapi.com/v1/news/details?slug=endrick-reveals-ronaldo-and-vinicius-junior-played-a-part-in-madrid-move-2022122910504492259&timezone=0&locale=EN', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    