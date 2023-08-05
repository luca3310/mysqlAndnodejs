import { Request, Response } from "express";
import db from "../db";

export default (req: Request, res: Response) => {
    db.query("SELECT * FROM companies", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  }