import { users } from "../data/data.js";

export function verifyUser(request, response, next) {
  const { email } = request.headers;

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (!emailAlreadyExists) {
    return response.status(400).json({ error: "User not found" });
  }

  request.user = emailAlreadyExists;

  return next();
}
