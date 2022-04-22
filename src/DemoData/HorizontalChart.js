import React from 'react'
import {
    Chart as  ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

import {Bar}  from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const options = {
    indexAxis : 'x',
    elements : {
        bar:{
            borderWidth : 2,
        }
    },
    responsive : true,
    plugin : {
        legend : {
            position : 'left',
        },
        title : {
            display : 'true',
            text : 'horizontal bar'
        }
    }
};


const   HorizontalChart = (props) => {

    const [horizontalData , setHorozontalData] = React.useState({
        labels : [
            'sun',
            'mon',
            'tue',
            'wed',
            'thu',
            'fri',
            'sat'
        ],
        datasets : [
            {
                label : 'Dataset 1',
                data : [1,2,3,4,5,6,7],
                bordercolor : 'red',
                backgroundColor : 'blue',
            },
            {
                label : 'Dataset 2',
                data : [1,2,3,4,5,6,7],
                bordercolor : 'red',
                backgroundColor : 'blue',
            }
        ]
    })

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:8081/HighWay2h/ServeletGraphDueDate' , {
                method : 'POST',
                body : new URLSearchParams({
                    start_due_in_date : props.start_due_in_date,
                    end_due_in_date  : props.end_due_in_date,
                    start_clear_date : props.start_clear_date,
                    end_clear_date : props.end_clear_date,
                    start_baseline_create_date : props.start_baseline_create_date,
                    end_baseline_create_date : props.end_baseline_create_date,
                    invoice_currency : props.invoice_currency,

            })});
            const data = await result.json();
            console.log(data);
            const label = [];
            const no_of_customer = [];
            const sum_total_open_amount =[];
            for (let i = 0 ; i < data.length ; i++) {
                label.push(data[i]['business_name']);
                no_of_customer.push(data[i]['no_of_customer']);
                sum_total_open_amount.push(data[i]['sum_total_open_amount']);
                console.log(data[i]['business_name'])
            }

            setHorozontalData({
                labels : label,
                datasets : [
                    {
                        label : 'no_of_customer',
                        data : no_of_customer,
                        bordercolor : 'red',
                        backgroundColor : '#FFE0E6',
                    },
                    {
                        label : 'sum_total_open_amount/100000',
                        data : sum_total_open_amount,
                        bordercolor : 'red',
                        backgroundColor : '#D6ECFB',
                    }
                ]
            }

            )
        }
        fetchData();
    }, []);
    return(
        
        <div className = 'h-auto w-auto' style={{width : '70%'}}>

            <Bar data ={horizontalData} options ={options} />
        </div>
    ) 
}

export default HorizontalChart;