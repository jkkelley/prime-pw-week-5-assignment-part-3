console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished) {
  let bandName = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
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
