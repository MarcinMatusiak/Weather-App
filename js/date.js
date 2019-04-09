function getFullDate(n=0) {
    const date = new Date();
    date.setDate(date.getDate() + n);
    const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    return `${days[date.getDay()]}, ${getShortDate(n)}`;
}

function getShortDate(n=0) {
    const date = new Date();
    date.setDate(date.getDate() + n);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${(day.toString()).padStart(2, '0')}.${(month.toString()).padStart(2, '0')}.${year}`
}

function getCurrentHour() {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    return `${hour} : ${minutes}`;
}

export { getFullDate, getShortDate, getCurrentHour };