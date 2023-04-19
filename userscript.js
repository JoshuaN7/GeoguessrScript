
//wait until page loads
document.addEventListener("DOMContentLoaded", function() {
    let element = document.getElementById('__NEXT_DATA__');
    if (element) {
        let USER_ID = JSON.parse(element.innerText).props.middlewareResults[1].account.user.userId;
        console.log(USER_ID);

        //Code
        (function() {

            // Variable for completed games
            let games = {}

            // Make a GET request to get games played
            GM_xmlhttpRequest({
                method: "GET",
                url: "https://www.geoguessr.com/me/profile",
                onload: function(response) {
                    // Extract the relevant data from the response
                    games = getGames(response.responseText)

                    // Add for total games
                    let totalGames = 0;
                    for (let key in games) {
                        totalGames += parseInt(games[key], 10);
                    }
                    let stats = document.getElementsByClassName('container_content__H3tXS')
                    const totalDisplay = document.createElement('div')
                    totalDisplay.textContent = totalGames
                    stats.appendChild(totalDisplay)
                    console.log(totalGames);
                }
            })

            // Function to extract data from the webpage
            function getGames(html) {
                // Use JavaScript DOM manipulation to extract data from the webpage
                let games = {};
                games.game1 = parseInt(document.querySelector('#__next > div.background_wrapper__OlrxG.background_backgroundProfile__EY4oP > div.version4_layout__KcIcs > div.version4_content__oaYfe > main > div > div > div > div.container_sizeMedium__zNtDe.container_overflowVisible__tXD2V > div > div.grid_grid__Hrqu6.grid_columns3__LP6wX.grid_columnsXSmall2__xoSih.grid_columnsSmall3__xY9lb.grid_columnsMedium3__IYERm > div:nth-child(1) > div > div.user-stats-overview_header__XR5_M > h4').textContent, 10)
                games.game2 = parseInt(document.querySelector('#__next > div.background_wrapper__OlrxG.background_backgroundProfile__EY4oP > div.version4_layout__KcIcs > div.version4_content__oaYfe > main > div > div > div > div.container_sizeMedium__zNtDe.container_overflowVisible__tXD2V > div > div:nth-child(4) > div:nth-child(1) > div > div.user-stats-overview_header__XR5_M > h4').textContent, 10)
                games.game3 = parseInt(document.querySelector('#__next > div.background_wrapper__OlrxG.background_backgroundProfile__EY4oP > div.version4_layout__KcIcs > div.version4_content__oaYfe > main > div > div > div > div.container_sizeMedium__zNtDe.container_overflowVisible__tXD2V > div > div:nth-child(6) > div:nth-child(1) > div > div.user-stats-overview_header__XR5_M > h4').textContent, 10)
                games.game4 = parseInt(document.querySelector('#__next > div.background_wrapper__OlrxG.background_backgroundProfile__EY4oP > div.version4_layout__KcIcs > div.version4_content__oaYfe > main > div > div > div > div.container_sizeMedium__zNtDe.container_overflowVisible__tXD2V > div > div:nth-child(6) > div:nth-child(4) > div > div.user-stats-overview_header__XR5_M > h4').textContent, 10)
                games.game5 = parseInt(document.querySelector('#__next > div.background_wrapper__OlrxG.background_backgroundProfile__EY4oP > div.version4_layout__KcIcs > div.version4_content__oaYfe > main > div > div > div > div.container_sizeMedium__zNtDe.container_overflowVisible__tXD2V > div > div:nth-child(8) > div:nth-child(1) > div > div.user-stats-overview_header__XR5_M > h4').textContent, 10)
                games.game6 = parseInt(document.querySelector('#__next > div.background_wrapper__OlrxG.background_backgroundProfile__EY4oP > div.version4_layout__KcIcs > div.version4_content__oaYfe > main > div > div > div > div.container_sizeMedium__zNtDe.container_overflowVisible__tXD2V > div > div:nth-child(10) > div:nth-child(1) > div > div.user-stats-overview_header__XR5_M > h4').textContent, 10)
                return games
            }
        })()
    }else {
        console.log("Id not found element not found on page")
    }
})


