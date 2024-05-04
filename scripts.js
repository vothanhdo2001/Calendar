document.addEventListener('DOMContentLoaded', function () {
    const now = new Date();
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();

    const calendarMonth = document.querySelector('.header_title');
    const calendarYear = document.querySelector('.header_subtitle');
    const daysContainer = document.querySelector('.days');
    const headerWho = document.querySelector('.header_who');

    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

    const people = [
        { name: "Đô", color: "#C70039" },   // Đỏ tối
        { name: "Toàn", color: "#44CD00" }, // Xanh lá cây tối
        { name: "Song", color: "#3F00FF" }, // Xanh dương tối
        { name: "Trung", color: "#FFD700" },// Vàng kim
        { name: "Long", color: "#FF5733" }, // Hồng tối
        { name: "Nhật", color: "#17A2B8" }  // Xanh ngọc tối
    ];

    function getDayOfYear(year, month, day) {
        return Math.floor((new Date(year, month, day) - new Date(year, 0, 0)) / 86400000);
    }

    function updateHeaderWho() {
        const today = new Date();
        const dayOfYear = getDayOfYear(today.getFullYear(), today.getMonth(), today.getDate());
        const personIndex = Math.floor((dayOfYear / 2) % people.length);
        const person = people[personIndex];
        headerWho.innerHTML = `${today.toLocaleDateString()} ${today.toLocaleTimeString()} - Trực: <span style="color: ${person.color}">${person.name}</span>`;
    }

    function updateCalendar(year, month) {
        calendarMonth.textContent = months[month];
        calendarYear.textContent = year;

        const firstDay = new Date(year, month, 1);
        const firstDayIndex = firstDay.getDay();

        const lastDay = new Date(year, month + 1, 0);
        const lastDayDate = lastDay.getDate();

        daysContainer.innerHTML = '';

        // Thêm các ngày từ tháng trước vào lịch
        const prevMonthLastDay = new Date(year, month, 0);
        const prevMonthDays = prevMonthLastDay.getDate();
        for (let i = 0; i < firstDayIndex; i++) {
            const day = prevMonthDays - firstDayIndex + i + 1;
            const dayElement = document.createElement('div');
            dayElement.classList.add('day-number', 'day-number_disabled');
            dayElement.textContent = day;
            daysContainer.appendChild(dayElement);
        }

        // Thêm ngày của tháng hiện tại
        for (let day = 1; day <= lastDayDate; day++) {
            const dayElement = document.createElement('div');
            const dayNumber = document.createElement('p');
            dayNumber.classList.add('day-number');
            dayNumber.textContent = day;
        
            const dayOfYear = getDayOfYear(year, month, day);
        
            if (dayOfYear % 2 !== 0) {
                const personIndex = Math.floor((dayOfYear / 2) % people.length);
                const person = people[personIndex];
                dayNumber.style.backgroundColor = person.color;
                dayNumber.style.color = 'black';
                dayNumber.style.border = '2px dashed black';
        
                const dayLabel = document.createElement('span');
                dayLabel.classList.add('day-label');
                dayLabel.textContent = ' ' + person.name;
                dayNumber.appendChild(dayLabel);
        
                // Create a checkbox element
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.classList.add('person-checkbox');
                checkbox.id = `checkbox-${day}`;  // Unique ID for each checkbox
                dayLabel.appendChild(checkbox);   // Append the checkbox to the day label
            }
        
            dayElement.appendChild(dayNumber);
        
            if (day === now.getDate() && month === now.getMonth() && year === now.getFullYear()) {
                dayNumber.classList.add('current-day');
            }
            daysContainer.appendChild(dayElement);
        }
        

        // Thêm các ngày của tháng sau
        const daysInNextStartWeek = 7 - lastDay.getDay() - 1;
        for (let i = 1; i <= daysInNextStartWeek; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day-number', 'day-number_disabled');
            dayElement.textContent = i;
            daysContainer.appendChild(dayElement);
        }

        updateHeaderWho(); // Cập nhật header cho người trực hiện tại
    }

    // Sự kiện khi chuyển tháng
    document.getElementById('prev-month').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar(currentYear, currentMonth);
    });

    document.getElementById('current-month').addEventListener('click', () => {
        currentMonth = now.getMonth();
        currentYear = now.getFullYear();
        updateCalendar(currentYear, currentMonth);
    });

    document.getElementById('next-month').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar(currentYear, currentMonth);
    });

    updateCalendar(currentYear, currentMonth); // Khởi tạo lịch lần đầu
    setInterval(updateHeaderWho, 1000); // Cập nhật đồng hồ mỗi giây
});
