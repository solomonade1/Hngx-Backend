import express from "express"
import { addPerson, deleteSinglePerson, getAllPersons, getSinglePerson, updateSinglePerson } from "../controller/person.controller.js"

const personRouter = express.Router()

personRouter.post("/", addPerson)
personRouter.get("/:user_id", getSinglePerson )
personRouter.put("/:user_id", updateSinglePerson )
personRouter.delete("/:user_id", deleteSinglePerson )
personRouter.get("/persons", getAllPersons )


export default personRouter;