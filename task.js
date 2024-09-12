let tab = Array.from(document.querySelectorAll(".tab")); 
let tabContent = Array.from(document.querySelectorAll(".tab__content"));

tab.forEach((item) => {
  
  item.addEventListener("click", () => { // Добавление события на каждую кнопку
    
    tab.forEach((item) => { // Обнуление классов для всех вкладок и контента
      item.classList.remove("tab_active");
    });
    
    tabContent.forEach(item => {
      item.classList.remove("tab__content_active");
    });
    
    index = tab.indexOf(item); 
    item.className = "tab tab_active";
    tabContent[index].classList.add("tab__content_active"); // Смена активной вкладки и контента
  });

});
