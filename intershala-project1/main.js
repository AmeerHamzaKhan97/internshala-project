const myChart = document.getElementById('myChart').getContext('2d');

let barChart = new Chart(myChart,{
    type:'bar',
    data:{
        labels:['20', ' ','25',' ','30',' ','35','','40','','60','','65'],
        datasets:[{
            data:[,0,100,200,300,50]
            
           
        }]
    },
    options:{}
});


// $(function(){
//     $('.chart').easyPieChart({

//     })
// })
