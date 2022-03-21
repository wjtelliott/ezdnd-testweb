document.querySelectorAll('div[id^=LOCATION]').forEach(e => {
    e.addEventListener('click', () => {
        location.href = `locations?index=${e.id.substring(8)}`;
    });
});