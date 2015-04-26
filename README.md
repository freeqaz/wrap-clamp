# wrap-clamp
A simple wrapping clamp library that will wrap the value if it exceeds the bounds.

```javascript
var wrapClamp = require('wrap-clamp');

wrapClamp(4, 0, 4); // prints 4
wrapClamp(5, 0, 4); // prints 0
wrapClamp(6, 0, 4); // prints 1
```
