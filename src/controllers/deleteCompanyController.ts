import { Request, Response } from "express";
import db from "../db";

export default (req: Request, res: Response) => {
    const { id } = req.body;
    var sql = `DELETE FROM companies WHERE id = '${id}'`;
    db.query(sql, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  }