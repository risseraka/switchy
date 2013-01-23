Use:

```js
var element1 = {
  "type": "onetype"
};
var element2 = {
  "type": "sometype",
  "subelement": {
    "subType": "subValue"
  }
};

var result1 = switchy(element1.type, {
  "onetype": "lalala",
  "sometype": function () {
    return (element2.subelement || {})["subType"];
  }
});
// "lalala"

var result2 = switchy(element2.type, {
  "onetype": "lalala",
  "sometype": function () {
    return (element2.subelement || {})["subType"];
  }
});
// "subValue"
```
