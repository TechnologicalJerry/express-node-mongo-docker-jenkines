import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    console.log("Received a request at the root path");
    res.json({ message: "Hello from Node.js + Docker + Jenkins!" });
});

export default router;
