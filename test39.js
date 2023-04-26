function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Ed Sheeran", "Divide"));
console.log(make_album("Taylor Swift", "Lover", 18));
console.log(make_album("Coldplay", "Parachutes", 10));
