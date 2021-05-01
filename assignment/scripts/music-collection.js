console.log('***** Music Collection *****')

let collection = [];

// // Below is the first addToCollection() and testing I came up with.

// function addToCollection (title, artist, yearPublished) {
//   let bandName = {
//     title: title,
//     artist: artist,
//     year: yearPublished,
//   }
//   collection.push(bandName);
//   return bandName;
// } // end addToCollection
//
// // Testing addToCollection()
// console.log(addToCollection('10,000 Days', 'Tool', 2006));
// console.log(addToCollection('Lateralus', 'Tool', 2001));
// console.log(addToCollection('The Slim Shady LP', 'Eminem', 1999));
// console.log(addToCollection('Electric Tears', 'Buckethead', 2002));
// console.log(addToCollection('Battles', 'In Flames', 2016));
// console.log(addToCollection('A Sense of Purpose', 'In Flames', 2008));
//
// console.log(collection);

// console.log(collection[0].tracks.[0].name);

// <--- S t r e t c h   G o a l s ---> //
// Updated addToCollection() version 1.1

// I didn't quite like this way of doing it, so I came up with another way to do it.
// I'm really looking forward to see how we tackle this in next week's meeting.

// // We added the rest parameter to be able to take in as many tracks as needed.
// function addToCollection (title, artist, yearPublished, ...tracks) {
//   let bandName = {
//     title: title,
//     artist: artist,
//     year: yearPublished,
//     // Using the rest parameter automatically generates an array for us.
//     tracks: tracks
//   }
//   collection.push(bandName);
//   return bandName;
// } // end addToCollection
//
// // Testing new addToCollection(). I will add the first three songs of each album
// // for the sake of keep the script small.
//
// console.log(addToCollection('10,000 Days', 'Tool', 2006,
// {name: 'Vicarious', duration: '7:06'},
// {name: 'Jambi', duration: '7:29'},
// {name: 'Wings For Marie (Part 1)', duration: '6:11'}));
//
// console.log(addToCollection('Lateralus', 'Tool', 2001,
// {name: 'The Grudge', duration: '8:36'},
// {name: 'Eon Blue Apocalypse', duration: '1:04'},
// {name: 'The Patient', duration: '7:14'}));
//
// console.log(addToCollection('The Slim Shady LP', 'Eminem', 1999,
// {name: 'Public Service Announcement', duration: '0:34'},
// {name: 'My Name Is', duration: '4:28'},
// {name: 'Guilty Conscience', duration: '3:19'}));
//
// console.log(addToCollection('Electric Tears', 'Buckethead', 2002,
// {name: 'All In The Waiting', duration: '3:44'},
// {name: 'Sketches of Spain (for Miles)', duration: '4:04'},
// {name: 'Padmasana', duration: '11:39'}));
//
// console.log(addToCollection('Battles', 'In Flames', 2016,
// {name: 'Drained', duration: '4:07'},
// {name: 'The End', duration: '3:56'},
// {name: 'Like Sand', duration: '3:44'}));
//
// console.log(addToCollection('A Sense of Purpose', 'In Flames', 2008,
// {name: 'The Mirror\'s Truth', duration: '2:59'},
// {name: 'Disconnected', duration: '3:37'},
// {name: 'Sleepless Again', duration: '4:10'}));
//
// console.log(collection);


// Updated addToCollection() version 1.2

// This way keeps our function nice and neat. If we pulled Data from an api and formatted it with json lint,
// we'd be able to take what data we wanted using this method below.

function addToCollection({title, artist, year, tracks}) {
  // console.log(title, artist, year, tracks);
  collection.push({title, artist, year, tracks});
  return collection;
}

const tool1 = {
  title: '10,000 Days',
  artist: 'Tool',
  year: 2001,
  tracks: [
    {name: 'Vicarious', duration: '7:06'},
    {name: 'Jambi', duration: '7:29'},
    {name: 'Wings For Marie (Part 1)', duration: '6:11'}
  ]
};

const tool2 = {
  title: 'Lateralus',
  artist: 'Tool',
  year: 2006,
  tracks: [
    {name: 'The Grudge', duration: '8:36'},
    {name: 'Eon Blue Apocalypse', duration: '1:04'},
    {name: 'The Patient', duration: '7:14'}
  ]
};

const eminem = {
  title: 'The Slim Shady LP',
  artist: 'Eminem',
  year: 1999,
  tracks: [
    {name: 'Public Service Announcement', duration: '0:34'},
    {name: 'My Name Is', duration: '4:28'},
    {name: 'Guilty Conscience', duration: '3:19'}
  ]
};

const bucketHead = {
  title: 'Electric Tears',
  artist: 'Buckethead',
  year: 2002,
  tracks: [
    {name: 'All In The Waiting', duration: '3:44'},
    {name: 'Sketches of Spain (for Miles)', duration: '4:04'},
    {name: 'Padmasana', duration: '11:39'}
  ]
};

