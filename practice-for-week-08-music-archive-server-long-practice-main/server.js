const http = require("http");
const fs = require("fs");

/* ============================ SERVER DATA ============================ */
let artists = JSON.parse(fs.readFileSync("./seeds/artists.json"));
let albums = JSON.parse(fs.readFileSync("./seeds/albums.json"));
let songs = JSON.parse(fs.readFileSync("./seeds/songs.json"));

let nextArtistId = 2;
let nextAlbumId = 2;
let nextSongId = 2;

// returns an artistId for a new artist
function getNewArtistId() {
  const newArtistId = nextArtistId;
  nextArtistId++;
  return newArtistId;
}

// returns an albumId for a new album
function getNewAlbumId() {
  const newAlbumId = nextAlbumId;
  nextAlbumId++;
  return newAlbumId;
}

// returns an songId for a new song
function getNewSongId() {
  const newSongId = nextSongId;
  nextSongId++;
  return newSongId;
}

/* ======================= PROCESS SERVER REQUESTS ======================= */
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // assemble the request body
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    // finished assembling the entire request body
    // Parsing the body of the request depending on the "Content-Type" header
    if (reqBody) {
      switch (req.headers["content-type"]) {
        case "application/json":
          req.body = JSON.parse(reqBody);
          break;
        case "application/x-www-form-urlencoded":
          req.body = reqBody
            .split("&")
            .map((keyValuePair) => keyValuePair.split("="))
            .map(([key, value]) => [key, value.replace(/\+/g, " ")])
            .map(([key, value]) => [key, decodeURIComponent(value)])
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {});
          break;
        default:
          break;
      }
      console.log(req.body);
    }

    /* ========================== ROUTE HANDLERS ========================== */

    // Get all the artists
    // GET /artists
    if (req.method === "GET" && req.url === "/artists") {
      const responseBody = JSON.stringify(artists);

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");

      return res.end(responseBody);
    }

    // Get a specific artist's details based on artistId
    // GET /artists/:id
    if (req.method === "GET" && req.url.startsWith("/artists")) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        const id = urlParts[2];
        const artist = artists[id];
        if (artist) {
          const responseBody = JSON.stringify(artist);

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");

          return res.end(responseBody);
        }
      }
    }

    // Add an artist
    // POST /artists
    if (req.method === "POST" && req.url === "/artists") {
      const newArtistId = getNewArtistId();
      const newArtist = {
        name: req.body.name,
        artistId: newArtistId,
      };

      artists[newArtistId] = newArtist;

      const responseBody = JSON.stringify(newArtist);

      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");

      return res.end(responseBody);
    }

    // Edit a specified artist by artistId
    // PUT/PATCH /artists/:id
    if (
      (req.method === "PUT" || req.method === "PATCH") &&
      req.url.startsWith("/artists")
    ) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        const id = urlParts[2];
        const artist = artists[id];
        const newName = req.body.name;
        if (artist && newName) {
          artist["name"] = newName;

          const responseBody = JSON.stringify(artist);

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");

          return res.end(responseBody);
        }
      }
    }

    // Delete a specified artist by artistId
    // DELETE /artists/:id
    if (req.method === "DELETE" && req.url.startsWith("/artists")) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        const id = urlParts[2];
        const artist = artists[id];
        if (artist) {
          delete artists[id];

          res.statusCode = 204;

          return res.end();
        }
      }
    }

    // Get all albums of a specific artist based on artistId
    // GET /artists/:id/albums
    if (req.method === "GET" && req.url.startsWith("/artists")) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 4 && urlParts[3] === "albums") {
        const artistId = Number(urlParts[2]);
        const albumsOfArtist = Object.values(albums).filter(
          (album) => album.artistId === artistId
        );

        const responseBody = JSON.stringify(albumsOfArtist);

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        return res.end(responseBody);
      }
    }

    // Get a specific album's details based on albumId
    // GET /albums/1
    if (req.method === "GET" && req.url.startsWith("/albums")) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        const id = urlParts[2];
        const album = albums[id];
        if (album) {
          const responseBody = JSON.stringify(album);

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");

          return res.end(responseBody);
        }
      }
    }

    // Add an album to a specific artist based on artistId
    // POST /artists/:id/albums
    if (req.method === "POST" && req.url.startsWith("/artists")) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 4 && urlParts[3] === "albums") {
        const artistId = Number(urlParts[2]);
        const newAlbumId = getNewAlbumId();

        const newAlbum = {
          name: req.body.name,
          albumId: newAlbumId,
          artistId,
        };

        albums[newAlbumId] = newAlbum;

        const responseBody = JSON.stringify(newAlbum);

        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");

        return res.end(responseBody);
      }
    }

    // Edit a specified album by albumId
    // PUT/PATCH /albums/:id
    if (
      (req.method === "PUT" || req.method === "PATCH") &&
      req.url.startsWith("/albums")
    ) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        const albumId = urlParts[2];
        const album = albums[albumId];
        const newAlbumName = req.body.name;

        if (album && newAlbumName) {
          album["name"] = newAlbumName;

          const responseBody = JSON.stringify(album);

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");

          return res.end(responseBody);
        }
      }
    }

    // Delete a specified album by albumId
    // DELETE /albums/:id
    if (req.method === "DELETE" && req.url.startsWith("/albums")) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        const id = urlParts[2];
        const album = albums[id];
        if (album) {
          delete albums[id];

          res.statusCode = 204;

          return res.end();
        }
      }
    }

    // Get all songs of a specific artist based on artistId
    // GET /artists/:id/songs
    if (req.method === "GET" && req.url.startsWith("/artists")) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 4 && urlParts[3] === "songs") {
        const artistId = Number(urlParts[2]);
        const songsOfArtist = Object.values(songs).filter((song) => {
          const albumId = song.albumId;
          const albumArtistId = albums[albumId].artistId;
          return albumArtistId === artistId;
        });

        const responseBody = JSON.stringify(songsOfArtist);

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        return res.end(responseBody);
      }
    }

    // Get all songs of a specific album based on albumId
    // GET /albums/:id/songs
    if (req.method === "GET" && req.url.startsWith("/albums")) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 4 && urlParts[3] === "songs") {
        const albumId = Number(urlParts[2]);
        const songsOfAlbum = Object.values(songs).filter((song) => {
          return song.albumId === albumId;
        });

        const responseBody = JSON.stringify(songsOfAlbum);

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        return res.end(responseBody);
      }
    }

    // Get all songs of a specified trackNumber
    // GET /tracknumbers/1/songs
    if (req.method === "GET" && req.url.startsWith("/tracknumbers")) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 4 && urlParts[3] === "songs") {
        const trackNumber = Number(urlParts[2]);
        const songsOfTrackNumber = Object.values(songs).filter((song) => {
          return song.trackNumber === trackNumber;
        });

        const responseBody = JSON.stringify(songsOfTrackNumber);

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        return res.end(responseBody);
      }
    }

    // Get a specific song's details based on songId
    // GET /songs/1
    if (req.method === "GET" && req.url.startsWith("/songs")) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        const id = urlParts[2];
        const song = songs[id];
        if (song) {
          const responseBody = JSON.stringify(song);

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");

          return res.end(responseBody);
        }
      }
    }

    // Add a song to a specific album based on albumId
    // POST /albums/:id/songs
    if (req.method === "POST" && req.url.startsWith("/albums")) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 4 && urlParts[3] === "songs") {
        const albumId = Number(urlParts[2]);

        const newSongId = getNewSongId();

        const newSong = {
          name: req.body.name,
          songId: newSongId,
          albumId,
          lyrics: req.body.lyrics || null,
          trackNumber: req.body.trackNumber || null,
        };

        songs[newSongId] = newSong;

        const responseBody = JSON.stringify(newSong);

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        return res.end(responseBody);
      }
    }

    // Edit a specified song by songId
    // PUT/PATCH /songs/:id
    if (
      (req.method === "PUT" || req.method === "PATCH") &&
      req.url.startsWith("/songs")
    ) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        const songId = urlParts[2];
        const song = songs[songId];
        const newSongName = req.body.name;

        if (song && newSongName) {
          song["name"] = newSongName;

          const responseBody = JSON.stringify(song);

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");

          return res.end(responseBody);
        }
      }
    }

    // Delete a specified song by songId
    // DELETE /songs/:id
    if (req.method === "DELETE" && req.url.startsWith("/songs")) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        const id = urlParts[2];
        const song = songs[id];
        if (song) {
          delete songs[id];

          res.statusCode = 204;

          return res.end();
        }
      }
    }

    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.write("Endpoint not found");
    return res.end();
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
