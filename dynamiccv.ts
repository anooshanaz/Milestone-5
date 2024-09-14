
const form=document.getElementById('resumeform') as HTMLFormElement
const resumedisplayElement = document.getElementById('resume-display') as HTMLDivElement

const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement

//hundle form submission
form.addEventListener('submit',(event: Event)=>{
    event.preventDefault()//prevent page reload
    //collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const firstname=(document.getElementById('firstname') as HTMLInputElement).value
    const lastname=(document.getElementById('lastname') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const address=(document.getElementById('address') as HTMLInputElement).value
    const number=(document.getElementById('number') as HTMLInputElement).value
    const education=(document.getElementById('education') as HTMLTextAreaElement).value
    const skills=(document.getElementById('skills') as HTMLTextAreaElement).value
    const experience=(document.getElementById('experience') as HTMLTextAreaElement).value
    //
    // Save form data in localStorage with the username as the key
const resumeData = {
    firstname,
    lastname,
    email,
    address,
    number,
    education,
    experience,
    skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    //
    // Generate the resume content
    const resumeHTML= `
        <h2>Shareable Resume</h2>
        <h3>Personal information</h3>
        <p><b>First Name:</b><span contenteditale="true">${firstname}</span></P>
        <p><b>Last Name:</b><span contenteditale="true">${lastname}</span></p>
        <p><b>Email:</b><span contenteditale="true">${email}</span></p>
        <p><b>Address:</b><span contenteditale="true">${address}</span></p>
        <p><b>Number:</b><span contenteditale="true">${number}</span></p>
        <h3>Education</h3>
        <p contenteditale="true">${education}</p>
        <h3>Skills</h3>
        <p contenteditale="true">${skills}</p>
        <h3>Experience</h3>
        <p contenteditale="true">${experience}</p>
        `
        //
        if(resumedisplayElement){
            resumedisplayElement.innerHTML = resumeHTML
        }else{
            console.error('The resume display element are missing')
        }

        // Display the generated resume
resumedisplayElement.innerHTML = resumeHTML;
// Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to saveas PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

if (username) {

    // Autofill form if data is found in localStorage
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
    const resumeData = JSON.parse(savedResumeData);
    (document.getElementById('username') as HTMLInputElement).value =
    username;
    (document.getElementById('firstname') as HTMLInputElement).value =
    resumeData.firstname;
    (document.getElementById('lastname') as HTMLInputElement).value =
    resumeData.lastname;
    (document.getElementById('email') as HTMLInputElement).value =
    resumeData.email;
    (document.getElementById('address') as HTMLInputElement).value =
    resumeData.address;
    (document.getElementById('number') as HTMLInputElement).value =
    resumeData.number;
    (document.getElementById('education') as HTMLTextAreaElement).value =
    resumeData.education;
    (document.getElementById('experience') as HTMLTextAreaElement).value
    = resumeData.experience;
    (document.getElementById('skills') as HTMLTextAreaElement).value
    resumeData.skills;
}
}
})





    

    

        



