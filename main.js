let entree = {
    apiKey: "2596dcbc6e764e2a9c26e2124a2faa90",
    fetchEntree: function (food) {
        fetch(
            "https://api.spoonacular.com/recipes/complexSearch?apiKey="
             + this.apiKey 
             + "&query=" 
             + food 
             + "&addRecipeInformation=true&number=20"
        )
        .then((response) => response.json())
        .then((data) => this.showfood(data));
    },
    showfood: function (data) {
        const{title,summary,sourceUrl} = data.results[Math.floor(Math.random()*data.results.length)]; 


        document.querySelector(".food").innerText = " Delicious " + title;
        document.querySelector(".description").innerHTML = "Information: " + summary;
        document.querySelector(".description").object.style.textDecoration = "none";
        document.querySelector(".ingredientList").onclick = function () {
            location.href = sourceUrl;
        }
    
    },



    search: function (){
        this.fetchEntree(document.querySelector(".search-bar").value);
    }

};

document.querySelector(".search button")
.addEventListener("click", function(){
entree.search();
});

document.querySelector(".search-bar")
.addEventListener("keyup", function (event) {
if (event.key == "Enter"){
    entree.search();
}
});

//entree.fetchEntree("apple");