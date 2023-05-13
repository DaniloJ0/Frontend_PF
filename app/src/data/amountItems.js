import full_data from "./data";

const dataFull = {
  bloque_1: [
    {
      cantidad: full_data.amount.primer_bloque.heridos,
      titulo: "Cantidad de heridos",
      porcentaje: -45,
      logoName: "herido_64.png",
    },
    {
      cantidad: full_data.amount.primer_bloque.muertos,
      titulo: "Cantidad de muertos",
      porcentaje: -21,
      logoName: "muerte_64.png",
    },
    {
      cantidad: full_data.amount.primer_bloque.atropellos,
      titulo: "Cantidad de atropellos",
      porcentaje: -11,
      logoName: "atropello_64.png",
    },
    {
      cantidad: full_data.amount.primer_bloque.choques,
      titulo: "Cantidad de choques",
      porcentaje: -4,
      logoName: "auto_64.png",
    },
  ],
  bloque_2: [
    {
      cantidad: full_data.amount.segundo_bloque.vehiculos.cantidad,
      titulo: full_data.amount.segundo_bloque.vehiculos.titulo,
      porcentaje: -4,
      logoName: "cantidad_vehiculo_64.png",
    },
    {
      cantidad: full_data.amount.segundo_bloque.infracciones.cantidad,
      titulo: full_data.amount.segundo_bloque.infracciones.titulo,
      porcentaje: 4,
      logoName: "infraccion_64.png",
    },
    {
      cantidad: full_data.amount.segundo_bloque.infracciones_year.cantidad,
      titulo: full_data.amount.segundo_bloque.infracciones_year.titulo,
      porcentaje: -4,
      logoName: "promedio_64.png",
    },
  ]};

export default dataFull;
