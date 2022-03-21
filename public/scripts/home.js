document.querySelectorAll('div[id^=LINK]').forEach(e => {
    e.addEventListener('click', () => {
        location.href = e.id.substring(4);
    });
});