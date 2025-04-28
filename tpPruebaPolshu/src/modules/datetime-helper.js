// src/modules/datetime-helper.js

class DateTimeHelper {
    isDate(fecha) {
      return fecha instanceof Date && !isNaN(fecha);
    }
  
    getOnlyDate(fecha = new Date()) {
      const newDate = new Date(fecha);
      newDate.setHours(0, 0, 0, 0); 
      return newDate;
    }
  
    getEdadActual(fechaNacimiento) {
      const hoy = new Date();
      let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
      const m = hoy.getMonth() - fechaNacimiento.getMonth();
  
      if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
      }
  
      return edad;
    }
  
    getDiasHastaMiCumple(fechaNacimiento) {
      const hoy = new Date();
      const cumple = new Date(hoy.getFullYear(), fechaNacimiento.getMonth(), fechaNacimiento.getDate());
  
      if (hoy > cumple) {
        cumple.setFullYear(hoy.getFullYear() + 1);
      }
  
      const diff = cumple - hoy;
      const diasRestantes = Math.ceil(diff / (1000 * 3600 * 24));
      return diasRestantes;
    }
  
    getDiaTexto(fecha, retornarAbreviacion = false) {
      const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      const diasAbrev = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
      const dia = fecha.getDay();
  
      return retornarAbreviacion ? diasAbrev[dia] : dias[dia];
    }
  
    getMesTexto(fecha, retornarAbreviacion = false) {
      const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      const mesesAbrev = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
      const mes = fecha.getMonth();
  
      return retornarAbreviacion ? mesesAbrev[mes] : meses[mes];
    }
  }
  
  export default new DateTimeHelper();
  