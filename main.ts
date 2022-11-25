let RUKA = 0
input.onGesture(Gesture.Shake, function () {
    RUKA = randint(1, 3)
    if (RUKA == 1) {
        basic.showLeds(`
            # # . . .
            # . # . .
            # . . # .
            # . . # .
            # # # # .
            `)
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Noise,
        3574,
        1,
        255,
        0,
        1184,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), SoundExpressionPlayMode.UntilDone)
    } else if (RUKA == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1642, 5000, 114, 255, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Noise,
        500,
        499,
        255,
        0,
        750,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), SoundExpressionPlayMode.UntilDone)
    }
})
