const container = document.querySelector('.container');

const playlist = document.querySelector('.playlist');
const BaudimontSIO = document.querySelector('.BaudimontSIO');
const BaudimontLICENCE = document.querySelector('.BaudimontLICENCE');
const stjean = document.querySelector('.stjean');

const JeuxVideo = document.querySelector('.JeuxVideo');
const pharmagest = document.querySelector('.pharmagest');
const TTC = document.querySelector('.TTC');
const CyberPlanet = document.querySelector('.CyberPlanet');
const Python = document.querySelector('.Python');
const Reseau = document.querySelector('.Reseau');


const JeuxVideoID = document.getElementById('JeuxVideoID');
const pharmagestID = document.getElementById('pharmagestID');
const TTCID = document.getElementById('TTCID');
const CyberPlanetID = document.getElementById('CyberPlanetID');
const PythonID = document.getElementById('PythonID');
const ReseauID = document.getElementById('ReseauID');
const playlistID = document.getElementById('playlistID');
const SIOID = document.getElementById('SIOID');
const LicenceID = document.getElementById('LicenceID');
const stjeanID = document.getElementById('stjeanID');
const interactif = document.getElementById('cv_interactif');

width = document.documentElement.clientWidth;

function animation() {
        container.style.justifyContent = 'space-around';
        container.style.margin = '50px';

        playlistID.addEventListener('click', () => {
            playlist.classList.add('open');
            BaudimontSIO.classList.remove('open');
            BaudimontLICENCE.classList.remove('open');
            stjean.classList.remove('open');
            JeuxVideo.classList.remove('open');
            Python.classList.remove('open');
            TTC.classList.remove('open');
            pharmagest.classList.remove('open');
            CyberPlanet.classList.remove('open');
            Reseau.classList.remove('open');
        });


        SIOID.addEventListener('click', () => {
            BaudimontSIO.classList.add('open');
            playlist.classList.remove('open');
            BaudimontLICENCE.classList.remove('open');
            stjean.classList.remove('open');
            JeuxVideo.classList.remove('open');
            Python.classList.remove('open');
            TTC.classList.remove('open');
            pharmagest.classList.remove('open');
            CyberPlanet.classList.remove('open');
            Reseau.classList.remove('open');
        });

        LicenceID.addEventListener('click', () => {
            BaudimontLICENCE.classList.add('open');
            playlist.classList.remove('open');
            BaudimontSIO.classList.remove('open');
            stjean.classList.remove('open');
            JeuxVideo.classList.remove('open');
            Python.classList.remove('open');
            TTC.classList.remove('open');
            pharmagest.classList.remove('open');
            CyberPlanet.classList.remove('open');
            Reseau.classList.remove('open');
        });

        stjeanID.addEventListener('click', () => {
            stjean.classList.add('open');
            playlist.classList.remove('open');
            BaudimontSIO.classList.remove('open');
            BaudimontLICENCE.classList.remove('open');
            JeuxVideo.classList.remove('open');
            Python.classList.remove('open');
            TTC.classList.remove('open');
            pharmagest.classList.remove('open');
            CyberPlanet.classList.remove('open');
            Reseau.classList.remove('open');
        });

        JeuxVideoID.addEventListener('click', () => {
            JeuxVideo.classList.add('open');
            playlist.classList.remove('open');
            BaudimontSIO.classList.remove('open');
            BaudimontLICENCE.classList.remove('open');
            stjean.classList.remove('open');
            Python.classList.remove('open');
            TTC.classList.remove('open');
            pharmagest.classList.remove('open');
            CyberPlanet.classList.remove('open');
            Reseau.classList.remove('open');
        });
        TTCID.addEventListener('click', () => {
            TTC.classList.add('open');
            playlist.classList.remove('open');
            BaudimontSIO.classList.remove('open');
            BaudimontLICENCE.classList.remove('open');
            stjean.classList.remove('open');
            JeuxVideo.classList.remove('open');
            Python.classList.remove('open');
            pharmagest.classList.remove('open');
            CyberPlanet.classList.remove('open');
            Reseau.classList.remove('open');
        });
        CyberPlanetID.addEventListener('click', () => {
            CyberPlanet.classList.add('open');
            playlist.classList.remove('open');
            BaudimontSIO.classList.remove('open');
            BaudimontLICENCE.classList.remove('open');
            stjean.classList.remove('open');
            JeuxVideo.classList.remove('open');
            Python.classList.remove('open');
            TTC.classList.remove('open');
            pharmagest.classList.remove('open');
            Reseau.classList.remove('open');
        });
        pharmagestID.addEventListener('click', () => {
            pharmagest.classList.add('open');
            playlist.classList.remove('open');
            BaudimontSIO.classList.remove('open');
            BaudimontLICENCE.classList.remove('open');
            stjean.classList.remove('open');
            JeuxVideo.classList.remove('open');
            Python.classList.remove('open');
            TTC.classList.remove('open');
            CyberPlanet.classList.remove('open');
            Reseau.classList.remove('open');
        });
        PythonID.addEventListener('click', () => {
            Python.classList.add('open');
            playlist.classList.remove('open');
            BaudimontSIO.classList.remove('open');
            BaudimontLICENCE.classList.remove('open');
            stjean.classList.remove('open');
            JeuxVideo.classList.remove('open');
            TTC.classList.remove('open');
            pharmagest.classList.remove('open');
            CyberPlanet.classList.remove('open');
            Reseau.classList.remove('open');
        });
        ReseauID.addEventListener('click', () => {
            Reseau.classList.add('open');
            playlist.classList.remove('open');
            BaudimontSIO.classList.remove('open');
            BaudimontLICENCE.classList.remove('open');
            stjean.classList.remove('open');
            JeuxVideo.classList.remove('open');
            Python.classList.remove('open');
            TTC.classList.remove('open');
            pharmagest.classList.remove('open');
            CyberPlanet.classList.remove('open');
        });
        interactif.style.display = 'none';
}

function noanimation(){
    interactif.style.display = 'none';
}

if (width > 1600) {
    interactif.style.display = 'flex';
}


/***
playlist.classList.remove('open');
BaudimontSIO.classList.remove('open');
BaudimontLICENCE.classList.remove('open');
stjean.classList.remove('open');
JeuxVideo.classList.remove('open');
Python.classList.remove('open');
TTC.classList.remove('open');
pharmagest.classList.remove('open');
CyberPlanet.classList.remove('open');
Reseau.classList.remove('open');
*/