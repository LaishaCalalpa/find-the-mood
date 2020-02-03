class Player {
    constructor() {
        this.numberOfCardsTurned = 0;
        this.cardGuess1 = null;
        this.cardGuess2 = null;
    }

    turnCard(index) {
        if (this.numberOfCardsTurned < 2 && board.cardList[index].isVisible === true && board.cardList[index].isClicked === false) {
            this.numberOfCardsTurned++;
            if (this.cardGuess1 === null) {
                this.cardGuess1 = index;
                board.cardList[this.cardGuess1].isFacingDown = false;
                board.cardList[this.cardGuess1].isClicked = true;
                board.drawBoard();
            }
            else {
                this.cardGuess2 = index;
                board.cardList[this.cardGuess2].isFacingDown = false;
                board.cardList[this.cardGuess1].isClicked = true;
                board.drawBoard();
                console.log('Ready to make a guess!');
                this.makeGuess();
            }
        }
    }

    makeGuess() {
        const cards = board.cardList;
        if (cards[this.cardGuess1].name === cards[this.cardGuess2].name) {
            console.log('YES');
            // Todo: add delay here
            cards[this.cardGuess1].isVisible = false;
            cards[this.cardGuess2].isVisible = false;
            board.drawBoard();
            board.displayAffirmation();
            board.isGameWon();

        }
        else {
            console.log('NOPE');
            // Todo: add delay here
            cards[this.cardGuess1].isFacingDown = true;
            cards[this.cardGuess2].isFacingDown = true;
            board.cardList[this.cardGuess1].isClicked = false;
            board.cardList[this.cardGuess2].isClicked = false;
            board.drawBoard();
        }
        this.numberOfCardsTurned = 0;
        this.cardGuess1 = null;
        this.cardGuess2 = null;
    }
}
