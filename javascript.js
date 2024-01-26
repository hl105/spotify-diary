document.addEventListener("DOMContentLoaded", function() {
    var imageTexts = document.querySelectorAll(".image-text");
    var trackInfos= document.querySelector('.track-info');

    imageTexts.forEach(function(imageText) {
        var imgSrc = imageText.querySelector("img").getAttribute("src");
        var fileName = imgSrc.split('/').pop().split('.jp')[0];
        var occ = fileName.split('-')[0];
        var track = fileName.split('-')[1];
        var album = fileName.split('-')[2];

        var trackInfo = imageText.querySelector('.track-info');
        trackInfo.innerHTML = `<br> ${occ} repeats<br>${album}`;
        
        var textElement = imageText.querySelector(".comment");
        textElement.textContent = track;
    });

});

