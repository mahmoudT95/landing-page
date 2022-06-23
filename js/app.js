/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const theList = document.getElementById("navbar__list"); // select navabr list by it is id
const sections = [...document.getElementsByTagName("section")]; // select all sections by there tag
const section = document.querySelectorAll(".landing__container"); // select container
const mybutton = document.getElementById("myBtn"); // select btn
/**
 * End Global Variables
 * Start Helper Functions
 *
 *
 */

// Build the navigation menu
function navMenu() {
  sections.forEach((section) => {
    const secId = section.getAttribute("id"); // get id to add it later to href
    const secname = section.getAttribute("data-nav"); // get data nav to give every li inner text
    const newli = document.createElement("li"); // create new li item
    const linkName = document.createElement("a"); // create new anchor
    linkName.classList.add("menu__link"); //add class to anchor
    linkName.setAttribute("href", `#section${secId}`); //add href so we can use event listenr to go to section that contain section id
    linkName.innerText = `Section ${secname}`; //anchor inner text it will be added dynamically by for loop
    // nesting
    newli.appendChild(linkName); // add anchors that stored in linkname to li stored in newLi
    theList.appendChild(newli); // add li to navbar list
    // Scroll to section on link click
    linkName.addEventListener("click", (fun) => {
      fun.preventDefault(); // prevent scroll by href
      section.scrollIntoView({ behavior: "smooth" , block: "end", inline: "nearest"}); // add scrool by clicking on element
    });
  });
}
////https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
window.addEventListener("DOMContentLoaded", (event) => {
  navMenu();
});
/**
 * End Helper Functions
 *
 *
 * Begin Main Functions
 *
 */

// build the nav

//add amd  remove class 'your-active-class'

function makeActive() {
  sections.forEach((section) => {
    const view = section.getBoundingClientRect();
    if (view.top <= 190 && view.bottom >= 190) {
      // this will check if class on view to add active
      section.classList.add("your-active-class");
      document
        .querySelector(`.landing__container`)
        .classList.add("your-active-class");
    } else {
      // if not in viwe will rmove class active

      section.classList.remove("your-active-class");
      document
        .querySelector(`.landing__container`)
        .classList.remove("your-active-class");
    }
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */
// Set sections as active
document.addEventListener("scroll", () => {
  makeActive();
});

///btn function to diplay it after user scroll https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "inline-block";

    
  } else {
    mybutton.style.display = "none";
    
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  theList.style.display="block";
}


window.onscroll = function () {
  scrollFunction();
 
};  



// Hide fixed navigation bar while not scrolling using timeout 
// https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/onScrollStop.md
const onScrollStop = callback => {
  let isScrolling;
  window.addEventListener(
    'scroll',
    e => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        callback();
      }, 5000);
    },
    false
  );
};

onScrollStop(() => {
 theList.style.display="none";

});
document.addEventListener("scroll" ,  () => {
theList.style.display="block";

});