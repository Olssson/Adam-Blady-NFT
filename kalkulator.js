const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);

  color.innerHTML = "#" + randomColor;
  
  document.getElementById('ok').style.background = '#' + randomColor;
}

genNew.addEventListener("click", setBg);
setBg();
