import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "Hello" });
});

router.use(express.json());
router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});

export default router;
