<p align="center">
  <a href="https://github.com/sajjadmrx/best-string" target="blank">
        <img src="https://cdn.discordapp.com/attachments/980899740784951387/1007988372284915864/New_Project.png" width="500" alt="Best-string Logo" /></a>
</p>


  <h1 align="center"> 
        <hr>
  </h1>   
<h3 align="center">
A package to manipulate string.
</h3>

## Instalation

use this command to installation

```
npm install best-string
```

## imports

```
import BestString from 'best-string' //or require
```

# Usage

```ts
import BestString from "best-string";

const my_text = new BestString('Hello <script>alert("TEST")</script>').noScriptTag().build()
console.log(my_text) //Result:  'Hello'

const text = new BestString('Hi چطوری؟').noRtlCharacters().build();
console.log(text) //Result:  'Hi'

const user = 'Jack'
const message = new BestString('welcome {user}! your role is ROLE!,your nickname is {user}')
    .replaceGlobal('{user}', user)
    .replaceGlobal('ROLE', 'ADMIN')
    .build()
console.log(message) //Result: welcome Jack! your role is ADMIN!,your nickname is Jack
```

## TODO

- add Methods