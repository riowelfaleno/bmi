import express from "express";
import { Request, Response } from "express";

const app: express.Application = express();
const port = 3000;

app.use(express.json());

function classifyBMI(bmi: number) {
  if (bmi < 18.5) return "Underweight";
  if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
  if (bmi >= 25 && bmi < 29.9) return "Overweight";
  return "Obese";
}

app.get("/api/bmi", (req: Request, res: Response) => {
  const weight = Number(req.query.weight as string);
  const height = Number(req.query.height as string);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    return res.status(400).json({ error: "Invalid parameters" });
  }

  const bmi = weight / (height * height);
  res.json({
    bmi: parseFloat(bmi.toFixed(2)),
    classification: classifyBMI(bmi),
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export { app };
