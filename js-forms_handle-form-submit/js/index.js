console.clear();

const form = document.querySelector('[data-js="form"]');
let inputAge = document.querySelector("#age")
let inputBadness = document.querySelector("#badness")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formElements = new FormData(event.target);
    const data = Object.fromEntries(formElements);

    console.log(data);

    function ageBadnessSum() {
        let age = inputAge.value;
        console.log(age);
        let badness = inputBadness.value;
        console.log(badness);

        let badnessAge = parseInt(age) + parseInt(badness);
        console.log(badnessAge);
        return badnessAge
    }
    ageBadnessSum();
})
