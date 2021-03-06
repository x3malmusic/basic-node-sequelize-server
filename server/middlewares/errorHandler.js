import error from "../helpers/errors";
import { UNKNOWN_ERROR } from "../helpers/errors";

export const errorHandler = (err, req, res, next) => {
  if (error[err]) {
    res.status(error[err].status).send(error[err].message);
  } else {
    res.status(error[UNKNOWN_ERROR].status).send(error[UNKNOWN_ERROR].message);
    console.log(err);
  }
};
