let metro = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f e e e e e e f . . . . 
    . . . . f e f e e f e f . . . . 
    . . . f f e e e e e e f f . . . 
    . . . f . e f f f f e . f . . . 
    . . . f . e e e e e e . f . . . 
    . . . . f 5 f f f f 5 f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . e f f f f f f e . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . f f . . . . f f . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
metro,
assets.animation`myAnim0`,
300,
true
)
music.play(music.createSong(hex`005f000408020300001c00010a006400f40164000004000000000000000000000000000500000449000000040002202a08000c00021d270c001000021b2c14001800012a18001c00021d2420002400021e2a2400280001272c00300002192c3000340001243400380001203c004000021b2a06001c00010a006400f4016400000400000000000000000000000000000000020c0014001800011928002c00012207001c00020a006400f4016400000400000000000000000000000000000000032a0004000800012510001400012218001c0001292000240001192c003000012434003800011b3c0040000124`), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("E A C5 C C5 G C F ", 500), music.PlaybackMode.LoopingInBackground)
music.play(music.createSoundEffect(WaveShape.Sine, 5000, 3718, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
music.play(music.createSoundEffect(WaveShape.Sawtooth, 3183, 3941, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
