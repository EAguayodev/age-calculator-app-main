document
  .getElementById("age-calculator")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input elements and their values
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    const day = parseInt(dayInput.value.trim(), 10);
    const month = parseInt(monthInput.value.trim(), 10);
    const year = parseInt(yearInput.value.trim(), 10);

    // Get the error message elements
    const dayError = dayInput.nextElementSibling;
    const monthError = monthInput.nextElementSibling;
    const yearError = yearInput.nextElementSibling;

    // Clear previous error messages and styles
    dayError.textContent = "";
    monthError.textContent = "";
    yearError.textContent = "";
    dayInput.style.borderColor = "";
    monthInput.style.borderColor = "";
    yearInput.style.borderColor = "";
    dayInput.previousElementSibling.style.color = "";
    monthInput.previousElementSibling.style.color = "";
    yearInput.previousElementSibling.style.color = "";

    // Track whether the form has errors
    let hasErrors = false;

    // Current date for validation
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-based
    const currentDay = currentDate.getDate();

    // Validate day input
    if (!day) {
      dayError.textContent = "This field is required.";
      applyErrorStyles(dayInput, dayError);
      hasErrors = true;
    } else if (isNaN(day) || day < 1 || day > 31) {
      dayError.textContent = "Must be a valid day.";
      applyErrorStyles(dayInput, dayError);
      hasErrors = true;
    }

    // Validate month input
    if (!month) {
      monthError.textContent = "This field is required.";
      applyErrorStyles(monthInput, monthError);
      hasErrors = true;
    } else if (isNaN(month) || month < 1 || month > 12) {
      monthError.textContent = "Must be a valid month.";
      applyErrorStyles(monthInput, monthError);
      hasErrors = true;
    }

    // Validate year input
    if (!year) {
      yearError.textContent = "This field is required.";
      applyErrorStyles(yearInput, yearError);
      hasErrors = true;
    } else if (isNaN(year) || year > currentYear) {
      yearError.textContent = "Must be in the past.";
      applyErrorStyles(yearInput, yearError);
      hasErrors = true;
    }

    // Validate the entire date (e.g., no 31st of April)
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

    if (!hasErrors) {
      // Calculate age
      let ageYears = currentYear - year;
      let ageMonths = currentMonth - month;
      let ageDays = currentDay - day;

      // Adjust for negative month or day
      if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentYear, currentMonth - 1, 0).getDate(); // Days in the previous month
      }

      if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
      }

      // Display the result
      document.getElementById("years").textContent = ageYears;
      document.getElementById("months").textContent = ageMonths;
      document.getElementById("days").textContent = ageDays;
    }
  });

// Function to apply error styles
function applyErrorStyles(input, errorElement) {
  input.style.borderColor = "hsl(0, 100%, 67%)";
  input.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
  errorElement.style.color = "hsl(0, 100%, 67%)";
}