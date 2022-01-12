// Flight booking fullname function

function getFullname(firstname, lastname, useFormalName, gender){
  if (firstname === "" || lastname === "") {
    return "Please enter the names";
  } else if (useFormalName === true) {
    if (gender === "male") {
      return "Lord " + firstname + " " + lastname;
    }else if (gender === "female") {
      return "Lady " + firstname + " " + lastname;
    }
  } else {
    return firstname + " " + lastname;
  }
}
  const fullName1 = getFullname("Benjamin", "Hughes", true, "male");
  const fullName2 = getFullname("Benjamin", "Hughes", false, "male");
  console.log(fullName1);
  console.log(fullName2);

  // Event application
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    function getEventWeekday(daysLeft) {
      let todaysDate = new Date().getDay();
      let eventDate= (daysLeft % 7) + todaysDate;
      var eventDay;
      if(eventDate >= 7) {
        eventDay = weekday[eventDate % 7];
      } else {
        eventDay = weekday[eventDate];
      }
      return eventDay;
    }
    console.log(getEventWeekday(7));

    // Weather wear
    function getYourClothes(temp) {
      if (temp <= -35) {
        return "It's too cold outside, Better to stay at home";
      }else if (temp <= -15) {
        return " Try to wear winter jacket, scarf, shoes and gloves to go outside";
      }else if (temp <=0) {
        return " Better to wear jacket and scarf";
      }else if (temp <= 15) {
        return " A coat and shoes";
      }else if (temp >=16 && temp <= 35) {
        return "It's good weather outside, enjoy with short and t-shirt";
      }
    }
    let clothesToWear = getYourClothes(25);
    console.log(clothesToWear);

    //Student manager

    const class075Students = [];
    function addStudentToClass(studentName) {
      if (studentName === "") {
        return "Please enter the student name";
      }else {
        if (class075Students.includes(studentName)!== true) {
          if (class075Students.length<6) {
            class075Students.push(studentName);
          }else if (class075Students.length >=6 && studentName === "Queen") {
            class075Students.push(studentName);
          }else {
            console.log("Cannot add more students to class 07");
          }
        }else {
          console.log("Student" + studentName + "is already in the class");
        }
      }
    }
    function getNumberOfStudents() {
      return class075Students.length;
    }
    addStudentToClass("Venkat");
    addStudentToClass("Johnny");
    addStudentToClass("Robert");
    addStudentToClass("Rocky");
    addStudentToClass("");
    addStudentToClass("Vishnu");
    addStudentToClass("Ahmad");
    addStudentToClass("Raju");
    addStudentToClass("Mohan");
    addStudentToClass("Queen");
    addStudentToClass("Ram");
    console.log(class075Students);
    console.log(getNumberOfStudents());

    // Candy helper optional
    boughtCandyPrices = [];
    function addCandy(candyType, weight) {
      if(candyType === "sweet") {
        priceSweet = weight * 0.5;
        boughtCandyPrices.push(priceSweet);
      }else if (candyType === "chocolate") {
          priceChocolate = weight * 0.7;
          boughtCandyPrices.push(priceChocolate);
        }else if (candyType === "toffee") {
            priceToffee = weight * 1.1;
            boughtCandyPrices.push(priceToffee);
        }else if (candyType === "chewinggum") {
            priceChewingGum = weight * 0.03;
            boughtCandyPrices.push(priceChewingGum);
          }
        }
      
        addCandy("sweet", 30);
        addCandy("chocolate", 20);
        addCandy("toffee", 10);
        addCandy("chewinggum", 5);

        console.log(boughtCandyPrices);

        const amountToSpend = Math.random() * 100;
        let candyPrice = 0;
        for(let i=0; i<boughtCandyPrices.length; i++) {
          candyPrice += boughtCandyPrices[i];
        }
          console.log(candyPrice);
          const totalprice = candyPrice;

        function canBuyMoreCandy(totalprice) {
          if(amountToSpend>candyPrice) {
            console.log("You can buy more candy, so please do!");
          }else {
            console.log("Enough candy for you!");
          }
        }
        canBuyMoreCandy(totalprice);
        



