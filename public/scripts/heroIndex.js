document.querySelectorAll('div[id^=HERO]').forEach(e => {
    e.addEventListener('click', () => {
        location.href = `heroes?index=${e.id.substring(4)}`;
    });
});