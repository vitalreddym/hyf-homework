
// 1. Translate circles one by one

moveElement(document.querySelector("li"), { x: 100, y: 100 }).then(() => {
  console.log("Element has been moved");
});
let redBox;
let blueBox;
let greenBox;

async function translateOneByOne() {
  try {
  const boxes = [...document.querySelector(".marks").children];
  redBox = await moveElement(boxes[0], {
    x: 20 - parseInt(boxes[0].style.left),
    y: 300 - parseInt(boxes[0].style.top),
  }).then(()=> {
    console.log("Red Box has been moved");
  });

  blueBox = await moveElement(boxes[1], {
    x: 400 - parseInt(boxes[1].style.left),
    y: 300 - parseInt(boxes[1].style.top),
  }).then(()=> {
    console.log("Blue Box has been moved");
  });

  greenBox = await moveElement(boxes[2], {
    x: 400 - parseInt(boxes[2].style.left),
    y: 20 - parseInt(boxes[2].style.top),
  }).then(()=> {
    console.log("Green Box has been moved");
  });
} catch (error) {
  console.log.bind(console);
}
}
  //translateOneByOne();


// 2. Translate all circles at once using Promise.all

function translateAllAtOnce() {
  try {
    const boxes = [...document.querySelector(".marks").children];
    const redBox= moveElement(boxes[0], { x: 20 - parseInt(boxes[0].style.left), y: 300 - parseInt(boxes[0].style.top)});
    const blueBox = moveElement(boxes[1], { x: 400 - parseInt(boxes[1].style.left), y: 300 - parseInt(boxes[1].style.top) });
    const greenBox= moveElement(boxes[2], { x: 400 - parseInt(boxes[2].style.left), y: 20 - parseInt(boxes[2].style.top)});
    Promise.all([redBox, blueBox, greenBox]).then(() =>
      console.log("Elements have been moved")
    );
  } catch (error) {
    console.log.bind(console);
 }
}
translateAllAtOnce();


