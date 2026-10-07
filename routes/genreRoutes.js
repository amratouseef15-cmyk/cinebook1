import express from "express";

import {
    getAllGenres,
    getGenreById,
    addGenre
} from "../controllers/genreController.js";

const router = express.Router();

router.get("/", getAllGenres);
router.get("/:id", getGenreById);
router.post("/", addGenre);

export default router;