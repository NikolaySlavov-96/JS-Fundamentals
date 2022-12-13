function songs(songs){
    
    let condition = songs.shift();
    let endCommand = songs.pop();
    let temporary = [];

    class Song {
        constructor(type , nameSong , longTime) {
            this.type = type;
            this.nameSong = nameSong;
            this.longTime = longTime;
        }
        prints(){
            console.log(this.nameSong)
        }
    }

    for (const song of songs) {
        
        let [playList , nameSong , time] = song.split(`_`);
        let music = '';

        if(playList === endCommand){
            music = new Song(playList , nameSong , time);
            music.prints()
        } else if(endCommand === 'all') {
            music = new Song(playList , nameSong , time);
            music.prints()
        }

    }
}

// songs([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater']
//     )
// songs([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite']    
//     )
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )

