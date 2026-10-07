import { genres } from "../data/store.js";

export const getAllGenres = (req, res) => {
    res.status(200).json(genres);
};

export const getGenreById = (req, res) => {
    const genre = genres.find(
        (g) => g.id === Number(req.params.id)
    );

    if (!genre) {
        return res.status(404).json({
            message: "Genre not found"
        });
    }

    res.status(200).json(genre);
};

export const addGenre = (req, res) => {
    const { name, classics } = req.body;

    const newGenre = {
        id: genres.length + 1,
        name,
        classics
    };

    genres.push(newGenre);

    res.status(201).json(newGenre);
};