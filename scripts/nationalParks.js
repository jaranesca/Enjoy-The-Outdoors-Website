document.addEventListener("DOMContentLoaded", function () {
  const stateSelect = document.getElementById('stateSelect');
  locationsArray.forEach(location => {
      let option = document.createElement('option');
      option.value = location;
      option.text = location;
      stateSelect.appendChild(option);
  });

  
  const parkTypeSelect = document.getElementById('parkTypeSelect');
  parkTypesArray.forEach(type => {
      let option = document.createElement('option');
      option.value = type;
      option.text = type;
      parkTypeSelect.appendChild(option);
  });
});

function searchParksByLocation() {
  const selectedState = document.getElementById('stateSelect').value;
  const parksResults = document.getElementById('parksResults');
  parksResults.innerHTML = ''; 
  if (selectedState) {
      const filteredParks = nationalParksArray.filter(park => park.State === selectedState);
      if (filteredParks.length > 0) {
          filteredParks.forEach(park => {
              let parkElement = document.createElement('div');
              parkElement.classList.add('card');
              parkElement.innerHTML = `
                  <div class="card-body">
                      <h3 class="card-title">${park.LocationName}</h3>
                      <p class="card-text">${park.City}, ${park.State}</p>
                      <p class="card-text">Phone: ${park.Phone}</p>
                      <a href="https://www.nps.gov/${park.LocationID.toLowerCase()}/index.htm" target="_blank" class="btn btn-primary btn-sm">Visit Park</a>
                  </div>
              `;
              parksResults.appendChild(parkElement);
          });
      } else {
          parksResults.innerHTML = '<p>No parks found for this location.</p>';
      }
  }
}

function searchParksByType() {
  const selectedType = document.getElementById('parkTypeSelect').value.toLowerCase();
  const parksResults = document.getElementById('parksResults');
  parksResults.innerHTML = '';

  if (selectedType) {
      const filteredParks = nationalParksArray.filter(park => park.LocationName.toLowerCase().includes(selectedType));
      if (filteredParks.length > 0) {
          filteredParks.forEach(park => {
              let parkElement = document.createElement('div');
              parkElement.classList.add('card');
              parkElement.innerHTML = `
                  <div class="card-body">
                      <h3 class="card-title">${park.LocationName}</h3>
                      <p class="card-text">${park.City}, ${park.State}</p>
                      <p class="card-text">Phone: ${park.Phone}</p>
                      <a href="https://www.nps.gov/${park.LocationID.toLowerCase()}/index.htm" target="_blank" class="btn btn-primary btn-sm">Visit Park</a>
                  </div>
              `;
              parksResults.appendChild(parkElement);
          });
      } else {
          parksResults.innerHTML = '<p>No parks found for this type.</p>';
      }
  }
}