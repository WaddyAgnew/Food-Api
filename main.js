let entree = {
    apiKey: "2596dcbc6e764e2a9c26e2124a2faa90",
    fetchEntree: function (food) {
        fetch(
            "https://api.spoonacular.com/food/search?apiKey="
             + this.apiKey 
             + "&query=" 
             + food 
             + "&number=2"
        )
        .then((response) => response.json())
        .then((data) => this.showfood(data));
    },
    showfood: function (data) {
        const{name,content} = data.searchResults[0,[data.results]];
        

        document.querySelector(".food").innerText = " Delicious " + name;
        document.querySelector(".description").innerText = "Information: " + content;
    },
    search: function (){
        this.showfood(document.querySelector(".search-bar").value);
    }

};

document.querySelector(".search button")
.addEventListener("click", function(){
entree.search();
});

entree.fetchEntree("apple");