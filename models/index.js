import mongoose from "mongoose";
import GradeModel from "./grades.js";

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.gradeModel = GradeModel(mongoose);

export { db };

console.log(db);
