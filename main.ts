input.onButtonPressed(Button.A, function () {
    speler.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    speler.change(LedSpriteProperty.X, 1)
})
let fruit: game.LedSprite = null
let speler: game.LedSprite = null
speler = game.createSprite(2, 4)
basic.forever(function () {
    fruit = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        fruit.change(LedSpriteProperty.Y, 1)
    }
    if (fruit.isTouching(speler)) {
        game.gameOver()
    } else {
        game.addScore(1)
        fruit.delete()
    }
})
