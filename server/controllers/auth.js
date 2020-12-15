import { asyncHandler } from "../middlewares/async";
import { User } from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

import {
  USER_EXIST,
  USER_NOT_FOUND,
  USER_NOT_VERIFIED,
  WRONG_EMAIL_PASSWORD,
  WRONG_VERIFICATION_CODE,
} from "../helpers/errors";

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email }});
  if (!user) {
    return next(USER_NOT_FOUND);
  }

  // if (!user.emailConfirmed) {
  //   return next(USER_NOT_VERIFIED);
  // }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return next(WRONG_EMAIL_PASSWORD);
  }

  const token = jwt.sign({ email, userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  res.send({ token });
});

export const register = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(errors.array()[0].msg);
  }

  const { email, password, name = "", lastName = "" } = req.body;
  const candidate = await User.findOne({ where: { email }});
  if (candidate) {
    return next(USER_EXIST);
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    email,
    password: hashedPassword,
    name: name,
    lastName: lastName
  });

  res.status(200).send(user);
});
