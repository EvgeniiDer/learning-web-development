function setupThemeSwitcher() {
    const themeInput = document.getElementById('themeInput');
    const themeButton = document.getElementById('themeButton');
    const bodyElement = document.body;

    themeButton.addEventListener('click', function() {
        const seconds = parseFloat(themeInput.value);
        const duration = (isNaN(seconds) || seconds < 0) ? 1 : seconds;
        bodyElement.style.setProperty('--theme-transition-duration', `${duration}s`);
        bodyElement.classList.toggle('dark-mode');
    });
    const themeForm = document.getElementById('themeSwitcherForm');
    themeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        themeButton.click(); 
    });
}

function setupTimeDisplay() { 
    const timeElement = document.getElementById('currentTime');
    const dateElement = document.getElementById('currentDate');
    const dayOfWeekElement = document.getElementById('currentDayOfWeek');

    const showDateCheckbox = document.getElementById('showDateCheckbox');
    const showDayOfWeekCheckbox = document.getElementById('showDayOfWeekCheckbox');

    const dateContainer = document.getElementById('currentDateContainer');
    const dayOfWeekContainer = document.getElementById('currentDayOfWeekContainer');

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday'];

    function updateTime() {
        const now = new Date(); 
        timeElement.textContent = now.toLocaleTimeString('ru-RU');
        dateElement.textContent = now.toLocaleDateString('ru-RU');
        dayOfWeekElement.textContent = days[now.getDay()];
    }
    showDateCheckbox.addEventListener('change', function() {
        if (this.checked) {
            dateContainer.classList.remove('hidden');
        } else {
            dateContainer.classList.add('hidden');
        }
    });
    showDayOfWeekCheckbox.addEventListener('change', function() {
        if (this.checked) {
            dayOfWeekContainer.classList.remove('hidden');
        } else {
            dayOfWeekContainer.classList.add('hidden');
        }
    });
    setInterval(updateTime, 1000);
    updateTime();
}
function setupFileInput(fileInputId, outputElementId, previewImageId) {
    const fileInput = document.getElementById(fileInputId);
    const fileNameElement = document.getElementById(outputElementId);
    const imagePreview = document.getElementById(previewImageId);

    if (fileInput && fileNameElement && imagePreview) {
        
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) {
                fileNameElement.textContent = '';
                imagePreview.src = '';
                imagePreview.style.display = 'none';
                return;
            }
            if (file.type.startsWith('image/')) {//mime тип
                const reader = new FileReader();               
                reader.readAsDataURL(file);
                reader.addEventListener('load', event=> { //Хендлер или CallBack function безымянная аналог что я писал в проекте boost.asio
                    imagePreview.src = event.target.result;// после загрузки сработают методы в безымянной функции
                    imagePreview.style.display = 'block';
                }); 
                fileNameElement.textContent = `Selected file: ${file.name}`;

            } else {
                fileNameElement.textContent = 'Error select another file  (.jpg, .png).';
                imagePreview.src = '';
                imagePreview.style.display = 'none';
            }
        });

    } else {
        console.error("Could not find all the necessary elements (input, output, or preview).");
    }
}
function setupMouseTracker()
{
    const coordXElement = document.getElementById('coordX');
    const coordYElement = document.getElementById('coordY');

    function updateCoordinates(event)
    {
        const x = event.clientX;
        const y = event.clientY;

        coordXElement.textContent = x;
        coordYElement.textContent = y;
    }
    window.addEventListener('mousemove', updateCoordinates);
}
function setupPowerCalculator() {
    const baseInput = document.getElementById('base');
    const exponentInput = document.getElementById('exponent');
    const resultElement = document.getElementById('powerResult');
    function calculatePower() {
        const base = parseFloat(baseInput.value);
        const exponent = parseFloat(exponentInput.value);
        if (isNaN(base) || isNaN(exponent)) {
            resultElement.textContent = '...';
            return; 
        }
        const result = base ** exponent;
        resultElement.textContent = result;
    }
    baseInput.addEventListener('input', calculatePower);
    exponentInput.addEventListener('input', calculatePower);
}

document.addEventListener('DOMContentLoaded', function() {
    setupFileInput('file', 'fileName', 'imagePreview');
    setupPowerCalculator();
    setupMouseTracker();   
    setupTimeDisplay();
    setupThemeSwitcher();
});