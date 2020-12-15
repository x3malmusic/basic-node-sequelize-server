import { asyncHandler } from "../middlewares/async";
import { User } from "../models/User";

export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.findAll();

  res.send(users);
});

export const getUserData = asyncHandler(async (req, res) => {
  const { email } = req.user;
  const user = await User.findOne({ where: { email } });

  res.send(user);
});

export const editUser = asyncHandler(async (req, res) => {
  const { email } = req.user;
  const { name = "", lastName = "" } = req.body;
  await User.update({ name: name, lastName: lastName }, { where: { email } })

  res.status(200).send()
});

export const deleteUser = asyncHandler(async (req, res) => {
  const { email } = req.user;
  await User.destroy({ where: { email } });

  res.status(200).send();
});
