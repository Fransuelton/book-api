const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();
app.use(express.json());

const users = [];

app.post("/users", (request, response) => {
  const { name, email } = request.body;

  users.push({
    name,
    email,
    id: uuid(),
  });

  return response.status(201).json({ message: "OK" });
});

app.listen(3333, () => console.log("Server is running"));
