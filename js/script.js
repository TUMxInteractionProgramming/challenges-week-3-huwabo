console.log('Hello');

function switchChannel(channelName) {
    console.log('tuning into channel', channelName);
    document.getElementById('chat-name').innerHTML = channelName;
    document.getElementById('chat-location').innerHTML='upgrading.never.helps';
    document.getElementById('chat-location').href = document.getElementById('yu').href;
    document.getElementById('chat-location').target = '_blank';
    document.getElementById('chat-location').style.color = 'white';
    $('ul li').removeClass('selected');
    $(channelName).addClass('selected');
    updateStar(channelName);
}

function updateStar(channelName) {
    var s = '' + channelName +  ' .star';
    console.log(s);
    var b = $(s).attr('src');
    if (b == 'http://ip.lfe.mw.tum.de/sections/star.png') {
    $(s).attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
} else {
    $(s).attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}
}

function changeStar() {
    var s = $('#chat>h1>img').attr('src');
    if (s == 'http://ip.lfe.mw.tum.de/sections/star.png')   {
    $('#chat>h1>img').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
}
    else {
    $('#chat>h1>img').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');

}
}
function selectTab(tabId) {
    $('#tab-bar button').removeClass('selected');
    $(tabId).addClass('selected');
    
}

function select(channelName) {
    $('ul li').removeClass('selected');
    $('li:contains(' + channelName + ')').addClass('selected');
    updateStar(channelName)
}