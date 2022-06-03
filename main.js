let food = {
    apiKey: "api key here",
    fetchFood: function (food){
        fetch(
            "https://api.spoonacular.com/recipes/queries/analyze?&q=salmon+with+fusilli+and+no+nuts."
        )
        .then((response) => response.json())
        .then((data) => this.showfood(data));
    },
    showfood: function (data) {
        const {name} = data.dishes[0];
        console.log(name);
    }
}