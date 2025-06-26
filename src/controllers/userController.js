import { users } from "../data/data.js";
import { v4 as uuidv4 } from "uuid";

export const createUser = (request, response) => {
  const { name, email } = request.body;

  const emailAlreadyExists = users.some((user) => user.email === email);

  if (emailAlreadyExists) {
    return response.status(400).json({ error: "User already exists." });
  }

  users.push({
    name,
    email,
    id: uuidv4(),
  });

  return response.status(201).json({ message: "OK" });
};

export const getUsers = (request, response) => {
  return response.status(200).json(users);
};

export const updateUser = (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  const findUser = users.find((user) => user.id === id);

  findUser.name = name;
  return response.json(users);
};

export const deleteUser = (request, response) => {
  const { id } = request.params;

  const user = users.findIndex((user) => user.id === id);

  if (!user) {
    return response.status(400).json("User not found");
  }

  users.splice(user, 1);

  return response.json(users);
};
