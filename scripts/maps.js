
window.addEventListener('load', function () {
    fetch('https://valorant-api.com/v1/maps')
        .then(response => response.json())
        .then(response =>
            displayMaps(response)
        )
        .catch(err => console.error(err));
});


function displayMaps(response) {
    const maps = document.querySelector('.maps');
    let mapsList = ""
    for (let i = 0; i < response.data.length; i++) {
        mapsList += `
            <div class="maps-map">
                <div class="maps-map-content">

                    

                    <img src="${response.data[i].splash}" alt="${response.data[i].displayName}">

                    <h3>${response.data[i].displayName}</h3>
                    
                    <p>${response.data[i].coordinates}</p>

                    <!--- <a href="#" target="_blank">More about ${response.data[i].displayName}</a> --->
                </div>
            </div>
        `;
    }
    maps.innerHTML = mapsList
}