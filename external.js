document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('grid-container');

    
    function createGrid(numSquares) {
      
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      

     
      document.documentElement.style.setProperty('--num-squares', numSquares);

     
      for (let i = 0; i < numSquares * numSquares; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', function() {
          gridSquare.style.backgroundColor = 'black'; 
        });
        container.appendChild(gridSquare);
      }
    }
    

   
    document.getElementById('changeGridBtn').addEventListener('click', function() {
      let numSquares = prompt('Enter the number of squares per side (max 100):');
      numSquares = parseInt(numSquares);

      
      if (!isNaN(numSquares) && numSquares > 0 && numSquares <= 100) {
        createGrid(numSquares);
      } else {
        alert('Please enter a valid number between 1 and 100.');
      }
    });

    document.getElementById('resetGridBtn').addEventListener('click', function() {
      const gridSquares = document.querySelectorAll('.grid-square');
      gridSquares.forEach(function(square) {
        square.style.backgroundColor = '#fff';
      });
    });

    
    createGrid(16); 
  });