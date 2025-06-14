document.addEventListener("DOMContentLoaded", function() {
    // Если уже сохранён язык в localStorage, используем его,
    // иначе определяем язык браузера
    let selectedLang = localStorage.getItem("language") || navigator.language || navigator.userLanguage;
    
    // Приводим к нижнему регистру для сравнения
    selectedLang = selectedLang.toLowerCase();
  
    // Пример: если язык начинается с "ru" – переходим на русскую версию,
    // иначе – на английскую.
    if (selectedLang.startsWith("ru")) {
      window.location.href = "/ru/index.html";
    } else {
      window.location.href = "/en/index.html";
    }
  });
  