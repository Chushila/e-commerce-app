export function smallNavHandler() {
  if (document.querySelector('.smallNav').style.display === 'none') {
    document.querySelector('.smallNav').style.display = 'flex';
    document.querySelector('.Search').style.display = 'none';
    document.querySelector('header').style.flexDirection = 'column';
    document.getElementById('mainDisplay').style.display = 'none';
  } else {
    document.querySelector('.smallNav').style.display = 'none';
    document.querySelector('.Search').style.display = 'flex';
    document.querySelector('header').style.flexDirection = 'row';
    document.getElementById('mainDisplay').style.display = 'block';
  }
}

export function changeOrientation() {
  if (window.innerWidth > 600) {
    document.querySelector('.smallNav').style.display = 'none';
    document.querySelector('.Search').style.display = 'flex';
    document.querySelector('header').style.flexDirection = 'row';
    document.getElementById('mainDisplay').style.display = 'block';
  }
}


export function validateInputs() {
  const regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;
    const elements = document.getElementsByTagName('input');
    console.log(elements)
    for(let i =0; i<elements.length;i++){
      const userInput = elements[i].value;
      console.log(userInput)
      if(userInput&&!userInput.match(regex)){
        elements[i].setCustomValidity('No special characters except !@#$%^&*)\(+=._- are allowed')
      document.forms[0].reportValidity()
      }else{
        elements[i].setCustomValidity('')
      }
    }
}