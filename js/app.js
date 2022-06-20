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
const theList = document.getElementById('navbar__list') // select navabr list by it is id
const section = document.getElementsByTagName('section'); // select all sections by there tag
/**
 * End Global Variables
 * Start Helper Functions
 * 
 * 
*/
//function jumpTo() {
    //const element = document.getElementById(navMenu());
  //  element.scrollIntoView();
  //}
// Build the navigation menu
    function navMenu(){
        for(let i=1; i<5; i++){
            const newli= document.createElement('li') // create new li item
            const linkName = document.createElement('a'); // create new anchor
            linkName.classList.add('menu__link');//add class to anchor
            linkName.setAttribute("href", `#section${i}`)//add href so we can use event listenr to go to section that contain section id
            linkName.innerText = `Section ${i}`;//anchor inner text it will be added dynamically by for loop 
           theList.appendChild(newli);
           newli.appendChild(linkName);
           // event listner will act on active anchor once it click it will go to section related to active element
           linkName.addEventListener('click', function () {
            const element = document.getElementById(`section${i}`);
          linkName.scrollIntoView({
            behavior: 'smooth'
          });
           
          });
        }
        

      
    }
navMenu();
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
