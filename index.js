const container = document.querySelector('#container');

const redPar = document.createElement('p');
redPar.innerHTML = 'Hey I’m red!';
redPar.style.color = 'red';
container.appendChild(redPar);

const blueTitle = document.createElement('h3');
blueTitle.innerHTML = 'I’m a blue h3!';
blueTitle.style.color = 'blue';
container.appendChild(blueTitle);

const coolDiv = document.createElement('div');
coolDiv.classList.add('coolDiv'); 
coolDiv.style.backgroundColor = 'pink';
coolDiv.style.border = '1'

const highText = document.createElement('h1');
highText.innerHTML = 'I’m in a div';

const regPar = document.createElement('p');
regPar.innerHTML = 'ME TOO!';

coolDiv.appendChild(highText);
coolDiv.appendChild(regPar); 

container.appendChild(coolDiv);

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});