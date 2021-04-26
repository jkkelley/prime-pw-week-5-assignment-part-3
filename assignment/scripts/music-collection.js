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
  console.log(`Number of Artist in Array: ${array.length}`);
  // Below we need to iterate over the whole array.
  for (let i = 0; i < array.length; i++) {
    // Below we're logging out our message each time we iterate through
    // our loop.
    console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].year}.`);
  } // end of loop
} // end showCollection


console.log(showCollection(collection));

function findByArtist(artist) {
  let artistArray = [];
  // Looping through the collection array.
  for (let i = 0; i < collection.length; i++) {
    // Our condition asks if the input artist matches any of the collection artist.
    if (artist === collection[i].artist) {
      // If we got a match, we push it into our artistArray array.
      artistArray.push(collection[i]);
      // If we wanted to only see the artist name that we pushed, we could
      // change the above code to the line below.
      // artistArray.push(collection[i].artist);
    }
  }
  // We return our array, if no matches are found we return an empty array.
  return artistArray;
}


console.log('Expect 2 results to be returned:', findByArtist('Tool'));
console.log('Expect an empty array:', findByArtist('Mudvayne'));


// <--- S t r e t c h   G o a l s ---> //

function search() {
  return collection;
}
