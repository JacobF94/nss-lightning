const printPetPreference = (dogBreed) => {
    if (dogBreed === undefined) {
        return "I like cats"
    } else {
        return "My favorite dog breed is " + dogBreed
    }
}

console.log("when it comes to pets," + printPetPreference("beagle"))