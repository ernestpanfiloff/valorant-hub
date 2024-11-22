
window.addEventListener('load', function () {
    fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
        .then(response => response.json())
        .then(response =>
            displayAgents(response)
        )
        .catch(err => console.error(err));
});


function displayAgents(response) {
    const agents = document.querySelector('.agents');
    let agentList = ""
    for (let i = 0; i < response.data.length; i++) {
        agentList += `
            <div class="agents-agent">
                <div class="agents-agent-content">

                    <span>${response.data[i].role.displayName}</span>

                    <img src="${response.data[i].fullPortraitV2}" alt="${response.data[i].displayName}">

                    <h3>${response.data[i].displayName}</h3>
                    
                    <p>${response.data[i].description}</p>

                    <!--- <a href="#" target="_blank">More about ${response.data[i].displayName}</a> --->
                </div>
            </div>
        `;
    }
    agents.innerHTML = agentList
}