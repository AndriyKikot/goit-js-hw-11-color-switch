import colors from './colors.js';

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
};

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function switchColorBg() {
    const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.background = colors[randomIndex];
}

const switcher = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
            switchColorBg();
        }, 1000);
        refs.startBtn.setAttribute('disabled', 'disabled')
    },
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.isActive = false;
        refs.startBtn.removeAttribute('disabled');
    },
};

refs.startBtn.addEventListener('click', switcher.start.bind(switcher));
refs.stopBtn.addEventListener('click', switcher.stop.bind(switcher));