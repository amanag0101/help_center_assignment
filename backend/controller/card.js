import { RESPONSE_CODE } from "../constants/response-code.js";
import { Card } from "../models/Card.js";
import { response } from "../utils/response.js";

export const getAllCards = async (_, res) => {
  try {
    console.log("Recived request to get all the cards...");

    const cards = await Card.findAll();

    return res.status(RESPONSE_CODE.OK).json(response(true, "Success", cards));
  } catch (error) {
    console.error(`Failed to get all the cards : ${error}`);

    return res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).json(
      response(false, "Internal Server Error", {
        msg: "Failed to get all the cards.",
      })
    );
  }
};

export const getCardByTitle = async (req, res) => {
  try {
    const { title } = req.params;

    console.log("Recived request to get card by title: " + title);

    const card = await Card.findOne({ where: { title } });

    if (card)
      return res.status(RESPONSE_CODE.OK).json(response(true, "Success", card));
    else
      return res.status(RESPONSE_CODE.NOT_FOUND).json(
        response(true, "Bad Request", {
          msg: "No card present with the title: " + title,
        })
      );
  } catch (error) {
    console.error(`Failed to get card by title : ${error}`);

    return res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).json(
      response(false, "Internal Server Error", {
        msg: "Failed to get card with title.",
      })
    );
  }
};

export const createCard = async (req, res) => {
  try {
    console.log(
      "Received request to create a card: " + JSON.stringify(req.body)
    );

    const { title, description } = req.body;

    const card = await Card.create({ title, description });

    return res
      .status(RESPONSE_CODE.CREATED)
      .json(response(true, "Card created successfully!", card));
  } catch (error) {
    console.error("Failed to create a new card: " + error);

    if (error.name === "SequelizeValidationError") {
      const validationErrors = error.errors.map((err) => err.message);
      return res
        .status(RESPONSE_CODE.BAD_REQUEST)
        .json(response(false, "Validation error", { msg: validationErrors }));
    } else if ((error.name = "SequelizeUniqueConstraintError")) {
      return res.status(RESPONSE_CODE.BAD_REQUEST).json(
        response(false, "Validation error", {
          msg: "A card with the same title is already created!s",
        })
      );
    }

    return res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).json(
      response(false, "Internal Server Error", {
        msg: "Failed to create a new card!",
      })
    );
  }
};
