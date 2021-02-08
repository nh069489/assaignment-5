
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(res => res.json())
  .then(data => displayFoods(data));

  const displayFoods = foods =>{
      const mealContainer = document.getElementById('meal-item');
      const newCategory = foods.categories;
      for (let i = 0; i < newCategory.length; i++) {
          const food = newCategory[i];
          const foodDiv = document.createElement('div');
          foodDiv.className = 'food-menu';

        //   const mealDiv1 = document.createElement('div');
        //   const mealDiv2 = document.createElement('div');
        const mealInfo = `
        <img id="picture" src="${food.strCategoryThumb}">
        <h3>${food.strCategory}</h3>
        <button id="show-details"> Show Details</button >

        `
        foodDiv.innerHTML = mealInfo;
        mealContainer.appendChild(foodDiv);

      }
      
   }
   
   

