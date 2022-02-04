import { Request, Response, NextFunction } from "express";
import Leave from "../models/leaves";
import jwtConfig from "../common/jwtConfig";

import { collections } from "../services/database.service";

// getting user leave
const getUserLeave = async (req: Request, res: Response) => {
  const { username } = req.params;

  try {
    const query = { username: username };
    const employeeLeaves = (await collections.leaves
      ?.find(query)
      .toArray()) as unknown as Leave[];
    if (employeeLeaves == null) res.status(401).send({ status: "failed" });
    res.send({ employeeLeaves, status: "success" });
  } catch (error) {
    return res.status(401).send({ status: "failed" });
  }
};

// creating user leave
const addUserLeave = async (req: Request, res: Response) => {
  const { date, type, notes } = req.body;

  try {
    if (req.headers && req.headers.authorization) {
      let user: any;
      user = jwtConfig.decodeJwt(req.headers.authorization.split(" ")[1]);
      const leave = {
        username: user.username,
        date: date,
        type: type,
        notes: notes,
        dateCreated: new Date().getTime(),
        dateUpdated: new Date().getTime(),
      };
      const result = await collections.leaves?.insertOne(leave);
      result
        ? res.send({
            message: `Successfully created a new leave with id ${result.insertedId}`,
            status: "success",
          })
        : res.status(500).send({
            message: "Failed to create a new leave.",
            status: "failed",
          });
    }
    return res.status(401).send({ message: "no token found!" });
  } catch (error) {
    console.error(error);
    res.status(400).send({ status: "failed" });
  }
};

export default { getUserLeave, addUserLeave };
