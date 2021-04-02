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
