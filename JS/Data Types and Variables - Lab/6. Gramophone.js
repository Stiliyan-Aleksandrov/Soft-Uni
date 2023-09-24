function solve(band, album, song) {
    let songDurationSec = (album.length * band.length) * song.length / 2
    let rotations = songDurationSec / 2.5;
    console.log(`The plate was rotated ${(Math.ceil(rotations))} times.`)
}
solve ('Rammstein', 'Sehnsucht',

'Engel')