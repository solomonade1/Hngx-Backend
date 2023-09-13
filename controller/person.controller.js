import Person from "../models/Person.model.js";
import { createError } from "../utils/createError.js";

// Create endpoint to add a new person
export const addPerson = async (req, res, next) => {
  try {
    const { name, username, email } = req.body;
    const foundPerson = await Person.findOne({ username, email });
    if (foundPerson) {
      return next(createError(400, "username already exist!!!"));
    }

    const person = new Person({ name, username, email });
    await person.save();
    res.json(person);
  } catch (error) {
    next(error);
  }
};

export const getSinglePerson = async (req, res, next) => {
  try {
    const person = await Person.findById(req.params.user_id);
    if (!person) {
      return next(createError(404, "Person Not Found!!!"));
    }
    res.status(200).json(person);
  } catch (error) {
    next(error);
  }
};

export const updateSinglePerson = async (req, res, next) => {
  try {
    const { name, username, email } = req.body;
    const person = await Person.findByIdAndUpdate(
      req.params.user_id,
      { name, username, email },
      { new: true }
    );
    if (!person) {
      return next(createError(404, "Person not Found!!!"));
    }
    res.status(200).json(person);
  } catch (error) {
    next(error);
  }
};

export const deleteSinglePerson = async (req, res, next) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.user_id);
    if (!person) {
      return next(createError(404, "Person Not Found!!!"));
    }
    res.status(200).json({
      message: "Person has been deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
