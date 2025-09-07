const categoryList = document.getElementById('category-list');
const categoryListForMobile = document.getElementById('category-listForMobile');

const loadCategory = () =>{
    const url = `https://openapi.programming-hero.com/api/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        loadCategoryDataShow(data.categories);
        
    })
}

const loadCategoryDataShow = categories =>{
    categoryList.innerHTML = '';
    categoryListForMobile.innerHTML = '';

    categories.forEach(category =>{
        
        categoryList.innerHTML += `
            <li class="hover:bg-[#15803D] hover:text-white p-2 rounded-lg  font-medium">${category.category_name}</li>
        
        `
    })

    categories.forEach(category =>{
        categoryListForMobile.innerHTML += `
            <button class="btn btn-outline btn-success font-semibold lesson-btn">${category.category_name}</button>
        `
    })
    
}


loadCategory();