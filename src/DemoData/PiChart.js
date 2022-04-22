import React from 'react'

import { Chart as ChartJS, Tooltip, Title, ArcElement, Legend } from 'chart.js';


import { Pie } from 'react-chartjs-2'
ChartJS.register(
    Tooltip, Title, ArcElement, Legend
);



export default function PiChart() {

    const [piData, setPiData] = React.useState(
        {
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: ['red', 'blue', 'green']
            },

            ],


            labels: [
                'Red',
                'Yellow',
                'Blue'
            ]
        }
    );

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:8081/HighWay2h/ServeletGraphInvoiceCurrency');
            const data = await result.json();

            const label = []
            const datavalue = []
            for (let key in data.data) {
                label.push(key)
                datavalue.push(data.data[key])
            }

            setPiData(
                {
                    datasets: [{
                        data: datavalue,
                        backgroundColor: ['#FFE0E6', '#D6ECFB']
                    },

                    ],


                    labels: label
                }
            )
        }
        fetchData();
    }, []);
    return (
        <div style={{ width: '30%', height: '30%' }}>
            <Pie data={piData} />
        </div>
    )
}
