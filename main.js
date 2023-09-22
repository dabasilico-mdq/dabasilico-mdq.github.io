document.querySelector("#boton_1").onclick = function () {
    document.querySelector('.activo').classList.remove('activo');
    document.querySelector("#datos_personales").classList.add('activo');
    
  };

  document.querySelector("#boton_2").onclick = function () {
    document.querySelector('.activo').classList.remove('activo');
    document.querySelector("#experiencia_laboral").classList.add('activo');
    
  };

  document.querySelector("#boton_3").onclick = function () {
    document.querySelector('.activo').classList.remove('activo');
    document.querySelector("#formación_académica").classList.add('activo');
    
  };

  document.querySelector("#boton_4").onclick = function () {
    document.querySelector('.activo').classList.remove('activo');
    document.querySelector("#aptitudes_y_conocimientos").classList.add('activo');
    
  };