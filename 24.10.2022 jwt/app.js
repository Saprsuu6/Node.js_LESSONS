import express from "express";
import jwt from "jsonwebtoken";

const app = express();
const PORT = 3000;
const TOKEN_SECRET_KEY =
  "1e3e2522ed3ec2ad5d350ad83db74023ed03e0ab67171d35106ef42a7eb0f3856e6d6031c8bddf8eeaa7c925d41f73798fea6d8e1f349f589669571d8323b09f";

const user = [
  {
    login: "John",
    title: "I'm John",
  },
  {
    login: "Vasya",
    title: "I'm Vasya",
  },
];

function authToken(req, res, next) {
  const authHeader = req.header["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);

  if (token === null) {
    res.sendStatus(401);
  } else {
    jwt.verify(token, TOKEN_SECRET_KEY, (err, user) => {
      if (err) throw err;
      req.user = user;
    });
  }

  next();
}

app.use(express.json());

app.get("/user", authToken, (req, res) => {
  res.json(users.filter((item) => item.login === req.user));
});

app.post("/login", (req, res) => {
  const user = req.body.username;
  console.log(user);
  const access = jwt.sign(user, TOKEN_SECRET_KEY);
  res.json({ accessToken: access });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
