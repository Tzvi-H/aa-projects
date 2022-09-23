# Get all the artists

- GET /artists

# Get a specific artist's details based on artistId

- GET /artists/:id

# Add an artist

- POST /artists
- Content-Type: applicaion/json

{
"name": "Metallica"
}

# Edit a specified artist by artistId

- PUT/PATCH /artists/:id
- Content-Type: applicaion/json

{
"name": "Metallica"
}

# Delete a specified artist by artistId

- DELETE /artists/:id

# Get all albums of a specific artist based on artistId

- GET /artists/1/albums

# Get a specific album's details based on albumId

- GET /albums/1

# Add an album to a specific artist based on artistId

- POST /artists/:id/albums
- Content-Type: applicaion/json

{
"name": "Greatest Hits 1"
}

# Edit a specified album by albumId

- PUT/PATCH /albums/:id
- Content-Type: applicaion/json

{
"name": "Greatest Hits 1"
}

# Delete a specified album by albumId

- DELETE /albums/:id

# Get all songs of a specific artist based on artistId

- GET /artists/:id/songs

# Get all songs of a specific album based on albumId

- GET /albums/:id/songs

# Get all songs of a specified trackNumber

- GET /tracknumbers/1/songs

# Get a specific song's details based on songId

- GET /songs/1

# Add a song to a specific album based on albumId

- POST /albums/:id/songs
- Content-Type: applicaion/json

{
"name": "Cabron"
}

# Edit a specified song by songId

- PUT/PATCH /songs/:id
- Content-Type: applicaion/json

{
"name": "Cabron"
}

# Delete a specified song by songId

- DELETE /songs/:id
