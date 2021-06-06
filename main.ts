controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    randomfunc()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.over(true)
})
function randomfunc () {
    random_number_genorater = randint(0, 9999999999)
    scene.setBackgroundColor(11)
    if (game.askForNumber(convertToText(random_number_genorater), 10) == random_number_genorater) {
        game.over(true)
    } else {
        game.over(false)
    }
    mySprite = sprites.create(img`
        3 . . . . . . . . . . . . . . . 
        3 . . . . 3 . . . . . . . . . . 
        3 3 3 . . 3 3 . . 3 3 . . . . . 
        3 . . 3 . 3 . . 3 . . 3 . 3 . 3 
        3 3 3 . . 3 . . 3 . . 3 . . 3 . 
        . . . . . . . . . 3 3 3 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . 3 3 . . . . 3 3 . . . . 3 3 . 
        3 . 3 3 . . 3 . 3 3 . . 3 . 3 3 
        3 . . 3 . . 3 . . 3 . . 3 . . 3 
        . 3 . 3 . . . 3 . 3 . . . 3 . 3 
        . . . 3 . . . . . 3 . . . . . 3 
        . . . . . . . . . . . . . . . . 
        . . . 3 . . . . . 3 . . . . . 3 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(75, 20)
}
let mySprite: Sprite = null
let random_number_genorater = 0
randomfunc()
