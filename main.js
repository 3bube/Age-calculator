function calculateAge() {
  const birthDay = parseInt(document.querySelector(".js-day").value, 10);
  const birthMonth =
    parseInt(document.querySelector(".js-month").value, 10) - 1; // Months are 0-indexed in JavaScript
  const birthYear = parseInt(document.querySelector(".js-year").value, 10);
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  let errorMessage1 = document.querySelector(".js-error-message");
  let errorMessage2 = document.querySelector(".js-error-message2");
  let errorMessage3 = document.querySelector(".js-error-message3");
  let inputELement1 = document.querySelector(".js-day");
  let inputELement2 = document.querySelector(".js-month");
  let inputELement3 = document.querySelector(".js-year");

  if (isNaN(birthDay) || isNaN(birthMonth) || isNaN(birthYear)) {
    errorMessage1.classList.add('error');
    errorMessage2.classList.add('error');
    errorMessage3.classList.add('error');
    errorMessage1.innerHTML = 'All fields are required';
    errorMessage2.innerHTML = 'All fields are required';
    errorMessage3.innerHTML = 'All fields are required';
    inputELement1.classList.add("error-input");
    inputELement2.classList.add("error-input");
    inputELement3.classList.add("error-input");
  } else {
    inputELement1.classList.remove("error-input");
    inputELement2.classList.remove("error-input");
    inputELement3.classList.remove("error-input");
    errorMessage1.classList.remove("error");
    errorMessage2.classList.remove("error");
    errorMessage3.classList.remove("error");
    errorMessage1.innerHTML = "";
    errorMessage2.innerHTML = "";
    errorMessage3.innerHTML = "";

    const age = currentYear - birthYear;

    const adjustedAge =
      age -
      (birthMonth > currentMonth ||
      (birthMonth === currentMonth && birthDay > currentDay)
        ? 1
        : 0);

    const remainingMonths = currentMonth - birthMonth;
    const adjustedMonths =
      remainingMonths < 0
        ? 12 + remainingMonths
        : birthDay > currentDay
        ? remainingMonths - 1
        : remainingMonths;

    const remainingDays = currentDay - birthDay;
    const daysAgo = remainingDays < 0 ? 30 + remainingDays : remainingDays;
    document.querySelector(".year-result").innerHTML = adjustedAge;
    document.querySelector(".month-result").innerHTML = adjustedMonths;
    document.querySelector(".days-result").innerHTML = daysAgo;
  }
}
