import express  from 'express';
import SongModel from '../Models/song.model.js';
export const SongController = express.Router();

SongController.get('/songs', async (req, res) => {
    const data = await SongModel.getAllRecords()
    res.send(data);
});

SongController.get('/songs/:id', async (req, res) => {
    const { id } = req.params;
    const data = await SongModel.getRecordById(id)
    res.send(data);
});

SongController.post('/songs', async (req, res) => {
    const data = await SongModel.createRecord(req.body)
    res.send(data);
});

SongController.put("/songs", async (req ,res) => {
    const data = await SongModel.updateRecord(req.body)
    res.send(data);
});

SongController.delete("/songs", async (req, res) => {
    const data = await SongModel.deleteRecord(req.body)
    console.log("Song deleted");
    res.send(data);
});