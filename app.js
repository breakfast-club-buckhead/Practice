const addDishes = document.querySelector('.addedDish');
const savedDishes = document.querySelector('.ourDishes');
const dishes  = JSON.parse(localStorage.getItem('dish')) || [];

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

}

function populateDish(writtenDishes = [], displayedDishes){
    displayedDishes.innerHTML = writtenDishes.map((dish, i) => {
        console.log(dish,dish.dishText.value, i);
        return `
          <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${dish.done ? 'checked' : ''} />
            <label for="item${i}">${dish.dishText}</label>
          </li>
        `;
      }).join('');
}

function toggleDone(e){
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    dishes[index].done = !dishes[index].done;
    populateDish(dishes, savedDishes);
    localStorage.setItem('dishes', JSON.stringify(dishes));
  }



  addDishes.addEventListener('submit', addDish);
  savedDishes.addEventListener('click', toggleDone);
  populateDish(dishes, savedDishes);
