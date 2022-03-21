input.onButtonPressed(Button.A, function () {
    varken.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    varken.change(LedSpriteProperty.X, 1)
})
let fruit: game.LedSprite = null
let varken: game.LedSprite = null
varken = game.createSprite(2, 4)
basic.forever(function () {
    fruit = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        fruit.change(LedSpriteProperty.Y, 1)
    }
    if (fruit.isTouching(varken)) {
        game.addScore(1)
        fruit.delete()
    } else {
        game.gameOver()
    }
})
