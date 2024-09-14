var form = document.getElementById('resumeform');
var resumedisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
//hundle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var username = document.getElementById('username').value;
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var number = document.getElementById('number').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    //
    // Save form data in localStorage with the username as the key
    var resumeData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        address: address,
        number: number,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    //
    // Generate the resume content
    var resumeHTML = "\n        <h2>Shareable Resume</h2>\n        <h3>Personal information</h3>\n        <p><b>First Name:</b><span contenteditale=\"true\">".concat(firstname, "</span></P>\n        <p><b>Last Name:</b><span contenteditale=\"true\">").concat(lastname, "</span></p>\n        <p><b>Email:</b><span contenteditale=\"true\">").concat(email, "</span></p>\n        <p><b>Address:</b><span contenteditale=\"true\">").concat(address, "</span></p>\n        <p><b>Number:</b><span contenteditale=\"true\">").concat(number, "</span></p>\n        <h3>Education</h3>\n        <p contenteditale=\"true\">").concat(education, "</p>\n        <h3>Skills</h3>\n        <p contenteditale=\"true\">").concat(skills, "</p>\n        <h3>Experience</h3>\n        <p contenteditale=\"true\">").concat(experience, "</p>\n        ");
    //
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element are missing');
    }
    // Display the generated resume
    resumedisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to saveas PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('firstname').value =
                resumeData.firstname;
            document.getElementById('lastname').value =
                resumeData.lastname;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('address').value =
                resumeData.address;
            document.getElementById('number').value =
                resumeData.number;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value;
            resumeData.skills;
        }
    }
});
