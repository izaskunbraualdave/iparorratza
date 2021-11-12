basic.forever(function () {
	
})
basic.forever(function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() < 45 || 315 > input.compassHeading()) {
        music.playMelody("C E A F D C5 G B ", 301)
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
})
