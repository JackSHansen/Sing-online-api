import express from "express";
import dotenv from 'dotenv';
import { SongController } from "./Controllers/song.controller.js";
import { AlbumController } from "./Controllers/album.controller.js";
import { ArtistController } from "./Controllers/artist.controller.js";

const app = express();

dotenv.config();

const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("Velkommen til SingOnline sangbog");
})

app.use(SongController, AlbumController, ArtistController);

app.use((req, res) => {
  res.status(404).send("Siden blev ikke fundet");
});

app.listen(port, () => {
  console.log(`Webserver is running on http://localhost:${port}`);
});