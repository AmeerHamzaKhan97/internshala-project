const myChart = document.getElementById('myChart').getContext('2d');

let barChart = new Chart(myChart,{
    type:'bar',
    data:{
        labels:['20', ' ','25',' ','30',' ','35','','40','','60','','65'],
        datasets:[{
            data:[0,100,200,300,500]
            
           
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return '$' + value;
                    },
                    max: 300,
                min: 0,
                stepSize: 100
                }
            }]
        }
    }
});


// $(function(){
//     $('.chart').easyPieChart({

//     })
// })
