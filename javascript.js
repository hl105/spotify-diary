var path;
var page;
var trackNames = [];

document.addEventListener("DOMContentLoaded", function() {
    path = window.location.pathname;
    page = path.split("/").pop().split(".ht")[0];
    /*
    if ((page!="index") && (page!="winter") && (page!="finals")){
        page = "index"; //default to index page
    }
    */

    var imageTexts = document.querySelectorAll(".image-text");

    imageTexts.forEach(function(imageText) {
        var imgSrc = imageText.querySelector("img").getAttribute("src");
        var fileName = imgSrc.split('/').pop().split('.jp')[0];
        var occ = fileName.split('-')[0];
        track = fileName.split('-')[1];
        var album = fileName.split('-')[2];

        var trackInfo = imageText.querySelector('.track-info');
        trackInfo.innerHTML = `<br> ${occ} repeats<br>${album}`;
        
        var textElement = imageText.querySelector(".comment");
        textElement.textContent = track;

        trackNames.push(track);
    });

    var popupButton = document.getElementById('popup-button');
    var popupPage = document.getElementById('popup');
    var popupExit = document.getElementById('exit');
    var popupDropdown = document.getElementById('popup-dropdown');

    if (popupButton) {
        popupButton.addEventListener('click', function() {
            popupPage.style.display = 'block';
        });
    }

    if(popupExit){
        exit.addEventListener('click', function(){
            popupPage.style.display = 'none';
        })
    }

    for (track in trackNames){
        var opt = document.createElement('option');
        opt.textContent = trackNames[track];
        popupDropdown.appendChild(opt);
    }

    var albums = document.querySelectorAll(".album-cover");
    for (var i = 0; i < albums.length; i++) {
        (function(index) {
            var album = albums[index];
            album.onclick = function() {
                window.location.href = "diary/"+page+"/track" + index + '.html';
            };
        })(i); // IIFE to create a new scope
    }

    /*popup to track diary connection*/
    var form = document.getElementById('entryForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission action

        // Extracting values from inputs
        var title = document.getElementById('entry-title').value;
        var entry = document.getElementById('entry').value;
        var dropdownValue = document.getElementById('popup-dropdown').value;


        var trackNum;
        //find coresponding track
        for (var i = 0; i < trackNames.length; i++) {
            (function(index) {
                var track = trackNames[index];
                if (track === dropdownValue){
                    trackNum = index;
                }
            })(i); // IIFE to create a new scope
        }


        //get album cover
        var albumCover = imageTexts[trackNum].querySelector("img").getAttribute("src");

        // Reading the image file
        var imageInput = document.querySelector('input[type="file"]');
        var file = imageInput.files[0];
        var reader = new FileReader();

        reader.onloadend = function() {
            // Store data in localStorage
            localStorage.setItem('title', title);
            localStorage.setItem('entry', entry);
            localStorage.setItem('track', dropdownValue);
            localStorage.setItem('image', reader.result);
            localStorage.setItem('albumCover', albumCover);
            localStorage.setItem('location',page+"-track"+trackNum);

            console.log(localStorage);

            function redirectPopup(page,trackNum){
                // Redirect to corresponding diary page
                window.location.href = "diary/"+page+"/track" + trackNum + '.html'+"?source=redirectPopup";
            }

            redirectPopup(page,trackNum);
        };

        if (file) {
            reader.readAsDataURL(file); // Reads the file as a Data URL
        }
    });

});
