const addDishes = document.querySelector('.addedDish');
const savedDishes = document.querySelector('.ourDishes');
const dishes  = JSON.parse(localStorage.getItem('dishes')) || [];
const searchDish = document.querySelector('.search');


//Add a dish
function addDish(e){
    e.preventDefault();
    const dishText  = (this.querySelector('[name=dish]')).value;
    const dishIngredientText = (this.querySelector('[name=dish_ingredient]')).value;
    const dish = { dishText, 
                   dishIngredientText,
                    done: false
                };
    dishes.push(dish);
    populateDish(dishes, savedDishes);
    localStorage.setItem('dishes', JSON.stringify(dishes));
    this.reset();
}

//Remove a dish
function deleteDish(e){
  e.preventDefault();
  const el = e.target;
  const index = el.dataset.index;
  if(dishes[index].done = !dishes[index].done){
    dishes.splice(index, 1)
  };
  populateDish(dishes, savedDishes);
}

//Edit dish name && ingredients
function editDish(){
  // <br/>
  // <button data-index${i} class="edit">✍🏾</button>
}


//show dishes added ~> Looped over
function populateDish(writtenDishes = [], displayedDishes){
    displayedDishes.innerHTML = writtenDishes.map((dish, i) => {
        return `
          <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${dish.done ? 'checked' : ''} />
            <label for="item${i}">${dish.dishText} => ingredients: ${dish.dishIngredientText}</label>
            <button data-index=${i} class="delete">🗑️</button>
          </li>
        `;
      }).join('');
}

// Toggles to show the dish done
function toggleDone(e){ 
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    dishes[index].done = !dishes[index].done;
    localStorage.setItem('dishes', JSON.stringify(dishes));
    populateDish(dishes, savedDishes);

  }

function findMeals() {
  // store meals already created
  const storedMeal = dishes;
  // convert input to array && lowerCased
  // other implementation
  const searchVal = [oil, flour]
  // declare result variable ... an array
  // dishes.forEach(dish => {
  //   if(dish.dishIngredientText.)
  // });
  // for eachIngredient given, search each dishes ingredients and push dishText to result variable if true
  // remove duplicates from results, convert to string and return
}

// create a clickHandler what handles click on item
function clickHandler(e){
  if(e.target.matches('label')){
    return toggleDone.call(this,e);
  }else if(e.target.matches('.delete')){
   return deleteDish.call(this, e);
  }
}


addDishes.addEventListener('submit', addDish);
savedDishes.addEventListener('click', clickHandler);
populateDish(dishes, savedDishes);
