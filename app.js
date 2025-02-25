const add__form = document.querySelector('#add__form');
const search__input = document.querySelector('#search__input');
const todosList = document.querySelector('#note__list');

let noteCount = 1; // Eslatma raqamlarini avtomatik oshirish uchun

add__form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const noteText = search__input.value.trim();
    if (noteText === "") return; // Bo‘sh ma’lumot qo‘shilmasligi uchun

    const listItem = document.createElement('li');
    listItem.classList.add('w-full', 'py-[16px]', 'border-b-[2px]', 'border-[#6C63FF]', 'flex', 'items-center', 'justify-between');

    listItem.innerHTML = `
        <input type="checkbox" class="w-[26px] h-[26px] rounded-[5px] border-[2px] border-[#6C63FF] uzgacha">
        <p class="w-[84%] text-[20px]">${noteText} #<span>${noteCount}</span></p>
        <button class="delete-btn">
            <img src="./images/trash-svgrepo-com 1.svg" alt="Delete" class="w-[20px] h-[20px]">
        </button>
    `;

    todosList.appendChild(listItem);
    search__input.value = "";
    noteCount++;

    // O'chirish tugmasi ishlashi uchun
    listItem.querySelector('.delete-btn').addEventListener('click', () => {
        listItem.remove();
    });
});
