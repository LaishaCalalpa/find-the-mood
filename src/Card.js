class Card {
    constructor(name) {
        this.name = name;
        this.isFacingDown = true;
        this.isVisible = true;
        this.isClicked = false;
        this.pathInnerImg = `./public/images/${this.name}.png`;
        this.pathOuterImg = './public/images/back-img.jpg';
    }
}
