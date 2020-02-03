class Board {
    constructor() {
        this.cardList = [];
    }

    addCards(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.cardList.push(new Card(arr[i]), new Card(arr[i]));
        }
    }

    shuffleCards() {
        for (let i = this.cardList.length - 1; i >= 0; i--) {
            const arr = this.cardList;
            let j = Math.floor(Math.random() * i);
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    drawBoard() {
        const section = document.getElementById('game-board');
        section.innerHTML = '';

        const cards = this.cardList;
        for (let i = 0; i < cards.length; i++) {
            const newCard = document.createElement('div');
            newCard.setAttribute('class', 'card');
            if (cards[i].isVisible === false) {
                cards[i].innerHTML = `<p>CLEARED</p>`;
            }
            else {
                newCard.innerHTML = cards[i].isFacingDown ?
                    `
                <img src="${ cards[i].pathOuterImg }" alt="BACK OF CARD ${i + 1}">
                ` :
                    `
                <img src="${ cards[i].pathInnerImg }" alt="${cards[i].name}">
                `;
            }

            newCard.addEventListener('click', () => {
                player.turnCard(i);
            });

            section.appendChild(newCard);
        }
    }

    displayAffirmation() {
        const textBox = document.getElementById('affirmation');
        const rand = Math.floor(Math.random() * affirmations.length);
        textBox.innerHTML = `
        ${affirmations[rand]}
        `;
    }

    isGameWon() {
        let won = false;
        for (let i = 0; i < this.cardList.length; i++) {
            if (this.cardList[i].isVisible === true) {
                won = false;
            }
        }

        if (won === true) {
            const section = document.getElementById('game-board');
            section.innerHTML = `
            <h2>Congratulations! You've won the game!</h2>
            `;
        }
    }
}
