const allDate = {
  amount: {
    primer_bloque: {
      heridos: "14,465",
      muertos: "306",
      atropellos: "2,014",
      choques: "11,905",
      "Valor promedio de accidentes por hora del dia en totalidad": 1658.333,
    },
    segundo_bloque: {
      vehiculos: {
        cantidad: "84,256",
        titulo: "Cantidad de vehiculos accidentados",
      },
      infracciones: {
        cantidad: "681,440",
        titulo: "Cantidad de infracciones",
      },
      infracciones_year: {
        cantidad: "85,555",
        titulo: "Promedio de infracciones por año",
      },
    },
  },
  herido_tipo_accidente: {
    titulo: "Cantidad de heridos por tipo de accidente",
    data: {
      labels: [
        "Choque",
        "Atropello",
        "Caida ocupante",
        "Volcamiento",
        "Otro",
        "Incendio",
      ],
      valores: [11905, 2014, 224, 163, 136, 23],
    },
  },
  muerto_tipo_accidente: {
    titulo: "Cantidad de muertos por tipo de accidente",
    data: {
      labels: [
        "Choque",
        "Atropello",
        "Caida ocupante",
        "Volcamiento",
        "Otro",
        "Incendio",
      ],
      valores: [183, 109, 7, 5, 2, 0],
    },
  },
  accidentes_anio: {
    titulo: "Cantidad de accidentes por año",
    data: {
      labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
      valores: [6236, 6521, 6390, 5899, 5646, 3284, 4700, 3681],
    },
  },
  accidentes_hora: {
    titulo: "Cantidad de accidentes por hora del dia",
    data: {
      labels: [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
      ],
      valores: [
        410, 316, 255, 271, 306, 440, 1224, 2659, 2691, 2409, 2491, 2502, 3091,
        2741, 2685, 2896, 2886, 2900, 2580, 2248, 1625, 1213, 866, 652,
      ],
    },
  },
  accidentes_tipo_vehiculo: {
    titulo: "Cantidad de accidentes por tipo de vehiculo",
    data: {
      labels: ["Oficial", "Otros", "Publico", "Particular"],
      valores: [720, 971, 31031, 51509],
    },
  },
  infracciones_por_tipo: {
    titulo: "Cantidad de infracciones por tipo",
    data: {
      labels: [
        "Bloqueo calzada o interseccion",
        "Estacionamiento en sitio prohibido",
        "Exceso de velocidad",
        "No respetar zebra",
        "Transitar en sitios restringidos",
        "Volarse semaforo",
      ],
      valores: [55253, 194036, 367352, 3440, 5113, 56246],
    },
  },
  cantidad_infracciones: {
    titulo: "Cantidad de infracciones",
    data: {
      labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
      valores: [95278, 107660, 99734, 83741, 98171, 59526, 56915, 80415],
    },
  },
  heridos_tipo_dia: {
    titulo: "Heridos Diurnos/Nocturnos",
    data: {
      labels: ["Diurno", "Nocturno"],
      valores: [12253, 5798],
    },
  },
  muertos_tipo_dia: {
    titulo: "Muertos Diurnos/Nocturnos",
    data: {
      labels: ["Diurno", "Nocturno"],
      valores: [292, 270],
    },
  },
  accidentes_categoria: {
    titulo: "Proporcion de accidentes por categoria",
    data: {
      labels: ["Solo daños", "Con Muertos", "Con Heridos"],
      valores: [18051, 19475, 562],
    },
  },
  heridos_geometria_via: {
    titulo: "Cantidad de heridos por geometria de via",
    data: {
      labels: ["Curva derecha", "Curva izquierda", "Recta"],
      valores: [2115, 1967, 7024],
    },
  },
  muertos_geometria_via: {
    titulo: "Cantidad de muertos por geometria de via",
    data: {
      labels: ["Curva derecha", "Curva izquierda", "Recta"],
      valores: [402, 354, 1252],
    },
  },
  promedio_heridos_meteorologia: {
    titulo: "Promedio de heridos por condiciones metereologicas",
    data: {
      labels: ["Granizo", "Lluvia", "Niebla", "Normal", "Seca", "Sol", "Viento"],
      valores: [1, 0.519076, 0.4, 0.60472, 0.636571, 0.687962, 0.494845],
    },
  },
  heridos_terreno: {
    titulo: "Numero de heridos por terreno",
    data: {
      labels: ["Escarpado", "Montañoso", "Ondulado", "Plano"],
      valores: [302, 3380, 1921, 5503], 
    },
  },
  heridos_year:{
    titulo: "Numero de heridos por año",
    data: {
      labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
      valores: [1083, 1012,1242,2541,2217,1543,2088,2739], 
    },
  },
  heridos_mes:{
    titulo: "Numero de heridos por mes",
    data: {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      valores: [1129, 1182,1291,956,1164,1009,1117,1280,1260,1367,1326,1404], 
    },
  },
  acc_diurno_nocturno:{
    titulo: "Numero de accidentes en horarios diurno y nocturno",
    data: {
      labels: ["Diurno", "Nocturno"],
      valores: [27032, 11165], 
    },
  }
};

export default allDate;
