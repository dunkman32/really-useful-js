
# install
  ```
  $ npm i --save really-useful-js
  ```

## in nodeJS!
```
    const {
        tryCatch,
        AppError,
        addElementAtIntex,
        removeElementFromArray,
    } = require("really-useful-js");
    
  <!-- clean code without try{...}catch(e){next(e)} -->
  router.get('/',
    tryCatch(async (req, res, next) => {
      const arrayOfObjects = await objectSchema.list();
      ...
      return res.send(arrayOfObjects);
   }));

  <!-- in your code you can throw --> 
   throw new AppError(message, statusCode);

  <!-- ADD -->
   let arr =  ["Sheldon", "Penny", "Leonard", "Howard"]
   addElementAtIntex(arr, 0, "noZZa")
   console.log(arr);  <!-- ["noZZa", "Sheldon", "Penny", "Leonard", "Howard"] -->

  <!-- REMOVE -->
   const newArr = removeElementFromArray(arr, "Leonard")
   console.log(newArr);  <!-- ["noZZa", "Sheldon", "Penny", "Howard"] -->
```