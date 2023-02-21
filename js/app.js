import { renderOverlay } from '/js/utils.js';
import { dataGlobal } from '/js/data.js';
let currentPlanetIndex = 0;

const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const overlayEl = document.getElementById('overlay');
const closeBtn = document.getElementById('home-page');
const searchBtn = document.getElementById('search-btn');
const planetEl = document.getElementById('planet-container');

// EVENTLISTENERS
nextBtn.addEventListener('click', nextPlanet);
backBtn.addEventListener('click', previousPlanet);
searchBtn.addEventListener('click', searchPlanet);
planetEl.addEventListener('click', handlePlanetClick);
closeBtn.addEventListener('click', () => (overlayEl.style.display = 'none'));

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
  const searchInput = document.getElementById('search-bar');
  const searchString = searchInput.value.toLowerCase();
  const planets = dataGlobal.find(planet => planet.name.toLowerCase() === searchString);

  if (planets) {
    currentPlanetIndex = dataGlobal.indexOf(planets);
    renderOverlay(planets);
    searchInput.value = '';
  }
}

// FUNCTIONS TO RENDER NEXT & PREVIOUS PLANET IN PAGINATION
function nextPlanet() {
  currentPlanetIndex = (currentPlanetIndex + 1) % dataGlobal.length;
  renderOverlay(dataGlobal[currentPlanetIndex]);
}

function previousPlanet() {
  currentPlanetIndex = (currentPlanetIndex - 1 + dataGlobal.length) % dataGlobal.length;
  renderOverlay(dataGlobal[currentPlanetIndex]);
}
