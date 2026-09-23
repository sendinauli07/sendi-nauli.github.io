document.getElementById('year').textContent = new Date().getFullYear();

// mobile menu toggle
const burger = document.getElementById('burger');
const navlinks = document.getElementById('navlinks');
if(burger){
  burger.addEventListener('click', () => navlinks.classList.toggle('open'));
  navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navlinks.classList.remove('open')));
}

// mark active nav link
(function markActiveNav(){
  const file = (location.pathname.split('/').pop() || 'index.html');
  const aliasedFile = file.startsWith('log-artikel') ? 'log.html' : file;
  const current = aliasedFile + location.hash;
  navlinks.querySelectorAll('a').forEach(a => {
    const href = a.getAttribute('href');
    const isPlainMatch = href === aliasedFile && !href.includes('#');
    const isHashMatch = href === current;
    if(isPlainMatch || isHashMatch) a.classList.add('active');
  });
})();

// theme toggle (dark / light) — disimpan di memori sesi saja
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
const sunPath = '<path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/><circle cx="12" cy="12" r="4.5"/>';
const moonPath = '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>';
if(themeBtn){
  themeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeIcon.innerHTML = isDark ? moonPath : sunPath;
  });
}
