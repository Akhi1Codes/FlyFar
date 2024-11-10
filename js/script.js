const loginDetails = [
  {
    email: "test1@gmail.com",
    password: "Text@1234",
  },
];

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

// Set min attribute for end date based on start date
function setEndDate() {
  const startDateElement = document.getElementById("startdate");
  const endDateElement = document.getElementById("enddate");

  const startDateValue = startDateElement.value;
  if (startDateValue) {
    const endDateMin = new Date(startDateValue);
    endDateMin.setDate(endDateMin.getDate() + 1);
    const endDateMinString = endDateMin.toISOString().split("T")[0];

    endDateElement.setAttribute("min", endDateMinString);
  }
}

function dateValidate() {
  const startDateElement = document.getElementById("startdate");
  const endDateValue = document.getElementById("enddate").value;

  if (endDateValue) {
    startDateElement.setAttribute("max", endDateValue);
  }
}

// Book Form Validation
function validateAndSubmit(event) {
  event.preventDefault();

  const location = document.getElementById("locations").value;
  const capacity = document.getElementById("capacity").value;
  const startDate = document.getElementById("startdate").value;
  const endDate = document.getElementById("enddate").value;
  const description = document.getElementById("description").value;
  const minTextLength = 50;

  const isValid =
    startDate &&
    endDate &&
    location &&
    capacity &&
    description.length >= minTextLength;

  if (isValid) {
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

function validateLogin(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  let loginemail = loginDetails.find((details) => details.email === email);
  const password = document.getElementById("password").value;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    );
    return;
  }
  console.log(email);
  console.log(loginemail);
  if (email == loginemail?.email && password == loginemail?.password) {
    alert("Login Successful!");
    closeLoginModal();
  } else {
    alert("Wrong Email or Password! Try again");
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

function validateRegisterForm(event) {
  event.preventDefault();
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    );
    return;
  } else {
    loginDetails.push({ email: email, password: password });
    console.log(loginDetails);
    alert("Registration Successful!");
  }
  closeRegisterModal();
}
