const categoryList = document.getElementById('category-list');
// const categoryListForMobile = document.getElementById('category-listForMobile');

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

    categories.forEach(category =>{
        
        categoryList.innerHTML += `
            <li id="${category.id}" class="hover:bg-[#15803D] hover:text-white p-2 rounded-lg  font-medium">${category.category_name}</li>
        
        `
    })


    categoryList.addEventListener('click',e =>{
        
        const allLi = document.querySelectorAll('#category-list li');
        
        allLi.forEach(li =>{
            li.classList.remove('bg-[#15803D]');
            li.classList.remove('text-white');
        })

        if(e.target.localName === 'li'){
            e.target.classList.add('bg-[#15803D]');
            e.target.classList.add('text-white');
            console.log(e.target.id);
        }
        
    })
    

    
}


loadCategory();