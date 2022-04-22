import { AppBar, Button, Dialog, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Slide from '@mui/material/Slide'
import Multiselect from 'multiselect-react-dropdown';

import { GridCloseIcon } from '@mui/x-data-grid';

import LabelTag from '../Components/LabelTag';
import Graph from './Graph';
import { PiChartData } from '../DemoData/PichartData';
import { DialogBox } from '../Components/DialoBox';
import TextBoxDesine from '../Components/TextBoxDesine';




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// const CurrencyOptions = {
//     options: [
//         { name: "USD", id: 1 },
//         { name: "CAD", id: 2 },
//     ],
// };


export default function AnalyticsViewSelction(props) {

    // const [userData , setUserData] = React.useState({
    //     labels : ['USD' , 'CAD'],
    //     datasets : [{
    //         label : "currency count",
    //         data : PiChartData.map((data) => data.currencyCount),
    //     }]
    // });



    // const [cuurencyValue, setCurrencyValue] = React.useState([]);


    const [input, setInput] = React.useState({
        start_due_date: "",
        end_due_date: "",
        start_baseline_create_date: "",
        end_baseline_create_date: "",
        start_clear_date : "",
        end_clear_date : "",
        invoice_currency : "",
    });
    



    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInput(values => ({ ...values, [name]: value }))
    }






    // const handleCurrencyChange = (selectedList, selectedItem) => {
    //     var Currency = [];
    //     for (let val = 0; val < selectedList.length; val++) {
    //         Currency.push(selectedList[val].name);
    //     }

    //     setCurrencyValue(Currency);


    // };




    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {

        console.log(input);

        alert("it is clicked")


        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };
    return (

        <>

            <DialogBox
                dailogContent={
                    <>
                        <div>
                            <p>Analytics View</p>
                        </div>

                        <div className='mt-4 grid grid-cols-2 gap-2 gap-y-11'>

                            <div className='space-y-1'>
                                <LabelTag 
                                text = {'clear date'}/>

                                <TextBoxDesine width = {'100%'} type="date" shrink={true} value={input.start_clear_date} name="start_clear_date"  handleChange={handleChange}></TextBoxDesine>
                                <TextBoxDesine width = {'100%'} type="date" shrink={true} value={input.end_clear_date} name="end_clear_date"  handleChange={handleChange}></TextBoxDesine>

                            </div>

                            <div className='space-y-1'>
                            <LabelTag 
                                text = {'Due date'}/>
                                
                                <TextBoxDesine width = {'100%'} type="date" shrink={true} value={input.start_due_date} name="start_due_date"  handleChange={handleChange}></TextBoxDesine>
                                <TextBoxDesine width = {'100%'} type="date" shrink={true} value={input.end_due_date} name="end_due_date"  handleChange={handleChange}></TextBoxDesine>


                            </div>

                            <div className='space-y-1'>
                            <LabelTag 
                                text = {'Baseline Create date'}/>
                                <TextBoxDesine width = {'100%'} type="date" shrink={true} value={input.start_baseline_create_date} name="start_baseline_create_date"  handleChange={handleChange}></TextBoxDesine>
                                
                                <TextBoxDesine width = {'100%'} type="date" shrink={true} value={input.end_baseline_create_date} name="end_baseline_create_date"  handleChange={handleChange}></TextBoxDesine>

                            </div>

                            <div>
                                <LabelTag 
                                text = {'Invoice Currency'}/>
                                <TextBoxDesine width = {'100%'} value={input.invoice_currency} name="invoice_currency" label="Invoice Currency" handleChange={handleChange}></TextBoxDesine>

                            </div>
                        </div>

                    </>


                }
                btn1={'Submit'} btn2={'Cancel'}

                open={props.analyticsView}
                handleClose={props.handleCloseAnayticsView}
                handleSubmit={handleClickOpen}
            />


            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition} >

                <AppBar sx={{ position: 'relative', backgroundColor: '#2C4250' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <GridCloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Grpah Detail
                        </Typography>

                    </Toolbar>
                </AppBar>
                {/* ------------------------------------------------------------------- */}



                <Graph input={input} />


                {/* --------------------------------------------------------------------------- */}

            </Dialog>

        </>
    )


}
