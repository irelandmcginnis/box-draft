input.onButtonPressed(Button.A, function () {
    range1 = strip.range(0, 8)
    range1.showColor(neopixel.colors(NeoPixelColors.Orange))
})
input.onPinPressed(TouchPin.P2, function () {
    servos.P0.setAngle(180)
    basic.pause(2000)
    servos.P0.setAngle(0)
    basic.pause(2000)
    servos.P0.setAngle(180)
    basic.pause(2000)
    servos.P0.setAngle(0)
    basic.pause(2000)
    servos.P0.setAngle(180)
    basic.pause(2000)
    servos.P0.setAngle(0)
    servos.P0.setAngle(180)
    servos.P0.stop()
})
input.onButtonPressed(Button.AB, function () {
    range1 = strip.range(0, 8)
    range2 = strip.range(8, 15)
    strip.showRainbow(50, 360)
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    range2 = strip.range(8, 15)
    range2.showColor(neopixel.colors(NeoPixelColors.Blue))
})
let count = 0
let range2: neopixel.Strip = null
let range1: neopixel.Strip = null
let strip: neopixel.Strip = null
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
strip = neopixel.create(DigitalPin.P1, 36, NeoPixelMode.RGB)
range1 = strip.range(0, 8)
range2 = strip.range(8, 15)
range2.showColor(neopixel.colors(NeoPixelColors.Red))
strip.show()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
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
