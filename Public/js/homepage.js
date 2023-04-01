const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f9c5e651f9mshf2a236801c34ab6p1d2e40jsn069ca370fced',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        document.getElementById("randomQuoteArea").textContent=response.text
    })
	.catch(err => console.error(err));


    //generates random food joke of the day