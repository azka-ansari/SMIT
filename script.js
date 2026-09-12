const country = document.getElementById("country");
const classPreference = document.getElementById("classPreference");
const gender = document.getElementById("gender");
const city = document.getElementById("city");
const course = document.getElementById("course");
const campus = document.getElementById("campus");

classPreference.disabled = true;
gender.disabled = true;
city.disabled = true;
course.disabled = true;
campus.disabled = true;

country.addEventListener("change", function () {
    if (country.selectedIndex != 0) {
        classPreference.disabled = false;
        country.classList.remove("error");
    }
});

classPreference.addEventListener("change", function () {
    if (classPreference.selectedIndex != 0) {
        gender.disabled = false;
        classPreference.classList.remove("error");
    }
});

gender.addEventListener("change", function () {
    if (gender.selectedIndex != 0) {
        city.disabled = false;
        gender.classList.remove("error");
    }
});

city.addEventListener("change", function () {
    if (city.selectedIndex != 0) {
        course.disabled = false;
        city.classList.remove("error");
    }
});

course.addEventListener("change", function () {
    if (course.selectedIndex != 0) {
        campus.disabled = false;
        course.classList.remove("error");
    }
});

campus.addEventListener("change", function () {
    if (campus.selectedIndex != 0) {
        campus.classList.remove("error");
    }
});

document.getElementById("registrationForm").addEventListener("submit", function (e) {

    const fields = [
        country,
        classPreference,
        gender,
        city,
        course,
        campus
    ];

    for (let field of fields) {

        if (field.selectedIndex === 0) {

            e.preventDefault();

            field.classList.add("error");
            field.focus();

            return;
        }
    }
});

const registrationForm = document.getElementById("registrationForm");

const requiredFields = [
    document.getElementById("country"),
    document.getElementById("classPreference"),
    document.getElementById("gender"),
    document.getElementById("city"),
    document.getElementById("course"),
    document.getElementById("fullName"),
    document.getElementById("fatherName"),
    document.getElementById("dateOfBirth"),
    document.getElementById("email"),
    document.getElementById("phone"),
    document.getElementById("fatherPhone"),
    document.getElementById("cnic"),
    document.getElementById("fatherCnic"),
    document.getElementById("address"),
    document.getElementById("computerProficiency"),
    document.getElementById("lastQualification"),
    document.getElementById("hearAboutUs")
];

registrationForm.addEventListener("submit", function (e) {

    for (let field of requiredFields) {

        if (
            field.value.trim() === "" ||
            (field.tagName === "SELECT" && field.selectedIndex === 0)
        ) {

            e.preventDefault();

            field.classList.add("error");
            field.focus();

            return;
        }

        field.classList.remove("error");
    }

    if (address.value.trim().length < 10) {

        e.preventDefault();

        address.classList.add("error");
        address.focus();

        return;
    }
});

requiredFields.forEach(function (field) {

    field.addEventListener("input", function () {
        if (field.value.trim() !== "") {
            field.classList.remove("error");
        }
    });

    field.addEventListener("change", function () {
        if (field.selectedIndex !== 0) {
            field.classList.remove("error");
        }
    });

});