const categoryList = document.getElementById('category-list');
const plantsContainer = document.getElementById('plant-container');


const loadCategory = () =>{
    const url = `https://openapi.programming-hero.com/api/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        loadCategoryDataShow(data.categories);
        
    })
}

const loadCategoryDataShow = categories =>{
    categoryList.innerHTML = `<li onclick="loadAllPlants()" class="bg-[#15803D] text-white p-2 rounded-lg  font-medium">All Trees</li>`;

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
            // loadPlantsByCategory(e.target.id);
            loadPlantsByCategory(e.target.id ? e.target.id : '' );
        }
    })
    
}

const loadAllPlants = () =>{
    const url = `https://openapi.programming-hero.com/api/plants`
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        // console.log(data.plants);
        
        loadAllPlantsShow(data.plants);
        
        
    })
}

const loadAllPlantsShow =(data) =>{
    plantsContainer.innerHTML ='';
    data.forEach(plant =>{
        plantsContainer.innerHTML +=`
            <div class="bg-white p-4 rounded-xl">
                    <!-- <img src="" alt=""> -->
                    <img class="rounded-xl h-[300px] w-full" src="${plant.image}" alt="">

                    <div class="py-3">
                        <h2 class="font-semibold">${plant.name}</h2>
                        <p class="py-2  text-sm opacity-70">
                            ${plant.description}
                        </p>

                        <div class="flex justify-between items-center">
                            <p class="bg-[#dcfce7] py-2 px-5 rounded-full text-[#15803D] text-sm font-semibold">${plant.category
}</p>
                            <h2 class="text-sm font-semibold">৳ <span> ${plant.price
} </span> </h2>
                        </div>

                    </div>

                    

                    <div>
                        <button class="btn border-none bg-[#15803d] rounded-full text-white w-full">Add to Cart</button>
                    </div>

                </div>
        `
    })
    

}

const loadPlantsByCategory = (id) =>{
    const url =`https://openapi.programming-hero.com/api/category/${id}`;

    fetch(url)
    .then(res => res.json())
    .then(data =>{
        loadedPlantsShow(data.plants);
    })
}

const loadedPlantsShow = (plants) =>{
    
    plantsContainer.innerHTML = '';
    if(plants === undefined){
        loadAllPlants();
        return
    }

    plants.forEach(plant =>{
        plantsContainer.innerHTML += `
            <div class="bg-white p-4 rounded-xl">
                    <!-- <img src="" alt=""> -->
                    <img class="rounded-xl h-[300px] w-full" src="${plant.image}" alt="">

                    <div class="py-3">
                        <h2 class="font-semibold">${plant.name}</h2>
                        <p class="py-2  text-sm opacity-70">
                            ${plant.description}
                        </p>

                        <div class="flex justify-between items-center">
                            <p class="bg-[#dcfce7] py-2 px-5 rounded-full text-[#15803D] text-sm font-semibold">${plant.category
}</p>
                            <h2 class="text-sm font-semibold">৳ <span> ${plant.price
} </span> </h2>
                        </div>

                    </div>

                    

                    <div>
                        <button class="btn border-none bg-[#15803d] rounded-full text-white w-full">Add to Cart</button>
                    </div>

                </div>
        `
        
    })
    
}


loadCategory();
loadAllPlants();