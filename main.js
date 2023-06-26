const calendarContainer = document.querySelector('.calendar');
const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


// Create calendar table
const table = document.createElement('table');
table.classList.add("table", "table-inverse", "text-center");

const getYearAndMonth = (year, month) => {
  const yearAndMonth = document.querySelector('.yearAndMonth')
  yearAndMonth.innerHTML = year + " " + month
  
}

const createCalendar = (year, month) => {
  const firstDay = new Date(year, month, 1); 
  const startingDay = firstDay.getDay(); 
  const daysInMonth = new Date(year, month + 1, 0).getDate(); 
  createThead()
  const tbody = document.createElement('tbody');
  let date = 1;
  
  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    
    for (let j = 0; j < 7; j++) {
      
      if (i === 0 && j < startingDay) {
        const cell = document.createElement('td');
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        break;
      } else {
        const cell = document.createElement('td');
        cell.innerHTML = date;
        row.appendChild(cell);

        if (date == currentDate.getDate()) {
          cell.classList.add('bg-info')
        }
        date++;
      }
    }

    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  calendarContainer.appendChild(table);

}

const createThead = () => {
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  for (let i = 0; i < daysOfWeek.length; i++) {
    const th = document.createElement('th');
    th.innerHTML = daysOfWeek[i];
    headerRow.appendChild(th);
  }

  thead.appendChild(headerRow);
  table.appendChild(thead);
}

const createTbody = () => {
  
}

getYearAndMonth(currentYear, monthNames[currentMonth])
createCalendar(currentYear, currentMonth)

