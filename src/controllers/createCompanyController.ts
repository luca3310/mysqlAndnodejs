import { Request, Response } from "express";
import db from "../db";

export default (req: Request, res: Response) => {
    const { name, address, id } = req.body;
    const sql = `INSERT INTO companies (name, address, id) VALUES ('${name}', '${address}', '${id}')`;
    db.query(sql, function (err, result) {
      if (err) throw err;
    });
    res.json("succesful");
  }