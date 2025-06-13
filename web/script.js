let chart;

function loadData(variable) {
  d3.csv('../data/sample_ieq.csv').then(data => {
    const labels = data.map(d => d.Timestamp);
    const values = data.map(d => +d[variable]);

    const ctx = document.getElementById('ieqChart').getContext('2d');
    if (chart) chart.destroy();
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: variable,
          data: values,
          borderColor: 'steelblue',
          fill: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true }
        },
        scales: {
          x: {
            display: true,
            title: { display: true, text: 'Timestamp' }
          },
          y: {
            display: true,
            title: { display: true, text: variable }
          }
        }
      }
    });
  });
}

window.addEventListener('load', () => {
  const select = document.getElementById('variableSelect');
  select.addEventListener('change', () => loadData(select.value));
  loadData(select.value);
});
