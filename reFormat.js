// import fs 
import * as fs from 'fs/promises';
let data = await fs.readFile('./dataset.json')
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

const arr = ['Basic', 'Intermediate', 'Advanced', 'Expert'];

data2.Data.forEach( vid => {
  renameKey(vid, 'playlistId', 'course_id');
  renameKey(vid, 'playlistTitle', 'course_title');
  renameKey(vid, 'playlistUrl', 'url');
  renameKey(vid, 'playlistThumb', 'Thumbnail');
  renameKey(vid, 'playlistCategory', 'Category');
  let descriptionCategory = vid.Category;
  descriptionCategory = descriptionCategory.toString();
  createKey(vid, 'Description', `This is a demo course created for demonstration purposes. For SEO purposes : ${descriptionCategory}`);
  createKey(vid, 'Level', randomFromArray(arr));
  createKey(vid, 'learners_count', random(1,1000).toString());
  createKey(vid, 'created_on', randomDate().toISOString().split('T')[0]);

  
  // console.log(vid);
});
data2 = JSON.stringify(data2)
fs.appendFile(`reFormatDataset.json`, data2, (err) => {
  if (err) {
    console.log(err);
  }
}
);