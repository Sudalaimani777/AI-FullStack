import {model} from "mongoose";
import CRUDSchema from "../schema/crud.schema.js";

const CRUD_Model = model("crud-model", CRUDSchema)

export default CRUD_Model;