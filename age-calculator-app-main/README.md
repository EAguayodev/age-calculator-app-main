# Frontend Mentor - Age calculator app solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

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

- Solution URL: https://github.com/EAguayodev/age-calculator-app-main
- Live Site URL: https://age-calculator-app-main-chi.vercel.app/

## My process
My process was to first create the html and css, then add the javascript to make the form work. I started out by creating the html structure for placing the input fields and labels, placing the submit button and the hr element. Then I styled the html elements with css, adding the fonts and colors. From there, added javascript to make the form work, adding the event listener to the submit button, and then adding the logic to calculate the age and display it in the DOM.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanilla JavaScript
- Flexbox
- Desktop-first workflow


### What I learned
I learned how to use the Date object in javascript to calculate the age, and how to use the getDate() method to get the day of the month, the getMonth() method to get the month, and the getFullYear() method to get the year. I also learned how to use the placeholder selector in css to style the placeholder text in the input fields. Also, I learned how to use the textContent property to display the age in the DOM.

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

Areas I want to focus on:
- Learn more about the Date object in JavaScript.
- Continue to improve my skills with javascript.
- Improve my css skills.
- Continue to complete the challenges on frontendmentor which require Javascript.
### Useful resources

- https://www.w3schools.com/cssref/sel_placeholder.php - I went to w3schools to learn about the placeholder selector, and to see how to style it and resize accoridng to the figma design.
- https://www.geeksforgeeks.org/how-to-align-placeholder-text-in-html/ - This is an amazing article which helped me finally understand the approach to align the placeholder text in the input fields, and target them fore error styling using javascript.

## Author

- Website - [Eric Aguayo](https://www.ericaguayo.com)
- Frontend Mentor - [@EAguayodev](https://www.frontendmentor.io/profile/EAguayodev)