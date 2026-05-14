import exp from "express";
import { empModel } from "../models/empModel.js";
export const empApp = exp.Router();

//Create emp
empApp.post("/emp", async (req, res) => {
  const newEmp = req.body;
  const empDoc = new empModel(newEmp);
  await empDoc.save();
  res.status(201).json({ message: "Emp created" });
});
//Read all emps
empApp.get("/emp", async (req, res) => {
  let empList = await empModel.find();
  res.status(200).json({ message: "list of emps", payload: empList });
});
//Update emp id
empApp.put("/emp/:id", async (req, res) => {
  const modifiedEmp = req.body;
  //find and update
  let updatedEmp = await empModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: { ...modifiedEmp },
    },
    { returnDocument: "after" },
  );
  if (!updatedEmp) {
    return res.status(404).json({ message: "emp not found" });
  }
  res.status(200).json({ message: "employee updated", payload: updatedEmp });
});

//Delete emp by id
empApp.delete("/emp/:id", async (req, res) => {
  let deletedEmp = await empModel.findByIdAndDelete(req.params.id);
  if (!deletedEmp) {
    return res.status(404).json({ message: "emp not found" });
  }
  res.status(200).json({ message: "employee deleted", payload: deletedEmp });
});