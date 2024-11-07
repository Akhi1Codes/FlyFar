//Navigation functions
function openNav() {
  document.getElementById("openNav").style.display = "none";
  document.getElementById("closeNav").style.display = "block";
  document.getElementById("navbar").style.display = "block";
}

function closeNav() {
  document.getElementById("openNav").style.display = "block";
  document.getElementById("closeNav").style.display = "none";
  document.getElementById("navbar").style.display = "none";
}
//StartDate
const today = new Date();
today.setDate(today.getDate() + 1);
const startdate = today.toISOString().split("T")[0];
document.getElementById("startdate").setAttribute("min", startdate);

//EndDate
function setEndDate() {
  const startDate = document.getElementById("startdate").value;
  const endDate = document.getElementById("enddate");
  if (startDate) {
    let EndDate = new Date(startDate);
    EndDate.setDate(EndDate.getDate() + 1);
    const futureEndDate = EndDate.toISOString().split("T")[0];
    endDate.setAttribute("min", futureEndDate);
  }
}

function dateValidate() {
  const startDate = document.getElementById("startdate");
  const endDate = document.getElementById("enddate").value;
  if (endDate) {
    startDate.setAttribute("max", endDate);
  }
}

//Book Form Validation
function validateAndSubmit(event) {
  event.preventDefault();
  const locations = document.getElementById("locations").value;
  const capacity = document.getElementById("capacity").value;
  const startDate = document.getElementById("startdate").value;
  const endDate = document.getElementById("enddate").value;
  const description = document.getElementById("description").value;
  const minTextLength = 50;
  if (
    startDate &&
    endDate &&
    locations &&
    capacity &&
    description.length >= minTextLength
  ) {
    alert("Booking Successful!");
  } else {
    alert("Please fill all the fields.");
  }
}

document.getElementById("startdate").addEventListener("change", setEndDate);
document.getElementById("enddate").addEventListener("change", dateValidate);
document.getElementById("submit").addEventListener("click", validateAndSubmit);
// modal script
function registerModal() {
  const rdialog = document.getElementById("registerDialog");
  rdialog.showModal();
}

function loginModal() {
  const ldialog = document.getElementById("loginDialog");
  ldialog.showModal();
}

function closeRegisterModal() {
  const rdialog = document.getElementById("registerDialog");
  rdialog.close();
}

function closeLoginModal() {
  const ldialog = document.getElementById("loginDialog");
  ldialog.close();
}

function redirectToRegister() {
  closeLoginModal();
  registerModal();
}

function redirectToLogin() {
  closeRegisterModal();
  loginModal();
}

function loginValidation(event) {
  event.preventDefault();
  const password = document.getElementById("password").value;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordPattern.test(password)) {
    alert(
      "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    );
  } else {
    alert("Login Successful!");
    closeLoginModal();
  }
}

const currDate = new Date();
const maxDate = new Date(
  currDate.getFullYear() - 18, //18 years+
  currDate.getMonth(),
  currDate.getDate()
);
const maxDatestr = maxDate.toISOString().split("T")[0];
document.getElementById("dob").setAttribute("max", maxDatestr);

function registerValidation(event) {
  event.preventDefault();
  const password = document.getElementById("registerPassword").value;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordPattern.test(password)) {
    alert(
      "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    );
  } else {
    alert("Registration Successful!");
    closeRegisterModal();
  }
}
