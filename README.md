# BMI Calculator API

This is a BMI Calculator built using Node.js, Express, and TypeScript. It calculates BMI based on a user’s weight (kg) and height (meters) and classifies the result according to BMI categories.

## Deployment

The API has been deployed to Render and can be accessed using the following endpoint:
[https://bmi-calculator-ztm5.onrender.com]
**Example usage:**

```
GET https://bmi-calculator-ztm5.onrender.com/api/bmi?weight=70&height=1.75
```

**BMI is calculated using the following formula:**

```
BMI = weight / (height * height)
```

- weight: Weight in kilograms
- height: Height in meters

**After the BMI is calculated, it will be classified according to the Standard BMI categories:**

```
< 18.5
Underweight

18.5 - 24.9
Normal weight

25 - 29.9
Overweight

≥ 30
Obese
```

**The API uses GET method for BMI calculation with weight and height as the parameters.**
Endpoint:

```
GET /api/bmi
```

Query Parameters:

```
weight:
- Type: number
- Required: true
height:
- Type: number
- Required: true
```

**Success example:**

```
GET /api/bmi?weight=70&height=1.75
```

Response:

```
{
  "bmi": 22.86,
  "classification": "Normal weight"
}
```

**Bad request:**

```
GET /api/bmi?weight=-70&height=0
```

Response:

```
{
  "error": "Invalid parameters"
}
```

## How to Run Locally

**Clone repo:**

```
git clone bmi
```

**Install dependencies:**

```
npm install
```

**Start the server:**

```
npm start
```

**Run Tests:**

```
npm test
```
