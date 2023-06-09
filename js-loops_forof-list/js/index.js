// console.clear();

// const main = document.querySelector('[data-js="main"]');

// // Create a list from an array

// const ol = document.createElement("ol");
// main.append(ol);



// const programmingLanguages = [
//   "JavaScript",
//   "Python",
//   "Java",
//   "C#",
//   "C++",
//   "PHP",
//   "Ruby",
// ];

// // --v-- write/change code here --v--
// for (const programmingLanguage of programmingLanguages) {
//  let listItem = document.createElement('li');
//  listItem.textContent = programmingLanguage;
//  ol.append(listItem);
//  }
// // --^-- write/change code here --^--


function points(games) {
  
  // create variable points
  //iterate over the list
  // for every element, check if first number is larger than second one
  // calculate and add points
  //after the loop return 'points'
  
  let pointCount = 0;
  
  for (let i=0; i<games.length; i++) {
    
   if (games[i][0] > games[i][2]) {
    pointCount += 3;
   } else if (games[i][0] < games[i][2]) {
    pointCount += 0;
   } else {
    pointCount += 1;
   }
   console.log(pointCount);
   return pointCount;
   
  }
  
};


console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));
