// document.location.reload()

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f9c5e651f9mshf2a236801c34ab6p1d2e40jsn069ca370fced',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

//generates random food joke of the day
fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        document.getElementById("randomQuoteArea").textContent=response.text
    })
	.catch(err => console.error(err));
	
	function getRecipies(){
		let ingredient = document.querySelector("#ingredientInput").value
		fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query='+ingredient, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)

			for (i=0; i < response.results.length; i++ ){
				let img = document.createElement("img")
				let h3 = document.createElement("h3")
				let saveBtn = document.createElement("button")
				let br = document.createElement("br")
				img.src = response.results[i].image
				h3.textContent = response.results[i].title
				saveBtn.textContent = "Save"
				document.querySelector("#recipes").appendChild(h3)
				document.querySelector("#recipes").appendChild(saveBtn)
				document.querySelector("#recipes").appendChild(br)
				document.querySelector("#recipes").appendChild(img)
			}



			







		})
		.catch(err => console.error(err));
	}

	document.querySelector("#search").addEventListener("click", getRecipies)