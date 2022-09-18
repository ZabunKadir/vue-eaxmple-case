# vue-task

## Project Setup and Compile for Development

```sh
npm install
npm run dev
```

### Solution to the 6th problem

```js
const data = [
  { id: "1", name: "user 1" },
  { id: "2", name: "user 2" },
  { id: "3", name: "user 3" },
  { id: "4", name: "user 4" },
  { id: "5", name: "user 5" },
  { id: "6", name: "user 6" },
];

const changeData = (data) => {
  data.forEach((item, index) => {
    //delete object id of each one
    delete item.id;
    //add name value of object to array
    for (let [key, value] of Object.entries(item)) {
      data.push(value);
    }
  });
  for (let i = 0; i < data.length; i++) {
    //delete empty objects in array
    data.shift();
  }
  return data;
};
//call func
changeData(data);
//show result
console.log(data);
////////////////////////////Solution Two/////////////////////////////////
const changeData2 = (data) => {
  //create a temporary array
  const tempData = [];
  //add name value of object to array
  data.forEach((item, index) => {
    for (let [key, value] of Object.entries(item)) {
      //control the key for only object name value
      if (key === "name") tempData.push(value);
    }
  });
  return tempData;
};
```
