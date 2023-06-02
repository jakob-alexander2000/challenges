console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formElements = new FormData(event.target);
    const data = Object.fromEntries(formElements);

    console.log(data);

})
