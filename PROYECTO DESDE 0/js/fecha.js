var fecha_actual = new Date();
var dia=fecha_actual.getDate();
var mes=fecha_actual.getMonth()+1;
var año=fecha_actual.getUTCFullYear();
document.write(dia+` / `+mes+` / `+año);
