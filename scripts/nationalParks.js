document.addEventListener("DOMContentLoaded", function () {
    const stateSelect = document.getElementById('stateSelect');
    const parkTypeSelect = document.getElementById('parkTypeSelect');
    

    let statePlaceholder = document.createElement('option');
    statePlaceholder.value = '';
    statePlaceholder.text = '-- Select a State --';
    statePlaceholder.disabled = true;
    statePlaceholder.selected = true;
    stateSelect.appendChild(statePlaceholder);
    
    let parkTypePlaceholder = document.createElement('option');
    parkTypePlaceholder.value = '';
    parkTypePlaceholder.text = '-- Select a Park Type --';
    parkTypePlaceholder.disabled = true;
    parkTypePlaceholder.selected = true;
    parkTypeSelect.appendChild(parkTypePlaceholder);

    locationsArray.forEach(location => {
        let option = document.createElement('option');
        option.value = location;
        option.text = location;
        stateSelect.appendChild(option);
    });
  
    parkTypesArray.forEach(type => {
        let option = document.createElement('option');
        option.value = type;
        option.text = type;
        parkTypeSelect.appendChild(option);
    });
  

    stateSelect.addEventListener('change', searchParks);
    parkTypeSelect.addEventListener('change', searchParks);
  });
  
  function searchParks() {
    const selectedState = document.getElementById('stateSelect').value;
    const selectedType = document.getElementById('parkTypeSelect').value.toLowerCase();
    const parksResults = document.getElementById('parksResults');
    parksResults.innerHTML = '';
  
    const filteredParks = nationalParksArray.filter(park => {
      const matchesState = selectedState ? park.State === selectedState : true;
      const matchesType = selectedType ? park.LocationName.toLowerCase().includes(selectedType) : true;
      return matchesState && matchesType;
    });
  
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
      parksResults.innerHTML = '<p>No parks found for the selected criteria.</p>';
    }
  }
  