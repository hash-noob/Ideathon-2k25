// Fill Level Trends (Bar Chart)
const fillLevelCtx = document.getElementById('fillLevelChart').getContext('2d');
new Chart(fillLevelCtx, {
  type: 'bar',
  data: {
    labels: ['District A', 'District B', 'District C', 'District D'],
    datasets: [{
      label: 'Fill Level (%)',
      data: [75, 40, 60, 90],
      backgroundColor: ['#36a2eb', '#ff6384', '#4bc0c0', '#ff9f40'],
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});

// Collection Efficiency (Line Graph)
const collectionEfficiencyCtx = document.getElementById('collectionEfficiencyChart').getContext('2d');
new Chart(collectionEfficiencyCtx, {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Collection Efficiency (%)',
      data: [85, 88, 92, 95],
      borderColor: '#36a2eb',
      fill: false,
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});

// Recycling Rates (Pie Chart)
const recyclingRatesCtx = document.getElementById('recyclingRatesChart').getContext('2d');
new Chart(recyclingRatesCtx, {
  type: 'pie',
  data: {
    labels: ['Recyclable', 'Non-Recyclable'],
    datasets: [{
      data: [65, 35],
      backgroundColor: ['#4bc0c0', '#ff6384'],
    }]
  }
});