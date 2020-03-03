// Constants
const emotions = [
    'accepting',
    'loving',
    'happiness',
    'sad',
    'peaceful',
    'vibes',
];

const affirmations = [
    '✿ Allow yourself to transform as many times as you need to be fully happy and free ✿',
    '✿ Your worth is far beyond what you know ✿',
    '✿ Your presence matters here! ✿',
    '✿ You are worthy of the process it takes to grow in healing ways ✿',
    '✿ Don\'t ever let anyone disturb your peace ✿',
    '✿ Your story of resilience will stir up resilience in others ✿',
    '✿ You are MAGIC ✿',
    '✿ Do it all with passion or not at all ✿',
];

window.addEventListener('load', () => {
    gameStart();
});

let player;
let board;

function gameStart() {
    player = new Player()
    board = new Board();
    board.addCards(emotions);
    board.shuffleCards();
    board.drawBoard();
}
