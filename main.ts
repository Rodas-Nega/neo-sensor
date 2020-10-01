let Distance = 0
let strip: neopixel.Strip = null
// Created By: Rodas N.
// Created On: Oct 1 2020
// 
// This program correlates with the distance of the echo from the sonar hitting an object with the color/amount of LEDs shown on the robot.
basic.forever(function () {
    Distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (Distance > 4) {
        strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        strip.clear()
    } else if (Distance == 0) {
        strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        strip.clear()
    } else if (Distance == 1) {
        strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        strip.clear()
    } else if (Distance == 2) {
        strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        strip.clear()
    } else if (Distance == 3) {
        strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        strip.clear()
    } else {
        strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        strip.clear()
    }
})
