$(function(){

  var btn_fms = $(".fms");
  var btn_12_patrones = $(".12-patrones");
  var btn_8_patrones = $(".8-patrones");
  var btn_6_patrones = $(".6-patrones");
  var btn_4_patrones = $(".4-patrones");
  var btn_2_patrones = $(".2-patrones");

  btn_2_patrones.click(function(){
    alert('click');
  });
  //FUNCIONES
  function obtenerFecha(){
    var fecha = new Date();

    var dia = fecha.getDate();
    var mes =  fecha.getMonth();
    var anio = fecha.getFullYear();
    var num_dia = fecha.getDay();
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    return ( dias[num_dia] + " " + dia + " de " + meses[mes] + " de " + anio);

  }

  $("#fecha").html(obtenerFecha());


});
