// {{name}} controller
import { Request, Response, NextFunction } from "express";

import { {{camelCase name}}Process } from "../../process/entity/{{camelCase name}}.process";

export const {{camelCase name}}Controller = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const value = await {{camelCase name}}Process(req);
    return res.status(200).send(value);
  } catch(e) {
    if (!e.status) return next(e);
    return res.status(e.status).send(e.body);
  }
};
