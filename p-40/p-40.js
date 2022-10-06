var make_album = function (title, artist) {
    var music_album = {
        album_title: title,
        artist_name: artist
    };
    return (music_album);
};
var album1 = make_album('Main Ne Usse Dekha Hai', 'Rahat Fateh Ali Khan');
var album2 = make_album('Jugni', 'Arif Lohar');
var album3 = make_album('Jeene Laga Hoon', 'Atif Aslam');
console.log(album1);
console.log(album2);
console.log(album3);
