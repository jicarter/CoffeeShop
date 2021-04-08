const url = "https://localhost:5001/api/beanvariety/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
    getAllCoffee()
        .then(coffee => {
            console.log(coffee);
        })    
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

const CoffeeUrl = "https://localhost:5001/api/coffee/";

function getAllCoffee() {
    return fetch(CoffeeUrl).then(resp => resp.json());
}