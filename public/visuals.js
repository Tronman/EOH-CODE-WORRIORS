      
google.setOnLoadCallback(drawRegionsMap);
      
function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable([
        ['State', 'Province', 'Incidents'],
        ['ZA-GP', 'Gauteng', 10],
        ['ZA-WC', 'Western Cape', 5],
        ['ZA-EC', 'Eastern Cape', 2],
        ['ZA-NL', 'KwaZulu Natal', 1],
        ['ZA-FS', 'Free State', 1],
        ['ZA-LP', 'Limpopo', 6],
        ['ZA-NW', 'North-West', 10],
        ['ZA-MP', 'Mpumalanga', 34],
        ['ZA-NC', 'Northern Cape', 21], 
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