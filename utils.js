// from https://stackoverflow.com/questions/8211744/convert-time-interval-given-in-seconds-into-more-human-readable-form
function forHumans ( seconds ) {
    var levels = [
        [Math.floor(seconds / 31536000), 'Y'],
        [Math.floor((seconds % 31536000) / 86400), 'D'],
        [Math.floor(((seconds % 31536000) % 86400) / 3600), 'H'],
        [Math.floor((((seconds % 31536000) % 86400) % 3600) / 60), 'M'],
        [(((seconds % 31536000) % 86400) % 3600) % 60, 'S'],
    ];
    var returntext = '';

    for (var i = 0, max = levels.length; i < max; i++) {
        if ( levels[i][0] === 0 ) continue;
        // returntext += ' ' + levels[i][0] + ' ' + (levels[i][0] === 1 ? levels[i][1].substr(0, levels[i][1].length-1): levels[i][1]);
        returntext += ' ' + levels[i][0] + levels[i][1];
    };
    return returntext.trim();
}