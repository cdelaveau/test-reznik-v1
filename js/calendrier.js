let dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
let monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

let firstDay = new Date(year, month, 1).getDay();
let daysInMonth = 32 - new Date(year, month, 32).getDate();

let calendarDiv = document.getElementById("calendar");
let calendarHTML = "<table class='table'><tr>";

for (let i = 0; i < dayNames.length; i++) {
  calendarHTML += "<th>" + dayNames[i] + "</th>";
}

calendarHTML += "</tr><tr>";
for (let i = 0; i < 7; i++) {
  if (i < firstDay) {
    calendarHTML += "<td></td>";
  } else {
    calendarHTML += "<td>" + (i - firstDay + 1) + "</td>";
  }
}

let day = 8 - firstDay;
for (let i = 0; i < Math.ceil((daysInMonth + firstDay - 6) / 7); i++) {
  calendarHTML += "</tr><tr>";
  for (let j = 0; j < 7; j++) {
    if (day <= daysInMonth) {
      calendarHTML += "<td>" + day + "</td>";
      day++;
    } else {
      calendarHTML += "<td></td>";
    }
  }
}

calendarHTML += "</tr></table>";
calendarDiv.innerHTML = calendarHTML;
