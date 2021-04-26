console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished) {
  let bandName = {
    title: title,
    artist: artist,
    year: yearPublished
  }
  collection.push(bandName);
  return bandName;
} // end addToCollection


console.log(addToCollection('10,000 Days', 'Tool', 2006));
console.log(addToCollection('Lateralus', 'Tool', 2001));
console.log(addToCollection('The Slim Shady LP', 'Eminem', 1999));
console.log(addToCollection('Electric Tears', 'Buckethead', 2002));
console.log(addToCollection('Battles', 'In Flames', 2016));
console.log(addToCollection('A Sense of Purpose', 'In Flames', 2008));

console.log(collection);


function showCollection(array) {
  console.log(array.length);
  // Below we need to iterate over the whole array.
  for (let i = 0; i < array.length; i++) {
    // Below we're accessing the title, artist, and year each time we iterate through our
    // loop.
    console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].year}.`);
  } // end of loop
} // end showCollection


console.log(showCollection(collection));
