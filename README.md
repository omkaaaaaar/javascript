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
