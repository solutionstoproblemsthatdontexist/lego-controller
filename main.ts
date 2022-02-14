radio.setGroup(1)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    radio.sendValue("X", pins.analogReadPin(AnalogPin.P1))
    radio.sendValue("Y", pins.analogReadPin(AnalogPin.P2))
    serial.writeLine("" + (pins.analogReadPin(AnalogPin.P1)))
})
