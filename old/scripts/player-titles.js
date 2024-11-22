
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
    let playerTitlesList = ""
    for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].isHiddenIfNotOwned == false) {
            playerTitlesList += `
            <div class="PlayerTitles-title">
                <div class="PlayerTitles-title-content">

                    <h3>${response.data[i].titleText}</h3>

                    
                </div>
            </div>
        `;
        }
        PlayerTitles.innerHTML = playerTitlesList
    }


    const HiddenPlayerTitles = document.querySelector('.HiddenPlayerTitles');
    let hiddenPlayerTitlesList = ""
    for (let i = 0; i < hiddenTitles.length; i++) {
        hiddenPlayerTitlesList += `
        <div class="HiddenPlayerTitles-title">
            <div class="HiddenPlayerTitles-title-content">

                <h3>${hiddenTitles[i].titleText}</h3>
                
            </div>
        </div>
    `;
    }
    HiddenPlayerTitles.innerHTML = hiddenPlayerTitlesList
}