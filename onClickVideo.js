function onClickVideo() {
    var str = document.getElementById("content").innerHTML;

    // find every youtube link and replace it
    var result = str.replace(/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/ig, replaceLink);

    document.getElementById("content").innerHTML = result;
}

function replaceLink(item, index) {
    // get the video id from the link
    var lMatch = item.match(/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/i);

    // the second entry in the array contains "undefined" if the pattern doesn't match
    if(lMatch[1] != 'undefined') {
        var demo = document.getElementById('content');

        // you could also use this line, instead of the next one, if you only want clickable thumbnails
        //thumbnail = '<a href="https://www.youtube.com/watch?v='+ lMatch[1] +'" target="_blank"><img src="https://img.youtube.com/vi/'+lMatch[1]+ '/hqdefault.jpg"></a>';

        var thumbnail = '<div class="video-container" onclick="embedVideo(this, \''+ lMatch[1] +'\')">'
        +'<img  width="640" height="360" src="https://img.youtube.com/vi/'+lMatch[1]+ '/hqdefault.jpg">'
        +'<div class="info-card">Mit einem Klick auf dieses Bild akzeptierst Du, dass Daten von youtube.com geladen werden und youtube.com Cookies in deinem Browser anlegt.</div>'
        +'<div class="centered">'
        +'<button class="play-button"></button>'
        +'</div> </div>';

        return thumbnail;
    } else {
        // return original URL if it doesn't match
        return lMatch[0];
    }
}

function embedVideo(element, v) {
    element.innerHTML = '<iframe width="640" height="360" src="https://www.youtube.com/embed/'+ v +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}