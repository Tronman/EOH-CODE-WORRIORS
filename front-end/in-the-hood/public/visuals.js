      
google.setOnLoadCallback(drawRegionsMap);
      
function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable([
        ['State', 'Province', 'Incidents'],
        ['ZA-GP', 'Gauteng', 100],
        ['ZA-WC', 'Western Cape', 45],
        ['ZA-EC', 'Eastern Cape', 123],
        ['ZA-NL', 'KwaZulu Natal', 173],
        ['ZA-FS', 'Free State', 206],
        ['ZA-LP', 'Limpopo', 69],
        ['ZA-NW', 'North-West', 150],
        ['ZA-MP', 'Mpumalanga', 94],
        ['ZA-NC', 'Northern Cape', 241]
    ]);	

    var options = {
        datalessRegionColor: '#123456',
        region: "ZA",
        resolution: "provinces",
        colorAxis: {
            colors: ['#DB964D', '#f36b22']
        },
        defaultColor: '#d3d3d3',
        keepAspectRatio: true,
        backgroundColor: {
            fill: 'transparent',
        }};

    var chart = new google.visualization.GeoChart(document.getElementById('southAfrica'));
    chart.draw(data, options);
}