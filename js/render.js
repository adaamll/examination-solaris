const overlayEl = document.getElementById('overlay');
const innerOverlayEl = document.getElementById('overlay-wrapper');

function renderOverlay(data) {
  const { name, latinName, desc, circumference, distance, temp, moons } = data;
  overlayEl.style.display = 'flex';

  const html = `
    <section class="overlay-header">
      <h2 class="heading">${name}</h2>
      <p class="subheading">${latinName}</p>
    </section>
    
    <section>
      <p class="planet-text">
      ${desc}
      </p>
    
    <section class="planet-details">
      <article class="details-box">
        <h3>Omkrets</h3>
        <p>${circumference} km</p>
      </article>
  
      <article class="details-box">
        <h3>Km från solen</h3>
        <p>${distance} km</p>
      </article>
    </section>
  
    <section class="planet-details">
      <article class="details-box">
        <h3>Max temperatur</h3>
        <p>${temp.day} °C</p>
      </article>
  
      <article class="details-box">
        <h3>Min temperatur</h3>
        <p>${temp.night} °C</p>
      </article>
    </section>
  
    <article class="details-box">
      <h3>Månar</h3>
      <p>${moons.length ? moons.join(', ') : `${name} har ingen måne`}</p>
    </article>
  </section>`;

  innerOverlayEl.innerHTML = html;
}

export { renderOverlay };
