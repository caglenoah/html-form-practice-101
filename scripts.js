const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
    placeForResults.append(`${name} : ${value}`)
    placeForResults.append(document.createElement("br"))
})
// Define the checkBirthday function using arrow function syntax
const checkBirthday = () => {
  // Get today's date and format it as "YYYY-MM-DD"
    const today = new Date().toISOString().slice(0, 10);
  // Get the birthdate entered by the user
    const birthdate = document.getElementById("birthdate").value;
      // Compare the birthdate with today's date and display a message
    if (birthdate === today) {
        document.getElementById("message").textContent = "Happy birthday!";
        else {
        document.getElementById("message").textContent = "have a great day!";
        }
}
}
