const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Pipeline Working 🚀");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

module.exports = app;