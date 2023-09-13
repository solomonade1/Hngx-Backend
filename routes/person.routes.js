import express from "express"
import { addPerson, deleteSinglePerson, getAllPersons, getSinglePerson, updateSinglePerson } from "../controller/person.controller.js"

const personRouter = express.Router()

personRouter.post("/person", addPerson)
personRouter.get("/person/:user_id", getSinglePerson )
personRouter.put("/person/:user_id", updateSinglePerson )
personRouter.delete("/person/:user_id", deleteSinglePerson )
personRouter.get("/persons", getAllPersons )


export default personRouter;