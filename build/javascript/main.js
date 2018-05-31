var mapButton = document.getElementById('mapButton');
var mapContainer = document.getElementById('mapContainer');
var curtain = document.getElementById('curtain');

mapButton.addEventListener('click', function (event) {
    event.preventDefault();
    mapContainer.classList.remove('hide');
})

curtain.addEventListener('click', function (event) {
    event.preventDefault();
    mapContainer.classList.add('hide');
})

var searchLabel = document.getElementById('searchLabel');
var userLabel = document.getElementById('userLabel');
var userInput = document.getElementById('userInput');
var searchInput = document.getElementById('searchInput');



userLabel.addEventListener('click', function(event) {
    event.preventDefault();
    searchLabel.classList.add('off');
    userLabel.classList.remove('off');
    userInput.focus();
});

searchLabel.addEventListener('click', function(event) {
    event.preventDefault();
    searchLabel.classList.remove('off');
    userLabel.classList.add('off');
    searchInput.focus();
});