const inFlames1 = {
  title: 'Battles',
  artist: 'In Flames',
  year: 2016,
  tracks: [
    {name: 'Drained', duration: '4:07'},
    {name: 'The End', duration: '3:56'},
    {name: 'Like Sand', duration: '3:44'}
  ]
};

const inFlames2 = {
  title: 'A Sense of Purpose',
  artist: 'In Flames',
  year: 2008,
  tracks: [
    {name: 'The Mirror\'s Truth', duration: '2:59'},
    {name: 'Disconnected', duration: '3:37'},
    {name: 'Sleepless Again', duration: '4:10'}
  ]
};

console.log(addToCollection(tool1));
console.log(addToCollection(tool2));
console.log(addToCollection(eminem));
console.log(addToCollection(bucketHead));
console.log(addToCollection(inFlames1));
console.log(addToCollection(inFlames2));



function showCollection(array) {
  console.log(`Number of Artist in Array: ${array.length}`);

  // Below we need to iterate over the whole array.
  for (let i = 0; i < array.length; i++) {
    // Below we're logging out our message each time we iterate through
    // our loop.
    console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].year}:`);

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
  const results = [];
  // Loop through all objects of collection array.
  collection.forEach((obj) => {
    // Assume match is true.
    let matched = true;
    // Loop through keys of search object.
    for (let key of Object.keys(searchCriteria)) {
      // Set matched value
      matched = obj[key] === searchCriteria[key];
      // If not matched break loop.
      if (!matched) {
        break;
      }
    }
    // If matched is true after looping through all keys then add to results.
    if (matched) {
      results.push(obj);
    }
  });
  if (results.length === 0) {
    return collection;
  } else {
    return results;
  }
}

// Below is the first function I came up with.

// function search(searchCriteria) {
//   let searchMatches = [];
//
//   // We're evaluating each possible outcome below.
//
//   // The first outcome we're testing against is if artist, year, title all match.
//   if (searchCriteria.artist && searchCriteria.year && searchCriteria.title) {
//     // We use our standard for loop to loop over all of collection
//      for (let i = 0; i < collection.length; i++) {
//        if(searchCriteria.artist === collection[i].artist && searchCriteria.year === collection[i].year && searchCriteria.title === collection[i].title) {
//          searchMatches.push(collection[i]);
//        }
//      }
//   } else if (searchCriteria.artist && searchCriteria.year) {
//       for (let i = 0; i < collection.length; i++) {
//         if(searchCriteria.artist === collection[i].artist && searchCriteria.year === collection[i].year) {
//           searchMatches.push(collection[i]);
//         }
//       }
//   } else if (searchCriteria.artist && searchCriteria.title) {
//       for (let i = 0; i < collection.length; i++) {
//         if(searchCriteria.artist === collection[i].artist && searchCriteria.title === collection[i].title) {
//           searchMatches.push(collection[i]);
//         }
//       }
//   } else if (searchCriteria.year && searchCriteria.title) {
//     for (let i = 0; i < collection.length; i++) {
//       if(searchCriteria.year === collection[i].year && searchCriteria.title === collection[i].title) {
//         searchMatches.push(collection[i]);
//       }
//     }
//   } else if (searchCriteria.artist) {
//       for (let i = 0; i < collection.length; i++) {
//         if(searchCriteria.artist === collection[i].artist) {
//           searchMatches.push(collection[i]);
//         }
//       }
//   } else if (searchCriteria.year) {
//       for (let i = 0; i < collection.length; i++) {
//         if(searchCriteria.year === collection[i].year) {
//           searchMatches.push(collection[i]);
//         }
//       }
//   } else if (searchCriteria.title) {
//       for (let i = 0; i < collection.length; i++) {
//         if(searchCriteria.title === collection[i].title) {
//           searchMatches.push(collection[i]);
//         }
//       }
//     }
//   if(searchMatches.length === 0) {
//     return collection;
//   } else {
//     return searchMatches;
//   }
// }


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
console.log('Expected return - {title: "Lateralus", artist: "Tool", year: 2006}:', search({year: 2006, artist: 'Tool'})); // year and artist
console.log('Expected return - {title: "Battles", artist: "In Flames", year: 2016}:', search({title: 'Battles', artist: 'In Flames', year: 2016})); // title, artist, and year

// Testing search() with wrong inputs

console.log('Expected return - collection array:', search({title: '20,000 Days'})); // title
console.log('Expected return - collection array:', search({artist: 'Jewel'})); // artist
console.log('Expected return - collection array:', search({year: 2021})); // year
console.log('Expected return - collection array:', search({title: 'A Sense of Purpose', artist: 'Johnny Cash'})); // title and artist
console.log('Expected return - collection array:', search({title: 'Electric Tears',  year: 2005})); // title and year
console.log('Expected return - collection array:', search({year: 2001, artist: 'Creed'})); // year and artist
console.log('Expected return - collection array:', search({title: 'Not Again', artist: 'In Flames', year: 2016})); // title, artist, and year
