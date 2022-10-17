input.onButtonPressed(Button.A, function () {
    range2 = strip.range(8, 15)
    range2.showColor(neopixel.colors(NeoPixelColors.Blue))
})
input.onPinPressed(TouchPin.P2, function () {
    servos.P0.run(50)
})
input.onButtonPressed(Button.AB, function () {
    range2 = strip.range(8, 15)
    range1 = strip.range(0, 8)
    strip.showRainbow(50, 360)
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    range1 = strip.range(0, 8)
    range1.showColor(neopixel.colors(NeoPixelColors.Orange))
})
let count = 0
let range2: neopixel.Strip = null
let range1: neopixel.Strip = null
let strip: neopixel.Strip = null
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
range1 = strip.range(0, 8)
range2 = strip.range(8, 15)
range2.showColor(neopixel.colors(NeoPixelColors.Red))
strip.show()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # # # #
            . # # # .
            . . # . .
            `)
        count += 1
    }
})
