
window.addEventListener('load', function () {
    fetch('https://valorant-api.com/v1/playertitles')
        .then(response => response.json())
        .then(response =>
            displayPlayerTitles(response)
        )
        .catch(err => console.error(err));
});


function displayPlayerTitles(response) {
    const PlayerTitles = document.querySelector('.PlayerTitles');
    for (let i = 0; i < response.data.length; i++) {
        PlayerTitles.innerHTML += `
            <div class="PlayerTitles-title">
                <div class="PlayerTitles-title-content">

                    <h3>${response.data[i].titleText}</h3>

                    
                </div>
            </div>
        `;
    }
}