const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e8914d5677msh0aca01aa14fa52ep1c47fbjsnaa4e1143da36',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

fetch('https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));