// from https://stackoverflow.com/questions/8211744/convert-time-interval-given-in-seconds-into-more-human-readable-form
function forHumans ( seconds ) {
    var levels = [
        [Math.floor(seconds / 31536000), 'years'],
        [Math.floor((seconds % 31536000) / 86400), 'days'],
        [Math.floor(((seconds % 31536000) % 86400) / 3600), 'hours'],
        [Math.floor((((seconds % 31536000) % 86400) % 3600) / 60), 'mins'],
        [(((seconds % 31536000) % 86400) % 3600) % 60, 'secs'],
    ];
    var returntext = '';

    for (var i = 0, j = 0, flag = false, max = levels.length; i < max && j < 1; i++) {
        if (flag) j++;
        if ( levels[i][0] === 0 ) continue;
        returntext += ' ' + levels[i][0] + ' ' + (levels[i][0] === 1 ? levels[i][1].substr(0, levels[i][1].length-1): levels[i][1]);
        flag = true;
    };
    return returntext.trim();
}