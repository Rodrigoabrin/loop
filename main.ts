input.onButtonPressed(Button.A, function () {
    for (let count = 0; count <= 4; count++) {
        basic.showNumber(count)
    }
})
let count = 0
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
}
basic.forever(function () {
	
})
