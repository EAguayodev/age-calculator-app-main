# Frontend Mentor - Age calculator app solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted


### Links

- Solution URL: https://your-solution-url.com
- Live Site URL: https://age-calculator-app-main-chi.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanilla JavaScript
- Flexbox
- Desktop-first workflow



### What I learned


```html
<div class="input-group">
  <label for="day">Day</label>
  <input class="submissions" type="text" id="day" name="day" placeholder="DD">
  <small class="error-text"></small>
</div>
```
```css
.submissions::placeholder{
    color: var(--smokey-grey);
    font-weight: 700;
    font-size: 1.5rem;
}
```
```js
 if (day && month && year && !hasErrors) {
      const date = new Date(year, month - 1, day); // JavaScript months are 0-based
      if (
        date.getDate() != day ||
        date.getMonth() + 1 != month ||
        date.getFullYear() != year
      ) {
        dayError.textContent = "Must be a valid date.";
        monthError.textContent = "Must be a valid date.";
        yearError.textContent = "Must be a valid date.";
        applyErrorStyles(dayInput, dayError);
        applyErrorStyles(monthInput, monthError);
        applyErrorStyles(yearInput, yearError);
        hasErrors = true;
      }
    }
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- https://www.w3schools.com/cssref/sel_placeholder.php - I went to w3schools to learn about the placeholder selector, and to see how to style it and resize accoridng to the figma design.
- https://www.geeksforgeeks.org/how-to-align-placeholder-text-in-html/ - This is an amazing article which helped me finally understand the approach to align the placeholder text in the input fields, and target them fore error styling using javascript.

## Author

- Website - [Eric Aguayo](https://www.ericaguayo.com)
- Frontend Mentor - [@EAguayodev](https://www.frontendmentor.io/profile/EAguayodev)