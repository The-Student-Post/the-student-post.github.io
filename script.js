var themeSelects = document.querySelectorAll('.theme-select');
var themeSelector = document.getElementById('theme-selector');
var themeSlctrBtn = document.getElementById('theme-icon');
var textCenterCtr = document.getElementById('center-toggle')
var textCenterBtn = document.getElementById('center-icon');
var mainContent = document.getElementById('main-content');
var sidebar = document.getElementById('sidebar');
var sidebarCloseBtn = document.getElementById('sidebar-close-btn');
var sidebarToggleBtn = document.getElementById('sidebar-toggle');

themeSelects.forEach(ts => {
      ts.addEventListener('click', () => {
            var targetTheme = ts.id;
            renderTheme(targetTheme);
            ts.classList.add("active")
      })
})

themeSlctrBtn.addEventListener('click', () => {
    themeSelector.classList.toggle("active");
});

textCenterBtn.addEventListener('click', () => {
      textCenterCtr.classList.toggle("active");
      mainContent.classList.toggle('center');
      updateContentMaxWidth();
})

sidebarCloseBtn.addEventListener('click', () => {
      sidebar.classList.add("collapsed");
      sidebarToggleBtn.classList.remove("active");
})

sidebarToggleBtn.addEventListener('click', () => {
      sidebarToggleBtn.classList.toggle("active");
      sidebar.classList.toggle("collapsed", !sidebarToggleBtn.classList.contains("active"))
})

const resizeObserver = new ResizeObserver(() => {
    updateContentMaxWidth();
});

resizeObserver.observe(mainContent.parentElement);

function renderTheme(theme) {
      document.documentElement.dataset.theme = theme
      themeSelects.forEach(ts => {
            if (ts.id !== theme) {
                  ts.classList.remove("active");
            }
      })
}

function updateContentMaxWidth() {
     if (mainContent.classList.contains("center")) {
            const idealWidth = (3 * mainContent.parentElement.clientWidth)/5;
            if (idealWidth >= 450 && idealWidth <= 800) {
                  mainContent.style.maxWidth = `${idealWidth}px`;
            }
      } else {
            mainContent.style.maxWidth = 'unset'
      } 
}