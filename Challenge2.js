// // This class will contain the first and  last name of each user and will be able to say hello to anyone who uses our application.
// // Write the class User and add the properties.
// class User {
//     // Constructor that takes two parameters
//     constructor(firstname, lastname) {
//         // Instance variables to store the firstname and lastname
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }  
// // Add the method that says hello.
// hello() {
//     return "Hello,";
// }
// }
// // Create the first instance, and call it user1. Use the new keyword to create an object from the class.
// // Set the values for the first and last name to user1.
// const user1 = new User('John', 'Doe');
// // Add another object, call it user2, give it a first name of 'Jane' and last name of 'Doe', then say hello to the user.
// const user2 = new User('Jane', 'Doe');
// // call the hello method on user1 and user2 instances
// console.log (user1.hello(), user1.firstname, user1.lastname);
// console.log(user2.hello(), user2.firstname, user2.lastname);


// // Encapsulation
// class User {
//     // Constructor that takes two parameters
//     constructor(firstname, lastname) {
//         // Instance variables to store the firstname and lastname
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }  

//     // Getter method to retrieve the parameters firstname and lastname
//     get firstname(){
//     return this._firstname;
// }

//     get lastname(){
//     return this._lastname;
// }

//     // Setter method to set a new value for a person's fullname
//     set firstname(firstname){
//         this._firstname = firstname;
//     }

//     set lastname(lastname){
//         this._lastname = lastname;
//     }

// // Add the method that says hello world and message.
// hello() {
//     return "Hello world!";
//     // console.log(`My name is ${this.firstname} ${this.lastname}`);
// }
// }
// // 1. Create an user object called user that will represent the User class.
// const user = new User("firstname", "lastname");

// // call the hello method on user1 and user2 instances
// console.log(user.hello());
// console.log("My name is ", user.firstname, user.lastname);

// // Inheritance

// //create an Admin class, which is a  child class of the User class
// class User {
//     // Add to the class a property with the name of username.
//     constructor(username){
//         this.username = username;
//     }

//     get username(){
//         return this._username;
//     }
//     // Create a setter method that can set the value of the username.
//     set username(username){
//         this._username = username;
//     }
// }
// // Create the Admin class that inherits the User class
// class Admin extends User {

// // Add a method by the name of expressYourRole(), and make it return the string: "Admin".
// expressYourRole() {
//     return "Admin";
// }
// // Add to the Admin class another method, sayHello(), that returns the string "Hello admin, XXX" with the username instead of XXX.
// sayHello() {
//         return `Hello admin, ${this._username}`;
//     }
// }
// // Create an object admin out of the class Admin
// // Set its name to "Balthazar" and say hello to the user.
// const admin = new Admin ("Balthazar");
// // console.log(admin.expressYourRole());
// console.log(admin.sayHello());

// // Polymorphism
// // you will create a User class that commits the classes that inherit from it to calculate the number of scores that a user has depending on the number of articles that he has authored or edited.
// class User {
//     constructor(){
//         this.numberOfArticles = 0;
//     }
// // Add to the User class the methods to set and get the number of articles
// // getNumberOfArticles()     
//     getNumberOfArticles(){
//         return this._numberOfArticles;
//     }
// // setNumberOfArticles(int numberOfArticles)
//     setNumberOfArticles(numberOfArticles){
//         return this._numberOfArticles = numberOfArticles;
//     }
// // Add to the User class a third method
// // calcScores(), that performs the scores calculations separately for each class.
// calcScores(){
//         return 0;
//     }
// }
// // Create an Author class that inherits from the User class.
// class Author extends User {
// // In the Author create a calcScores() method that returns the number of scores from the following calculation: numberOfArticles * 10 + 20 
//     calcScores(){
//         return this._numberOfArticles * 10 + 20;
//     }
// }
// // Create an Editor class that inherits from the User class. 
// class Editor extends User{
// // In the Editor create a calcScores() method that returns the number of scores from the following calculation: numberOfArticles * 6 + 15
//     calcScores(){
//         return this._numberOfArticles * 6 + 15;
//     }
// }
// // Create an object, author, from the Author class, set the number of articles to 8, and print the scores that the author gained.
// const author = new Author();
// author.setNumberOfArticles(8);
// // Create another object, editor, from the Editor class, set the number of articles to 15, and print the scores that the editor gained.
// const editor = new Editor();
// editor.setNumberOfArticles(15);

// console.log("Author's Scores: " + author.calcScores());
// console.log("Editor's Scores: " + editor.calcScores());

// Abstraction

// 1. Create an abstract class with the name of User: 
class User {
    // Add to the class, a property with the name of username.
    constructor(username){
        this.username = username;
    }
// Add to the class, an abstract method with the name of stateYourRole().
    stateYourRole(){
        return "username";
    }

// Add to the class, the setter and getter methods to set and get the username.
    set username(username) {
        this._username = username;
    }

    get username() {
        return this.username;
    }
}

// 2.Create an Admin class that inherits the User abstract class: 
class Admin extends User {
// Add to the class a method stateYourRole() and let it return the string "admin".
    stateYourRole() {
        return "admin";
    }
}
// 3. Create another class, Viewer that inherits the User abstract class: 
class Viewer extends User {
    //Add to the class a method stateYourRole() and let it return the string "viewer".
    stateYourRole() {
        return "viewer";
    }
}

//4. Create an object, admin, from the Admin class, set the username to "Balthazar", and make it return the string "admin".
const admin = new Admin("Balthazar");
console.log(admin.stateYourRole());

//5. Create an object, viewer, from the Viewer class, set the username to "Melchior", and make it return the string "viewer".
const viewer = new Viewer("Melchior");
console.log(viewer.stateYourRole());