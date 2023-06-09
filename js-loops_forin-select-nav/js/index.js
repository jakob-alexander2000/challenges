console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--
for (const language in languages) {
  console.log(languages[language]);
  let optionsItem = document.createElement("option");
  optionsItem.textContent = languages[language];
  select.appendChild(optionsItem);

}
// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--
for (const key in nav) {
  console.log(nav[navLinks]);
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");
  
  anchor.href = nav[key].href;
  anchor.textContent = nav[key].text;
  listItem.append(anchor);
  ul.append(listItem);
}
// --^-- write/change code here --^--
