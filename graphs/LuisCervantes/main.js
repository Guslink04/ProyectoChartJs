const ctx = document.getElementById("myChart")
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
          'África',
          'América',
          'Asia',
          'Europa',
          'Oceanía'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [1300,1000, 4600,750,43],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(82,255,0)',
            'rgb(144, 0, 255)',
          ],
          hoverOffset: 4
        }]
      },

});