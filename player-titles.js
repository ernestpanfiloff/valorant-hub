
window.addEventListener('load', function () {
    fetch('https://valorant-api.com/v1/playertitles')
        .then(response => response.json())
        .then(response =>
            displayPlayerTitles(response)
        )
        .catch(err => console.error(err));
});


function displayPlayerTitles(response) {
    const hiddenTitles = [];
    for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].isHiddenIfNotOwned == true) {
            hiddenTitles.push(response.data[i]);
        }
    }
    console.log(hiddenTitles);




    const PlayerTitles = document.querySelector('.PlayerTitles');
    for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].isHiddenIfNotOwned == false) {
            PlayerTitles.innerHTML += `
            <div class="PlayerTitles-title">
                <div class="PlayerTitles-title-content">

                    <h3>${response.data[i].titleText}</h3>

                    
                </div>
            </div>
        `;
        }
    }


    const HiddenPlayerTitles = document.querySelector('.HiddenPlayerTitles');
    for (let i = 0; i < hiddenTitles.length; i++) {
        HiddenPlayerTitles.innerHTML += `
        <div class="HiddenPlayerTitles-title">
            <div class="HiddenPlayerTitles-title-content">

                <h3>${hiddenTitles[i].titleText}</h3>
                
            </div>
        </div>
    `;
    }
}