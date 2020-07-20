// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

// Elements Defined
const newsHead = document.createElement('div');
const newsDate = document.createElement('span');
const newsTitle = document.createElement('h1');
const newsTemp = document.createElement ('span');

//Classes
newsHead.classList.add('header')
newsDate.classList.add('date')
newsTemp.classList.add('temp')

//appending
newsHead.append(newsDate);
newsHead.append(newsTitle);
newsHead.append(newsTemp);

//content
newsDate.textContent = 'March 28th, 2019';
newsTitle.textContent = 'Lambda Times';
newsTemp.textContent = '98°';

return newsHead;
}
const headerContainer = document.quearySelector('.header-container');
headerContainer.appendChild(Header());