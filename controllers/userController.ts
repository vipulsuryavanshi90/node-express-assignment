import { Request, Response } from 'express';
import { addUser, getUserByEmail, getUserByUsername } from '../models/db';
import { userSchema } from '../utils/userValidation';
import { comparePassword, hashPassword } from '../services/userService';
import { UserEntry } from '../models/userEntryModel';

export const registerUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    console.log(error);
    return res.status(400).send(error.details[0].message);
  }
  const { username, email, type, password } = req.body;
  if (getUserByUsername(username)) {
    return res.send('Username Already Exist');
  }
  if (getUserByEmail(email)) {
    return res.send('Email Already Exist');
  }
  const { salt, passwordhash } = await hashPassword(password);
  const newUserEntry: UserEntry = { email, type, salt, passwordhash };
  addUser(username, newUserEntry);

  return res.send('User Registered Successfully');
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  const user = await getUserByUsername(username);
  if (!user) {
    return res.status(401).send('Invalid credentials.');
  }
  const isPasswordCorrect = await comparePassword(password, user.passwordhash);
  if (!isPasswordCorrect) {
    return res.status(401).send('Invalid credentials.');
  }
  return res.send('Login Successfull');
};

