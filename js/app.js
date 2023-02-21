import { renderOverlay } from '/js/render.js';
import { dataGlobal } from '/js/data.js';
let currentPlanetIndex = 0;

const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const closeBtn = document.getElementById('home-page');
const searchBtn = document.getElementById('search-btn');
const planetEl = document.getElementById('planet-container');

// EVENTLISTENERS
nextBtn.addEventListener('click', nextPlanet);
backBtn.addEventListener('click', previousPlanet);
searchBtn.addEventListener('click', searchPlanet);
planetEl.addEventListener('click', handlePlanetClick);
closeBtn.addEventListener('click', () => location.reload());

// FUNCTION THAT FINDS THE CORRECT DATA FOR THE PLANET CLICKED
function handlePlanetClick(e) {
  if (e.target.id) {
    const planets = dataGlobal.find(planet => planet.name.toLowerCase() === e.target.id);
    if (planets) {
      currentPlanetIndex = dataGlobal.indexOf(planets);
      renderOverlay(planets);
    }
  }
}

// FUNCTION TO SEARCH FOR PLANET ON HOMEPAGE AND RENDERS THE SEARCHED PLANET
function searchPlanet(e) {
  e.preventDefault();

  const wrongSearchEl = document.getElementById('search-error-msg');
  const searchInput = document.getElementById('search-bar');
  const searchString = searchInput.value.toLowerCase().trim();
  const planets = dataGlobal.find(planet => planet.name.toLowerCase() === searchString);

  if (planets) {
    currentPlanetIndex = dataGlobal.indexOf(planets);
    renderOverlay(planets);
  } else {
    let wrongSearchHtml = `Det finns ingen planet med det namnet, försök igen!`;
    wrongSearchEl.textContent = wrongSearchHtml;
  }
}

// FUNCTIONS TO RENDER NEXT & PREVIOUS PLANET IN PAGINATION
function nextPlanet() {
  // INCREMENTS currentPlanetIndex BY 1 AND USES THE MODULO OPERATOR TO WRAP AROUND TO THE BEGINNING OF THE ARRAY WHEN THE END IS REACHED
  currentPlanetIndex = (currentPlanetIndex + 1) % dataGlobal.length;
  renderOverlay(dataGlobal[currentPlanetIndex]);
}

function previousPlanet() {
  // DECREMENTS currentPlanetIndex BY 1 AND USES THE MODULO OPERATOR TO WRAP AROUND TO THE BEGINNING OF THE ARRAY WHEN THE END IS REACHED
  currentPlanetIndex = (currentPlanetIndex - 1 + dataGlobal.length) % dataGlobal.length;
  renderOverlay(dataGlobal[currentPlanetIndex]);
}
