const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const getCardById = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "./cards.json"));
    const stats = JSON.parse(data);
    const match = stats.find((card) => card.Id === Number(req.params.id));
    if (!match) {
      const err = new Error(
        "No card matches " +
          req.params.id +
          " please choose an id numbered 0 through 76."
      );
      err.status = 404;
      throw err;
    }
    res.json(match);
  } catch (e) {
    next(e);
  }
};

const getCardsBySuit = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "./cards.json"));
    const stats = JSON.parse(data);
    const upperedSuit = text
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
    const match = stats.find((card) => card.Suit === upperedSuit);
    if (!match) {
      const err = new Error(
        "No suit matches input: " +
          upperedSuit +
          " please choose either wands, pentacles, swords, or cups."
      );
      err.status = 404;
      throw err;
    }
    res.json(match);
  } catch (e) {
    next(e);
  }
};

const getAllCards = async (res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "./cards.json"));
    const stats = JSON.parse(data);
    res.json(stats);
  } catch (e) {
    next(e);
  }
};

const getAllShuffledCards = async (res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "./cards.json"));
    const stats = JSON.parse(data);
    const shuffledCards = shuffle(stats);
    res.json(shuffledCards);
  } catch (e) {
    next(e);
  }
};

const getNumShuffledCards = async (req, res, next) => {
  if (req.params.num != NaN && req.params.num >= 0 && req.params.num <= 76) {
    try {
      const data = fs.readFileSync(path.join(__dirname, "./cards.json"));
      const stats = JSON.parse(data);
      const shuffledCards = shuffle(stats).slice(0, req.params.num);
      res.json(shuffledCards);
    } catch (e) {
      next(e);
    }
  } else {
    const err = new Error(
      "Card id is out of bounds. Please choose any number of cards between 0 and 76."
    );
    err.status = 404;
    throw err;
  }
};

const createCard = async (req, res, next) => {
  try {
    const data = fs.readFileSync(statsFilePath);
    const stats = JSON.parse(data);
    const newStats = {
      id: req.body.Id,
      name: req.body.Name,
      suit: req.body.Suit,
      value: req.body.Value,
      major: req.body.Major,
      minor: req.body.Minor,
      uprightdef: req.body.UprightDef,
      reversedef: req.body.ReverseDef,
    };
    stats.push(newStats);
    fs.writeFileSync(statsFilePath, JSON.stringify(stats));
    res.status(201).json(newStats);
  } catch (e) {
    next(e);
  }
};

const updateCard = async (req, res, next) => {
  try {
    const data = fs.readFileSync(statsFilePath);
    const stats = JSON.parse(data);
    const cardStats = stats.find((card) => card.Id === Number(req.params.id));
    if (!cardStats) {
      const err = new Error("Card stats not found");
      err.status = 404;
      throw err;
    }
    const newCardData = {
      id: req.body.Id,
      name: req.body.Name,
      suit: req.body.Suit,
      value: req.body.Value,
      major: req.body.Major,
      minor: req.body.Minor,
      uprightdef: req.body.UprightDef,
      reversedef: req.body.ReverseDef,
    };
    const newStats = stats.map((card) => {
      if (card.Id === Number(req.params.Id)) {
        return newStatsData;
      } else {
        return card;
      }
    });
    fs.writeFileSync(statsFilePath, JSON.stringify(newStats));
    res.status(200).json(newCardData);
  } catch (e) {
    next(e);
  }
};

const deleteCard = async (req, res, next) => {
  try {
    const data = fs.readFileSync(statsFilePath);
    const stats = JSON.parse(data);
    const cardStats = stats.find((card) => card.Id === Number(req.params.id));
    if (!cardStats) {
      const err = new Error("Card stats not found");
      err.status = 404;
      throw err;
    }
    const newStats = stats
      .map((card) => {
        if (card.Id === Number(req.params.Id)) {
          return null;
        } else {
          return card;
        }
      })
      .filter((card) => card !== null);
    fs.writeFileSync(statsFilePath, JSON.stringify(newStats));
    res.status(200).end();
  } catch (e) {
    next(e);
  }
};

router
  .get("/api/v1/cards/:id", getCardById)
  .get("/api/v1/cards/:suit", getCardsBySuit)
  .get("/api/v1/cardsShuffled/:num", getNumShuffledCards)
  .get("/api/v1/cards", getAllCards)
  .get("/api/v1/cardsShuffled", getAllShuffledCards)
  .put("/api/v1/cards/:id", updateCard)
  .post("/api/v1/cards/:id", createCard)
  .delete("/api/v1/cards/:id", deleteCard);

module.exports = router;
