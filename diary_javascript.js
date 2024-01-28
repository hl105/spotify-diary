document.addEventListener('DOMContentLoaded', function() {
    var mainTitle = document.getElementById('main-title');
    var bodyTitle = document.getElementById('body-title');
    var popTitle = document.getElementById('popup-title');
    var album = document.getElementById('album-cover');
    var popContent = document.getElementById('popup-content');
    var uploadedPhoto = document.getElementById('uploaded-photo');

    //reset button
    // save original content to localStorage
    function saveOriginalContent() {
        localStorage.setItem('originalMainTitle', mainTitle.textContent);
        localStorage.setItem('originalBodyTitle', bodyTitle.textContent);
        localStorage.setItem('originalPopTitle', popTitle.textContent);
        localStorage.setItem('originalAlbumCover', album.src);
        localStorage.setItem('originalPopContent', popContent.textContent);
        localStorage.setItem('originalUploadedPhoto', uploadedPhoto.src);
    }

    // reset to original content
    function resetToOriginal() {
        mainTitle.textContent = localStorage.getItem('originalMainTitle');
        bodyTitle.textContent = localStorage.getItem('originalBodyTitle');
        popTitle.textContent = localStorage.getItem('originalPopTitle');
        album.src = localStorage.getItem('originalAlbumCover');
        popContent.textContent = localStorage.getItem('originalPopContent');
        uploadedPhoto.src = localStorage.getItem('originalUploadedPhoto');
    }

    // Call saveOriginalContent function
    saveOriginalContent();

    //reset button
    document.getElementById('reset-button').addEventListener('click', resetToOriginal);



    //find location
    var path = window.location.pathname.split("/").slice(3);
    console.log(path);
    var num = path[1].split('.ht')[0];
    var pg = path[0];
    var loc = pg+"-"+num;
    console.log(loc);

    // Retrieve and set values from localStorage if they exist
    if (localStorage.getItem(loc+'popupTrack')) {
        mainTitle.textContent = localStorage.getItem(loc+'popupTrack');
        bodyTitle.textContent = "This is the story of " + localStorage.getItem(loc+'popupTrack');
        popTitle.textContent = localStorage.getItem(loc+'popupTitle');
        album.src = localStorage.getItem(loc+'albumCover');
        popContent.textContent = localStorage.getItem(loc+'popupEntry');
        if (localStorage.getItem(loc+'popupImage')) {
            uploadedPhoto.src = localStorage.getItem(loc+'popupImage');
        }
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get('source') === 'redirectPopup') {
        //save original in tempPage


        // Retrieve data from URL parameters or another source
        var popupTitle = localStorage.getItem('title');
        var popupEntry = localStorage.getItem('entry');
        var popupImage = localStorage.getItem('image');
        var popupTrack = localStorage.getItem('track');
        var albumCover = localStorage.getItem('albumCover');
        var location = localStorage.getItem('location');

        //correct path
        var albumPath = albumCover.split('/').slice(1);
        albumCover = "../../"+albumPath[0]+"/"+ albumPath[1];

        // Update the elements
        mainTitle.textContent = popupTrack;
        bodyTitle.textContent = "This is the story of " + popupTrack;
        popTitle.textContent= popupTitle;
        album.src= albumCover;
        popContent.textContent = popupEntry;
        if (popupImage) {
            uploadedPhoto.src = popupImage;
        }

        // Save to localStorage
        localStorage.setItem(location+'popupTrack', popupTrack);
        localStorage.setItem(location+'popupTitle', popupTitle);
        localStorage.setItem(location+'popupEntry', popupEntry);
        localStorage.setItem(location+'popupImage', popupImage);
        localStorage.setItem(location+'albumCover', albumCover);
    }

});



