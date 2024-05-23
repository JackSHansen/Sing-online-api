import express  from 'express';
import artistModel from '../Models/artist.model.js';
export const ArtistController = express.Router();

ArtistController.get('/artists', async (req, res) => {
    const data = await artistModel.getAllArtists()
    res.send(data);
});

ArtistController.get('/artists/:id', async (req, res) => {
    const { id } = req.params;
    const data = await artistModel.getSingleArtist(id)
    res.send(data);
});

ArtistController.post('/artists', async (req, res) => {
    const data = await artistModel.createArtist(req.body);
    res.send(data);
})

ArtistController.put("/artists", async (req, res) => {
    const data = await artistModel.updateArtist(req.body);
    res.send(data);
});

ArtistController.delete("/artists", async (req, res) => {
    const data = await artistModel.deleteArtist(req.body);
    console.log("Artist deleted");
    res.send(data);
})