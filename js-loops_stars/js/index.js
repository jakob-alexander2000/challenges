console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i=1; i<6; i++) {
    let starImage = document.createElement('img');
    starImage.src = "assets/star-empty.svg";
    starContainer.appendChild(starImage);
  }
  //--^-- your code here --^--
}

renderStars();


