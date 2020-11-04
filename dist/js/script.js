
//  помещение данных в инпут с проверкой на максимальное значение
function getNum() {
	var valElem1 = document.getElementById("elem1");
  var valElem2 = document.getElementById("elem2");
  
  if (valElem2.value > 100) {
    valElem2.value = 100;
  }
  else if(valElem2.value < 0) {
		valElem2.value = 0;
  }
  valElem1.value = valElem2.value;
}
// вычисление итогового значения по нажатию батона + добавление апострофа
butt.onclick = function() {
	var val = document.getElementById('elem2').value;
	if(val <= 100) {
		val *= 100;
	  if(val < 1000) {
		  document.getElementById('str').innerHTML=val;
		  } else {
		if(val % 1000) {
		  document.getElementById('str').innerHTML=parseInt(val / 1000) + "\'" + (val % 1000);
		} else {
		  document.getElementById('str').innerHTML=parseInt(val / 1000) + "\'" + (val % 1000) + "00";
		}
	  }
	}
  };