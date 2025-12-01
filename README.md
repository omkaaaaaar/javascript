# javascript

---

**Variables** in js
Variable is used to store data temporarily in computers memory
ex- cardboardbox, variable is a box the thing we put inside the box is the values/data and the label we put on the box is the variable name

- to declare a variable, "let" is the keyword

```
let name;
console.log(name);
```

here name is the name of the box/variable and let is used to create the variable,
to log on the console(get o/p in console) we used the second line where we called our variable by its variable name("name" in ts case)

- by deault the variables we define in js, their value is always undefined

- **rules** for Variables Names
  1. They cannot be a reserved keyword, ex let, if, else,etc
  2. They should be meaningful
  3. Cannot start with a number (ex- 1name)
  4. Cannot contain a space or hypen(-), put multiple words together - firstName(camel notation)
  5. Variables name are case sensitive
  6. to declare multiple vriable seperate it by ","
     let firstName ="xyz", lastName ="abc";
     but in modern day practice we seperate them
     ```
     let firstName = 'abc';
     letlastName = 'xyz';
     ```

---

**Constants** in js

1.  Use them when there is no need to re-assign variables
2.  The value of the variable here doesn't changes

---

**Types**

- There are two different types of types,
  1. Primitives/ Value Types
  2. Reference Types

1. Primitives/ Value Types
   categories

- String
- Number
- Boolean
- undefined : It is a type and also a Value
- null : we use this type when we want to explicitly declare the value of the variable, ex if user wanted to select a color and doesnt selects then; ->
  let selectedColor = null;

2. Reference Types

- Objects
- Array
- Function

**Dynamic Typing**
JS is a dynamic language, a type of a variable can bechanged later on/ in the future
ex-

```
>typeof name
< "string"
> name = 1;
< 1
> typeof name
< "number"            //the type got changed when we updated the value inside var
```

- we dont have float in JS, we only have number here, where even 30.5 is considered as a number instead of a float

---

**object** ln. 37

Object in js is like an obj in real life, ex a person -> the person has name, age, address, etc These are the properties of a person
We have the same concept in Js

- insted of having multiple variables for a person
- we can create a single object to represent a person
- and instead of refrencing these 2 variables we can refrence the person object
  ex-

```
let person = {      //{} are called object literal
    name:'Omkar',
    age:21
}
```

There are two ways of accessing the contents property

1. Dot Notation:-

```
//dot notation
person.name = 'Omkar Patkar'; //we can change the value of name property using dot notation
```

2. Bracket Notation:-
   Instead of Dot we here use a string, we pass a str that determines the name of the target property

**The Dot Notation should be your preffered choice because it is concise**

---

**Arrays**
Sometimes we deal with a list of objects, ex-list of products in a shopping cart, list of colors that user has selected. In this situation we use arrays to store the list

- we can store different data types in an array, ex an array with str can store int too!
- the array is automatically created as an object in js, and inherits properties like every,fill, filter,findIndex,forEach,length etc

---

**Functions**
A function are one of the essential building blocks of js, a function is a set of statements that performs a task or calculates a value
Keyword - function
ex - function abc() <- here the parenthesis are the syntax for defining structures
