// import fs 
import * as fs from 'fs/promises';
let data = await fs.readFile('./ReReFormatDataset.json')
// import * as data2 from './dataset.json'
// console.log(data.toString())
let data2 = JSON.parse(data.toString())

// data2.forEach( vid => {
//   vid[course_id] = vid[playlistId] && delete vid[playlistId];
  // console.log(vid);
// });

const renameKey = (obj, oldKey, newKey) => {
  if (obj[oldKey]) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }
}

// create a key key and property in a object
const createKey = (obj, key, property) => {
  if (!obj[key]) {
    obj[key] = property;
  }
}

// generate a random number
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generate a random date
const randomDate = () => {
  const year = random(2000, 2018);
  const month = random(1, 12);
  const day = random(1, 28);
  return new Date(year, month - 1, day);
}

// return a random value from an array
const randomFromArray = (arr) => {
  return arr[random(0, arr.length - 1)];
}


const arr = ['Basic', 'Intermediate', 'Advanced'];

data2.Data.forEach( vid => {
  let Level = vid.Level
  // check if the Level is Expert
  if (Level === "Expert"){
    // vid.Level with random value from arr 
    vid.Level = randomFromArray(arr)
  }
});


/*
data2.Data.forEach( vid => {
  let category = vid.Category
  let enter = ``
  category.forEach( cat => {
    // convert cat to string and concat to enter
    enter += `${cat}`
    // if the cat is not last give appen comma
    if (cat !== category[category.length - 1]) {
      enter += `,`
    }
  })  
  vid.Category = enter
  // console.log(vid.Category);
  });
*/
data2 = JSON.stringify(data2)
fs.appendFile(`ReReReFormatDataset.json`, data2, (err) => {
  if (err) {
    console.log(err);
  }
}
);