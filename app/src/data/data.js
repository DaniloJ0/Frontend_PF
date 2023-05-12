const allDate = {
  homeLine: {
    labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
    data: [6236, 6521, 6390, 5899, 5646, 3284, 4700, 3681],
  },
  amount: {
    heridos: "14,465",
    muertos: "306",
    atropellos: "2,014",
    choques: "11,905",
  },
};

export default allDate;

const r = {
  herido_tipo_accidente: {
    titulo: "Grafica cantidad de heridos por tipo de accidente",
    data: {
        labels: ["Choque", "Atropello", "Caida ocupante", "Volcamiento", "Otro", "Incendio"],
        valores: [11905, 2014, 224, 163, 136, 23]
    },
  },
  muerto_tipo_accidente: {
    titulo: "Grafica cantidad de muertos por tipo de accidente",
    data: {
        labels: ["Choque", "Atropello", "Caida ocupante", "Volcamiento", "Otro", "Incendio"],
        valores: [183, 109, 7, 5, 2, 0]
    },
  },
  accidentes_anio: {
    titulo: "Grafica cantidad de accidentes por año",
    data: {
        labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        valores: [6236, 6521, 6390, 5899, 5646, 3284, 4700, 3681]
        
    },
  },
  accidentes_hora: {
    titulo: "Grafica cantidad de accidentes por hora del dia",
    data: {
        labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        valores: [410, 316, 255, 271, 306, 440, 1224, 2659, 2691, 2409, 2491, 2502, 3091, 2741, 2685, 2896, 2886, 2900, 2580, 2248, 1625, 1213, 866, 652]
    },
  },
  vehiculos_accidentados_anio: {
    titulo: "Grafica cantidad de vehiculos accidentados por año",
    data: {
        labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        valores: [95278, 107660, 99734, 83741, 98171, 59526, 56915, 80415]
        
    },
  },
  accidentes_tipo_vehiculo: {
    titulo: "Grafica cantidad de accidentes por tipo de vehiculo",
    data: {
        labels: ["Oficial", "Otros", "Publico", "Particular"],
        valores: [720, 971, 31031, 51509]
        
    },
  },
  infracciones_por_tipo: {
    titulo: "Grafica cantidad de infracciones por tipo",
    data: {
        labels: ["Bloqueo calzada o interseccion", "Estacionamiento en sitio prohibido", "Exceso de velocidad", "No respetar zebra", "Transitar en sitios restringidos", "Volarse semaforo"],
        valores: [55253, 194036, 367352, 3440, 5113, 56246]
    },
  },
};

// {
//   "Primer Bloque": {
//     "Cantidad de heridos total": 14465.0,
//     "Cantidad de Muertos total en sitio de accidente": 306.0,
//     "Valor promedio de accidentes por hora del dia en totalidad": 1658.333
//   },
//   "Segunodo Bloque": {
//     "Cantidad de vehiculos accidentados": 84256,
//     "Cantidad de infracciones": 681440,
//     "Promedio de infracciones por año": 85555
//   }
// }

