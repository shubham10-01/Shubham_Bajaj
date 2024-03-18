const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const PORT = 4000 || process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;
    console.log(data);
    const oddNumbers = data.filter((item) => !isNaN(item) && item % 2 !== 0);
    const evennumbers = data.filter((item) => !isNaN(item) && item % 2 === 0);
    const alphabets = data.map((item) => item.toUpperCase());
    const response = {
      is_success: true,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      odd_numbers: oddNumbers,
      even_numbers: evennumbers,
      alphabets: alphabets,
    };

    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// module.exports = router;
