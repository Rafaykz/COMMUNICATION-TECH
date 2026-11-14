document.addEventListener("DOMContentLoaded", () => {
  const yearElements = document.querySelectorAll(".current-year");

  yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const demoForms = document.querySelectorAll("form[data-demo-form]");

  demoForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const alertBox = form.querySelector(".form-alert");

      if (alertBox) {
        alertBox.classList.remove("d-none");
        alertBox.textContent = "This is a demonstration form and does not send messages. Please contact us using the phone number or email listed on this page.";
      }
    });
  });
});
