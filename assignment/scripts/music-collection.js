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
// title
// artist
// year
// title and artist
// title and year
// year and artist
// title, artist, and year

function search(searchCriteria) {
  let searchMatches = [];

  // We're evaluating each possible outcome below.

  // The first outcome we're testing against is if artist, year, title all match.
  if (searchCriteria.artist && searchCriteria.year && searchCriteria.title) {
    // We use our standard for loop to loop over all of collection
     for (let i = 0; i < collection.length; i++) {
       if(searchCriteria.artist === collection[i].artist && searchCriteria.year === collection[i].year && searchCriteria.title === collection[i].title) {
         searchMatches.push(collection[i]);
       }
     }
  } else if (searchCriteria.artist && searchCriteria.year) {
      for (let i = 0; i < collection.length; i++) {
        if(searchCriteria.artist === collection[i].artist && searchCriteria.year === collection[i].year) {
          searchMatches.push(collection[i]);
        }
      }
  } else if (searchCriteria.artist && searchCriteria.title) {
      for (let i = 0; i < collection.length; i++) {
        if(searchCriteria.artist === collection[i].artist && searchCriteria.title === collection[i].title) {
          searchMatches.push(collection[i]);
        }
      }
  } else if (searchCriteria.year && searchCriteria.title) {
    for (let i = 0; i < collection.length; i++) {
      if(searchCriteria.year === collection[i].year && searchCriteria.title === collection[i].title) {
        searchMatches.push(collection[i]);
      }
    }
  } else if (searchCriteria.artist) {
      for (let i = 0; i < collection.length; i++) {
        if(searchCriteria.artist === collection[i].artist) {
          searchMatches.push(collection[i]);
        }
      }
  } else if (searchCriteria.year) {
      for (let i = 0; i < collection.length; i++) {
        if(searchCriteria.year === collection[i].year) {
          searchMatches.push(collection[i]);
        }
      }
  } else if (searchCriteria.title) {
      for (let i = 0; i < collection.length; i++) {
        if(searchCriteria.title === collection[i].title) {
          searchMatches.push(collection[i]);
        }
      }
    }
  if(searchMatches.length === 0) {
    return collection;
  } else {
    return searchMatches;
  }
}

// Testing search()

// title
// artist
// year
// title and artist
// title and year
// year and artist
// title, artist, and year


console.log('Expected return - {title: "10,000 Days", artist: "Tool", year: 2006}:', search({title: '10,000 Days'})); // title
console.log('Expected return - Both Tool Albums:', search({artist: 'Tool'})); // artist
console.log('Expected return - {title: "The Slim Shady LP", artist: "Eminem", year: 1999}:', search({year: 1999})); // year
console.log('Expected return - {title: "A Sense of Purpose", artist: "In Flames", year: 2008}:', search({title: 'A Sense of Purpose', artist: 'In Flames'})); // title and artist
console.log('Expected return - {title: "Electric Tears", artist: "Buckethead", year: 2002}:', search({title: 'Electric Tears',  year: 2002})); // title and year
console.log('Expected return - {title: "Lateralus", artist: "Tool", year: 2001}:', search({year: 2001, artist: 'Tool'})); // year and artist
console.log('Expected return - {title: "Battles", artist: "In Flames", year: 2016}:', search({title: 'Battles', artist: 'In Flames', year: 2016})); // title, artist, and year

// Testing search() with one correct input and one wrong input

console.log('Expected return - collection array:');
