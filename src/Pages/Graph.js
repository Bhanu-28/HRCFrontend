import { AccumulationDataLabel, AccumulationChartComponent, AccumulationSeriesCollectionDirective, Inject, AccumulationSeriesDirective } from '@syncfusion/ej2-react-charts';
import React from 'react'

import { Bar } from 'react-chartjs-2'
import HorizontalChart from '../DemoData/HorizontalChart';
import PiChart from '../DemoData/PiChart';



export default function Graph(props) {



  // console.log("this is " , props.input['start_due_date'].length);


  return (

    <>

      <div className='grid grid-cols-1 gap-y-8'>



        {((props.input['start_due_date'].length !== 0 && props.input['end_due_date'].length !== 0) || (props.input['start_clear_date'].length != 0 && props.input['end_clear_date'].length != 0) || (props.input['start_baseline_create_date'] && props.input['end_baseline_create_date'])) ? <div class=" rounded overflow-hidden shadow-lg"><div className=''>
         <HorizontalChart end_due_in_date={props.input.end_due_date} start_due_in_date={props.input.start_due_date}
          start_clear_date={props.input.start_clear_date} end_clear_date={props.input.end_clear_date} start_baseline_create_date={props.input.start_baseline_create_date} end_baseline_create_date={props.input.end_baseline_create_date} invoice_currency={props.input.invoice_currency} /></div>
        </div> : <div></div>}


        {

          props.input.invoice_currency.length > 3 ?
            <div class=" rounded overflow-hidden shadow-lg">

              <div className='flex justify-center'>  <PiChart />   <p className='mt-8'>Graph of Invoice Currency</p>
              </div>
            </div>
            : <div></div>
        }


      </div>

    </>
  )
}
