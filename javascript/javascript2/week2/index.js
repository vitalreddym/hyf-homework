

// 1. Movies with a short title 

const shortMovies = movies.filter(short => short.title.length <= 3);
console.log(shortMovies);



// 2. Movies with long title

const longMovies = movies.filter(long => long.title.length >=20 );
console.log(longMovies);



// 3. Count the number of movies between 1980-1989 including both 

const count = movies.filter(title => {
    return title.year >= 1980 && title.year <= 1989;
}).length;
console.log(count);



// 4. Add new tag key based on rating

const addTagKey = movies.map(function(addKey) {
    if(addKey.rating >= 7) {
        addKey.tag = "Good";
    }
    else if(addKey.rating >= 4 && addKey.rating < 7) {
        addKey.tag = "Average";
    }
    else {
        addKey.tag = "Bad";
    }
    return addKey;
});
console.log(addTagKey);



// 5. Using chaining method

const filteredMovies = movies.filter(title => title.rating > 6)
.map(title => title.rating);
console.log(filteredMovies);



// 6. Count the total number of movies based on keywords: Surfer, Alien or Benjamin

const countKeyWords = movies.reduce((counter, movie) => {
    if (movie.title.toLowerCase().includes ("surfer") ||
        movie.title.toLowerCase().includes ("alien") ||
        movie.title.toLowerCase().includes ("benjamin") )

    counter += 1;
    
    return counter;
  }, 0); 
  
console.log(countKeyWords);




// 7. Create duplicate array

const titlesWithDuplicateWords = [];

movies.map(movie => movie.title.split(" "))
	.forEach(titleWord =>
		titleWord.filter((word, index) =>
			titleWord.indexOf(word) != index
				? titlesWithDuplicateWords.push(titleWord)
				: false
		)
	);

console.log(titlesWithDuplicateWords);



// 8. Find the average rating

const averageRating = movies
  .reduce((acc, title) => acc + title.rating / movies.length, 0)
  
console.log("The average rating is " + averageRating.toFixed(2));



// 9. Count the total number of Good, Average and Bad movies using reduce - Optional

const addTagKey = movies.map(function(addKey) {
    if(addKey.rating >= 7) {
        addKey.tag = "Good";
    }
    else if(addKey.rating >= 4 && addKey.rating < 7) {
        addKey.tag = "Average";
    }
    else {
        addKey.tag = "Bad";
    }
    return addKey;
});
console.log(addTagKey);


const tagCount = movies.reduce(function
	(count, movie) {
        if (movie.tag in count) {
            count[movie.tag]++;
        } 
         else  {
            count[movie.tag] = 1;
        }
        return count;
    },
	{ Good: 0, Average: 0, Bad: 0 }
);

console.log(tagCount);
