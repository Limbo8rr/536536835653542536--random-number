controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    randomfunc()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.over(true)
})
function randomfunc () {
    random_number_genorater = randint(0, 888888888)
    scene.setBackgroundColor(11)
    if (game.askForNumber(convertToText(random_number_genorater), 10) == random_number_genorater) {
        info.changeScoreBy(random_number_genorater)
        if (Math.percentChance(50)) {
            game.over(true)
        } else {
        	
        }
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
info.setScore(0)
randomfunc()
