const addDishes = document.querySelector('.addedDish');
const savedDishes = document.querySelector('.ourDishes');
const dishes  = JSON.parse(localStorage.getItem('dishes')) || [];

function addDish(e){
    e.preventDefault();
    const dishText  = (this.querySelector('[name=dish]')).value;
    const dish = { dishText, 
                    done: false
                };
    dishes.push(dish);
    populateDish(dishes, savedDishes);
    localStorage.setItem('dishes', JSON.stringify(dishes));
    this.reset();
}

function deleteDish(e){
  e.preventDefault();
 console.log("0");
  //find index of dish && splice(index, 1) || ensure index != -1
  // set items dishes in local storage
  // onClick of pot, strike through and change style to italic && bold
  // remove from localstorage
}

function populateDish(writtenDishes = [], displayedDishes){
    displayedDishes.innerHTML = writtenDishes.map((dish, i) => {
        return `
          <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${dish.done ? 'checked' : ''} />
            <label for="item${i}">${dish.dishText}</label>
            <button data-index=${i} class="delete">🗑️</button>
          </li>
        `;
      }).join('');
}

function toggleDone(e){ 
    if(!e.target.matches('input')) return;
    console.log("1");
    const el = e.target;
    const index = el.dataset.index;
    dishes[index].done = !dishes[index].done;
    localStorage.setItem('dishes', JSON.stringify(dishes));
    populateDish(dishes, savedDishes);

  }

function clickHandler(e){

  if(e.target.matches('label')){
    return toggleDone.call(this,e);
  }else if(e.target.matches('button')){
   return deleteDish.call(this, e);
  }
}


addDishes.addEventListener('submit', addDish);
savedDishes.addEventListener('click', clickHandler);
// console.log(localStorage.getItem("dishes"));
populateDish(dishes, savedDishes);
