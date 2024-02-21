const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();
app.use(express.json());

const users = [];

app.post("/users", (request, response) => {
  const { name, email } = request.body;

  const emailAlreadyExists = users.some((user) => user.email === email);

  if (emailAlreadyExists) {
    return response.status(400).json({ error: "User already exists." });
  }

  users.push({
    name,
    email,
    id: uuid(),
  });

  return response.status(201).json({ message: "OK" });
});

app.get("/getUsers", (request, response) => {
  return response.status(200).json(users);
});

app.listen(3333, () => console.log("Server is running"));
