const express = require('express');
const router = express.Router();
const Note = require('../models/note');
const validate = require('../middlewares/validate');
const Validate = require('../middlewares/validate');

router.get('/', async (req, res) => {
    try{
        const notes = await Note.find();
        res.json(notes);
    } catch (error){
        res.status(500).json({message: error.message});
    }
});

router.get('/:author', async (req, res) => {
    try{
        const notes = await Note.find({author: req.params.author});
        if(notes.length == 0){
            res.status(404).json({message: 'Note not found for this author'});
        }
        res.json(notes);
    } catch (error){
        res.status(500).json({message: error.message});
    }
});

router.post('/', Validate , async (req, res) => {
    try{
        const title = req.body.title;
        const author = req.body.author;
        const description = req.body.description;
        const newNote = new Note({
            title,
            author,
            description
        });

        await newNote.save();
        res.status(201).json(newNote);
    } catch (error){
        res.status(400).json({message: error.message});
    }
});

router.delete('/:title', async (req, res) => {
    try{
        const note = await Note.findOneAndDelete({title: req.params.title});
        if(!note){
            res.status(404).json({message: 'Note not found'});
        }
        res.json({message: 'Note deleted successfully'});
    } catch (error){
        res.status(500).json({message: error.message});
    }
});



module.exports = router;

