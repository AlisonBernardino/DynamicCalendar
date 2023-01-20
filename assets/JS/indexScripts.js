const daysItem = document.querySelector(".daysElement");
const exactDate = document.querySelector(".currentDate");
const previousNextIcon = document.querySelectorAll(".iconsArea span");

// To grab a "new date", "current year" and "month" data
let date = new Date();
currentYear = date.getFullYear();
currentMonth = date.getMonth();

// To share the months full name inside a vector
const validMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCurrentCalendar = () => {
    // To grab the 1st day of the month
    let monthFirstDay = new Date(currentYear, currentMonth, 1).getDay();
    let lastMonthDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    let lastMonthDay = new Date(currentYear, currentMonth, lastMonthDate).getDay();
    let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    let liTagItem = "";

    for (let index = monthFirstDay; index > 0; index--) {
        liTagItem += `<li class="inactive">${lastDateOfLastMonth - index + 1}</li>`;
    }

    for (let index = 1; index <= lastMonthDate; index++) {
        // To add an active class to "li" item when the current day, month and year are compatible
        let isTodayDate = index === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
        liTagItem += `<li class="${isTodayDate}">${index}</li>`;
    }

    // To create a "List item [li]" of first days [next month]
    for (let index = lastMonthDay; index < 6; index++) {
        liTagItem += `<li class="inactive"> ${index - lastMonthDay + 1}</li>`
    }
    exactDate.innerText = `${validMonths[currentMonth]} ${currentYear}`;
    daysItem.innerHTML = liTagItem;
}
renderCurrentCalendar();

previousNextIcon.forEach(icon => { // Grabbing "Previous" and "Next" icons
    icon.addEventListener("click", () => { // Inserting "Click" event on "Previous" and "Next" icons
        currentMonth = icon.id == "previous" ? currentMonth - 1 : currentMonth + 1;
        if (currentMonth < 0 || currentMonth > 11) {
            date = new Date(currentYear, currentMonth, newDate().getDate());
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCurrentCalendar();
    });
});