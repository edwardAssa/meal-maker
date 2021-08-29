// menu object
const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },

  // getter for appetizers 
  get appetizers(){
    return this._courses.appetizers;
  },
  // getter for mains
  get mains(){
    return this._courses.mains;
  },

  // getter for desserts
  get desserts(){
    return this._courses.desserts;
  },

  // setter for appetizers
  set appetizers(appetizers){
    this._courses.appetizers = appetizers;
  },

  // setter for mains
  set mains(mains){
    this._courses.mains = mains;
  },

  // setter for desserts
  set desserts(desserts){
    this._courses.desserts = desserts;
  },

  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },

  // method to add new dish to a specified course on menu
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    };

    this._courses[courseName].push(dish);
  },

  // this method gets a randomdish from course on the menu
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);

    return dishes[randomIndex];
  },

  // this method generates a random meal
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');

  // calculating the total price of the meals
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `you ordered ${appetizer.name}, ${main.name} and ${dessert.name} and the total price is ${totalPrice}`;
  }
}

menu.addDishToCourse('appetizers', 'coke', 5.00);
menu.addDishToCourse('appetizers', 'fries', 7.00);
menu.addDishToCourse('appetizers', 'chicken wings', 6.20);

menu.addDishToCourse('mains', 'ace of spade', 65.40);
menu.addDishToCourse('mains', 'jollof', 35.00);
menu.addDishToCourse('mains', 'belaire', 120.40);

menu.addDishToCourse('desserts', 'ice cream', 4.50);
menu.addDishToCourse('desserts', 'cake', 6.50);
menu.addDishToCourse('desserts', 'milk chocolate', 6.00);

const meal = menu.generateRandomMeal();
console.log(meal);
