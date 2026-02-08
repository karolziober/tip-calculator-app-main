# Tip Calculator App

A responsive tip calculator that splits the bill and tip amount between any number of people. Built as a solution to the [Frontend Mentor Tip Calculator App challenge](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).

![App Preview](./preview.jpg)

## Features

- **Tip Percentage Selection** - Choose from preset tip percentages (5%, 10%, 15%, 25%, 50%) or enter a custom value
- **Bill Splitting** - Calculate tip amount and total per person
- **Input Validation** - Error messages for invalid inputs (values less than or equal to 0)
- **Responsive Design** - Optimized layouts for mobile, tablet, and desktop
- **Reset Functionality** - Clear all inputs and results with a single button

## Demo

**Live Site:** [https://karolziober.github.io/tip-calculator-app-main/](https://karolziober.github.io/tip-calculator-app-main/)

## Tech Stack

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+ Classes)

## Project Structure

```
tip-calculator-app-main/
├── images/              # Icons (dollar, person, logo) and favicon
├── design/              # Original design files
├── index.html           # Main HTML file
├── style.css            # Stylesheet with CSS custom properties
├── main.js              # Tip calculator logic
├── style-guide.md       # Frontend Mentor style guide
└── preview.jpg          # Project preview image
```

## Key Implementation Details

### CSS Architecture

- CSS custom properties for consistent theming and typography
- Mobile-first responsive design with breakpoints at 765px and 1440px
- CSS Grid for tip button layout and desktop two-column layout
- Space Mono monospace font throughout

### JavaScript

- Object-oriented approach using a self-initializing `TipCalculator` class
- Real-time calculation on input changes
- Event delegation for tip button selection
- Input validation with visual error feedback

## Author

- GitHub - [@karolziober](https://github.com/karolziober)
- Frontend Mentor - [@karolziober](https://www.frontendmentor.io/profile/karolziober)

## Acknowledgments

Challenge provided by [Frontend Mentor](https://www.frontendmentor.io).
