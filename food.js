const foods = ["pancakes", "fish", "pickles", "pan fried dumplings"]

const foodList = () => {
    const madeList = foods.map(food => {
        if (food === "pickles") {
            return `I don't like pickles`
        } else {
            return `I like to eat ${food}`
        }
    })
    return madeList
}

console.log(foodList())