document.addEventListener("DOMContentLoaded", function () {
  const mountainSelect = document.getElementById('mountainSelect');

  mountainsArray.forEach(mountain => {
      let option = document.createElement('option');
      option.value = mountain.name;
      option.text = mountain.name;
      mountainSelect.appendChild(option);
  });

  mountainSelect.addEventListener('change', function () {
      const selectedMountain = mountainsArray.find(mountain => mountain.name === this.value);
      if (selectedMountain) {
          displayMountainInfo(selectedMountain);
      } else {
          clearMountainInfo();
      }
  });
});

function displayMountainInfo(mountain) {
  const mountainInfo = document.getElementById('mountainInfo');
  mountainInfo.innerHTML = `
      <div class="card">
          <img src="images/${mountain.img}" class="card-img-top" alt="${mountain.name}">
          <div class="card-body">
              <h1 class="card-title">${mountain.name}</h1>
              <p class="card-text">${mountain.desc}</p>
              <p class="para"><strong>Elevation:</strong> ${mountain.elevation} feet</p>
              <p class="para"><strong>Effort:</strong> ${mountain.effort}</p>
              <p class="para"><strong>Coordinates:</strong> lat: ${mountain.coords.lat}, lng: ${mountain.coords.lng}</p>
          </div>
      </div>
  `;
}

function clearMountainInfo() {
  const mountainInfo = document.getElementById('mountainInfo');
  mountainInfo.innerHTML = '';
}