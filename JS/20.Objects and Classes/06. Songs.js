function printSongsByType(songsData) {
    class Song {
      constructor(typeList, name, time) {
        this.typeList = typeList;
        this.name = name;
        this.time = time;
      }
    }
  
    const n = songsData[0];
    const typeListFilter = songsData[songsData.length - 1];
  
    const songs = [];
  
    for (let i = 1; i <= n; i++) {
      const [typeList, name, time] = songsData[i].split('_');
      const song = new Song(typeList, name, time);
      songs.push(song);
    }
  
    if (typeListFilter === 'all') {
      songs.forEach((song) => console.log(song.name));
    } else {
      const filteredSongs = songs.filter((song) => song.typeList === typeListFilter);
      filteredSongs.forEach((song) => console.log(song.name));
    }
  }