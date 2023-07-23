let test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];




// for (let i = 0; i < 6; i++) {
//    colorParts.push(test[Math.floor(Math.random() * test.length)]);

// }


// let result = `#${colorParts.join("")}`;


document.querySelector('.equal').addEventListener('click', () => {

   let colorParts = [];


   for (let i = 0; i < 6; i++) {
      colorParts.push(test[Math.floor(Math.random() * test.length)]);

   }
   let result = `#${colorParts.join("")}`;


   document.body.style.backgroundColor = result;
});