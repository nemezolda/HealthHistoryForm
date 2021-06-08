var packager = require('electron-packager');
var safeFFMPEG  = require('electron-packager-plugin-non-proprietary-codecs-ffmpeg');

var options = {
    'app-copyright': 'All Rights Reserved, 2017-2019',
    'license': 'ISC',  
    'arch': 'ia32',
    'platform': 'win32',
    'dir': './',
    'asar': true,
    'icon': 'src/assets/icons/win/officeManager.ico',
    'name': 'ThreeTier',
    'ignore': ['./releases', './.git'],
    'out': 'release-builds',
    'overwrite': true,
    'prune': true,
    afterExtract: [safeFFMPEG.default],
    'version-string':{
        'LegalCopyright': 'All Rights Reserved, 2017-2019',
        'CompanyName': 'Henry Schein, Inc.',
        'OriginalFilename': 'ThreeTier',
        'ProductName': 'Dentrix Enterprise',
        'InternalName': 'Dentrix Enterprise',
    }
};

packager(options, function done_callback(err, appPaths) {
    console.log(err);
    console.log(appPaths);
});