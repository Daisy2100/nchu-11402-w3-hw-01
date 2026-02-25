function initClock() {
    const timeEl = document.getElementById('time');
    const dateEl = document.getElementById('date');

    function update() {
        const now = new Date();
        
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        timeEl.textContent = `${h}:${m}:${s}`;
        
        const yyyy = now.getFullYear();
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const dd = String(now.getDate()).padStart(2, '0');
        dateEl.textContent = `${yyyy}.${mm}.${dd}`;
    }

    update();
    setInterval(update, 1000);
}

document.addEventListener('DOMContentLoaded', initClock);
