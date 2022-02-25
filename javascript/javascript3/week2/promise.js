 // Promise that resolves after set time

function getResolveIn(resolveAfter) {
   return new Promise(function(resolve, reject){
       setTimeout(function() {
           resolve(resolveAfter);

       }, 1000 * resolveAfter);
   });
}
getResolveIn(8).then(function() {
   console.log("I am called asynchronously")
});


// Using the above promise with async/await

async function getResolveIn(resolveAfter) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Calling after 8 seconds"), 1000 * resolveAfter)
    });
    let result = await promise;          // wait until the promise resolves.
    console.log(result);
}
getResolveIn(4);



  // Rewrite setTimeout and getCurrentPosition using geolocation

function reWrite() {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 3000);
    }).then(function() {
        console.log("Called after 3 seconds");
    });
}
reWrite();


function getCurrentLocation() {
    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject) 
    );
} 
getCurrentLocation()
  .then((position) => {
    console.log(position);
  })
  .catch((error) => {
    console.log(error);
  });



// 3 steps using promise .then


 Promise.resolve()
  .then(function(resolve) {
    return new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve(
            fetch("https://api-mobilespecs.azharimm.site/v2/brands")
              .then((result) => result.json())
              .then((data) => data.data.map((element) => element.brand_name)) //getting the cat facts from an array of objects
              .then((array) => console.log(array))
          ),
        4000
      )
    );
  })
  .catch(console.log.bind(console));



  // async and await

  
    async function wait() {
      try{
        const response = await fetch('https://api-mobilespecs.azharimm.site/v2/brands');
        const results = await response.json();
        const brandName = await results.data.map((element) => element.brand_name)   // getting the brand names from an array of objects
        console.log(brandName);
        await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    } catch (error) {
      console.log(error);
    }
  }
    wait();

