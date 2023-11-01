
// (Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio,
//           and a String representing the rating as its arguments, and sets the respective class properties to these values.)

// class Movie{
//    constructor(title,studio,rating){
//     this.Title=title;
//     this.Studio=studio;
//     this.Rating=rating;  
//    }
// }
// const movie=new Movie("Casino Royale","Eon Productions","pg");
// console.log(movie)



// The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// class movie{
//     constructor (title,studio,rating)
//     {
//        this.Title=title;
//        this.Studio=studio;
//        this.Rating=rating;
//     if (rating==null)
//        {
//          (this.Rating="PG")
//       }
//        } 
//       }
//     let flim=new movie("casion","leo","pg");
//     console.log(flim);


// Write a piece of code that creates an instance of the cl         ass Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

// class Movie{
//       constructor(title,studio,rating){
//        this.Title=title;
//        this.Studio=studio;
//        this.Rating=rating;  
//       }
//    }
//    const movie=new Movie("Casino Royale","Eon Productions","PG13");
//    console.log(movie)
// }

// Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// class Movie{
//       constructor(title,studio,rating){
//        this.Title=title;
//        this.Studio=studio;
//        this.Rating=rating;  
//       }

// static getPG=function(moviearray){
// return moviearray.filter(Movie=>Movie.Rating==="PG");
// }
// }
// const movie1=new Movie("Casino Royale","Eon Productions","PG16");
// const movie2=new Movie("Casino ","Productions","PG");

// let movies=[movie1,movie2];

// const fin=Movie.getPG(movies);
// console.log(fin)