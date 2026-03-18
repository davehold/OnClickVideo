// onClickVideo
// Version 1.1

// Autoload when DOM is done loading
document.addEventListener("DOMContentLoaded", function() {
    onClickVideo();
});

function onClickVideo() {
    var posts = document.querySelectorAll(".post");

    posts.forEach(function(postElement) {
        var str = postElement.innerHTML;
        var regex = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?‌​=]*)?/ig;
        var result = str.replace(regex, function(match, videoId) {
            return createThumbnailHTML(videoId);
        });
        postElement.innerHTML = result;
    });
}

function createThumbnailHTML(vId) {
    return '<div class="video-container" onclick="embedVideo(this, \'' + vId + '\')">'
        + '<img src="https://img.youtube.com/vi/' + vId + '/hqdefault.jpg">'
        + '<div class="info-card">Mit einem Klick auf dieses Bild akzeptierst du, dass Daten von youtube.com geladen werden und youtube.com Cookies in deinem Browser anlegt.</div>'
        + '<div class="centered">'
        + '<button class="play-button"></button>'
        + '</div></div>';
}

function embedVideo(element, v) {
    element.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ v +'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}