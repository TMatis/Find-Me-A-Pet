

const allDogs = [
    {
        dogName: "Anthony",
        breed: "Terrier, Pit Bull/mix",
        age: 6.3
    },

    {
        dogName: "Axel",
        breed: "Terrier, American pit bull/mix",
        age: 2.08
    },

    {
        dogName: "Baluna",
        breed: "Terrier, Pit Bull/mix",
        age: .5
    },

    {
        dogName: "Barry",
        breed: "Australiaan Cattle Dog/mix",
        age: .8
    },

    {
        dogName: "Beante",
        breed: "Terrier, American Pit Bull/Hound",
        age: 2.75
    },

    {
        dogName: "Bebe",
        breed: "Terrier, American Pit Bull/mix",
        age: 6.08
    },

    {
        dogName: "Boo Boo",
        breed: "American Eskimo/Mix",
        age: 9.42
    },

    {
        dogName: "Bowser",
        breed: "Mastiff/Mix",
        age: 3.42
    },

    {
        dogName: "Brutus Xavier",
        breed: "Terrier, American Pit Bull/mix",
        age: 5
    },

    {
        dogName: "Butterball",
        breed: "Bulldog, American/mix",
        age: 4
    },
];

const showInfo = function() {
    let Age = parseInt(document.querySelector(".petAge").value);
    console.log(Age);

    const selectedDogs = [];

    let counter = 0
    let counterAge = 0
    allDogs.forEach((item) => {
        counter++
        console.log(item.dogName)
        if (item.age >= Age) {
            selectedDogs.push(item);
            counterAge++
            console.log(`for each iterated ${counter} times, added ${counterAge} dogs to list`);
        }

    }),

    DisDogs = document.querySelector(".DisDogs");
    let listDogs = "";
    selectedDogs.forEach((item) => {
        console.log(`Name: ${item.dogName}, Age: ${item.age}, Breed: ${item.breed}`);
        listDogs += `Name: ${item.dogName}, Age: ${item.age} Years Old, Breed: ${item.breed}<br>`;
        
    });

    DisDogs.innerHTML = listDogs;

};