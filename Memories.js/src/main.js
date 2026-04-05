import { Start } from './scenes/Start.js';
import { Tutorial } from './scenes/Tutorial.js';
import { Kinder } from './scenes/Kinder.js';
import { One } from './scenes/One.js';
import { Two } from './scenes/Two.js';
import { Three } from './scenes/Three.js';
import { Seven } from './scenes/Seven.js';
import { Eight } from './scenes/Eight.js';
import { Nine } from './scenes/Nine.js';
import { Ten } from './scenes/Ten.js';
import { End } from './scenes/End.js';

const config = {
    type: Phaser.AUTO,
    title: 'Memories.js',
    description: '',
    parent: 'game-container',
    width: 1280,
    height: 720,
    backgroundColor: '#000000',
    pixelArt: false,
    scene: [
        Start, 
        Tutorial, 
        Kinder, 
        One,
        Two,
        Three,
        Seven,
        Eight,
        Nine,
        Ten,
        End
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

new Phaser.Game(config);

const audio = document.querySelector('audio');
audio.volume = 0.3;

document.addEventListener('click', () => {
  audio.play();
}, { once: true });

const clickSound = document.getElementById('clickSound');

function playClick() {
  clickSound.currentTime = 0; // rewind so it can replay quickly
  clickSound.play();
}

document.addEventListener('click', playClick);
document.addEventListener('keydown', playClick);