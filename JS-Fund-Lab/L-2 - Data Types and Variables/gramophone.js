function gramophone(bandName , nameAlbum , songName){

    let time = (bandName.length * nameAlbum.length) * songName.length / 2;

    let sumRotate = Math.ceil(time / 2.5)

    console.log(`The plate was rotated ${sumRotate} times.`)
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')