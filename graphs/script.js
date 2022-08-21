const $grafica = document.querySelector("#grafica");

const etiquetas = ["Ingresos", "Egresos", "Trabajos", "Publicidad"]

const datosIngresos = {
    label: "Desglose de ingresos",
    data: [1500, 800, 2000, 700],

    backgroundColor: [
        'rgba(163,221,203,0.2)',
        'rgba(232,233,161,0.2)',
        'rgba(230,181,102,0.2)',
        'rgba(229,112,126,0.2)',
    ],

    borderColor: [
        'rgba(163,221,203,1)',
        'rgba(232,233,161,1)',
        'rgba(230,181,102,1)',
        'rgba(229,112,126,1)',
    ],
    borderWidth: 1,
};
new Chart($grafica, {
    type: 'pie',
    data: {
        labels: etiquetas,
        datasets: [
            datosIngresos,
        ]
    },
});
