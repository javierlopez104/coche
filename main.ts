input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        # . . # .
        # . # . .
        # . . . .
        . # # # .
        `)
})
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.moveTime(cuteBot.Direction.forward, 10, 100)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(25, 50)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffff00)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(50, 25)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffff00)
    }
})
