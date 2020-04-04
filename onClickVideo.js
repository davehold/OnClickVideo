function onClickVideo() {
    var str = document.getElementById("content").innerHTML;
    var result = str.match(/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/ig);

    result.forEach(replaceLink);
}

function replaceLink(item, index) {
    var lMatch = item.match(/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/i);

    // the second entry in the array contains "undefined" if the pattern doesn't match
    if(lMatch[1] != 'undefined') {
        var demo = document.getElementById('content');
        var videoContainer = document.createElement('div');

        // you could also use this line, instead of the next one, if you only want clickable thumbnails
        //newContent.innerHTML = '<a href="https://www.youtube.com/watch?v='+ lMatch[1] +'" target="_blank"><img src="https://img.youtube.com/vi/'+lMatch[1]+ '/hqdefault.jpg"></a>';
        
        videoContainer.innerHTML = '<div class="video-container" onclick="embedVideo(this, \''+ lMatch[1] +'\')">'
                                 +'<img src="https://img.youtube.com/vi/'+lMatch[1]+ '/hqdefault.jpg">'
                                 +'<div class="info-card">Mit einem Klick auf dieses Bild akzeptierst Du, dass Daten von youtube.com geladen werden und youtube.com Cookies in deinem Browser anlegt.</div>'
                                 +'<div class="centered">'
                                 +'<button class="play-button"></button>'
                                 +'</div> </div>';
        demo.appendChild(videoContainer.firstChild);
    } else {
        // return original URL if it doesn't
        console.log(lMatch[0])
    }
}

function embedVideo(element, v) {
    element.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ v +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}