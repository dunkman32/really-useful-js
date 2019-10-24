
# install
  ```
  $ npm i --save really-useful-js
  ```

## in nodeJS!
```
    const {
        tryCatch,
        AppError,
    } = require("really-useful-js");

router.get('/',
  tryCatch(async (req, res, next) => {
    const arrayOfObjects = await objectSchema.list();
    ...
    return res.send(arrayOfObjects);
  }));

  <!-- in your code you can throw --> 
  throw new AppError(message, statusCode);

```