// calendar tracker
document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar-body");
    const monthYear = document.getElementById("month-year");
    const prevBtn = document.getElementById("prev-month");
    const nextBtn = document.getElementById("next-month");

    let currentDate = new Date();

    function generateCalendar(date) {
        calendar.innerHTML = "";
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        
        monthYear.textContent = date.toLocaleString("id-ID", { month: "long", year: "numeric" });

        let row = document.createElement("tr");
        for (let i = 0; i < firstDay; i++) {
            let cell = document.createElement("td");
            cell.classList.add("disabled");
            row.appendChild(cell);
        }

        for (let day = 1; day <= lastDate; day++) {
            let cell = document.createElement("td");
            cell.textContent = day;
            let today = new Date();
            if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                cell.classList.add("highlight-today");
            }
            row.appendChild(cell);
            if ((firstDay + day) % 7 === 0 || day === lastDate) {
                calendar.appendChild(row);
                row = document.createElement("tr");
            }
        }
    }

    generateCalendar(currentDate);

    prevBtn.addEventListener("click", function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate);
    });

    nextBtn.addEventListener("click", function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate);
    });
});