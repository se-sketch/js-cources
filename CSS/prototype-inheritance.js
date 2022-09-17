'use strict';

let animal = {
    eat : true,
}

console.log(animal);

let rabbit = {
    jump : true,
    __proto__ : animal,
}

console.log(rabbit);

for(let prop in rabbit){
    let isOwn = rabbit.hasOwnProperty(prop);
    if (isOwn){
        console.log('own : '+prop);
    }else{
        console.log('inherieted : '+prop);
    }
}

console.log(Object.keys(rabbit));

console.log(Object.values(rabbit));

//--------------

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__ : head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__ : table,
};

let pockets = {
  money: 2000,
  __proto__ : bed,
};

console.log(pockets.pen);

console.log(bed.glasses);

//------------------------

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
    //this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// Этот хомяк нашёл еду
speedy.eat("apple");
speedy.eat("banana");
console.log( 'speedy : ' + speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log('lazy : ' + lazy.stomach ); // apple
