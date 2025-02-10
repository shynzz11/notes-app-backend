const express = require('express');
const router = express.Router();
const Note = require('../models/note');
const Validate = require('../middlewares/validate');
const authMiddleware = require("../middlewares/authorize");

router.get("/", authMiddleware, async (req, res) => {
    try {
        const notes = await Note.find({ author: req.user.name });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});


router.post("/", authMiddleware, async (req, res) => {
    try {
        const { title, description } = req.body;

        const newNote = new Note({
            title,
            description,
            author: req.user.name 
        });

        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.delete("/:title", authMiddleware, async (req, res) => {
    try {
        const deletedNote = await Note.findOneAndDelete({
            title: req.params.title,
            author: req.user.name 
        });

        if (!deletedNote) {
            return res.status(403).json({ message: "Unauthorized: You can only delete your own notes." });
        }

        res.json({ message: "Note deleted successfully", deletedNote });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
});



module.exports = router;

