
import { Box, TextField } from '@mui/material';
import React from 'react'
import ButtonDesine from '../Components/ButtonDesine';
import DesineTextBox from '../Components/DesineTextBox';
import { DialogBox } from '../Components/DialoBox';
import TextBoxDesine from '../Components/TextBoxDesine';
import AnalyticsViewSelction from './AnalyticsViewSelction';


function DialogForm(props) {
    return (<form>

        <div>
            <p>Add data</p>
        </div>

        <div className='mt-2 grid grid-cols-5 gap-2'>
            <TextBoxDesine value={props.inputs.buisness_year} name="buisness_year" label="buisness year" handleChange={props.handleChange}></TextBoxDesine>
            <TextBoxDesine value={props.inputs.cust_number} name="cust_number" label="cust number" handleChange={props.handleChange}></TextBoxDesine>
            <TextBoxDesine value={props.inputs.posting_id} name="posting_id" label="posting_id" handleChange={props.handleChange}></TextBoxDesine>
            <TextBoxDesine value={props.inputs.invoice_id} name="invoice_id" label="invoice_id" handleChange={props.handleChange}></TextBoxDesine>
            <TextBoxDesine value={props.inputs.isOpen} name="isOpen" label="isOpen" handleChange={props.handleChange}></TextBoxDesine>
            <TextBoxDesine value={props.inputs.is_deleted} name="is_deleted" label="is_deleted" handleChange={props.handleChange}></TextBoxDesine>
            <TextBoxDesine value={props.inputs.business_code} name="business_code" label="business_code" handleChange={props.handleChange}></TextBoxDesine>
            <TextBoxDesine value={props.inputs.doc_id} name="doc_id" label="doc_id" handleChange={props.handleChange}></TextBoxDesine>
            <TextBoxDesine value={props.inputs.invoice_currency} name="invoice_currency" label="invoice_currency" handleChange={props.handleChange}></TextBoxDesine>
            <TextBoxDesine value={props.inputs.document_type} name="document_type" label="document_type" handleChange={props.handleChange}></TextBoxDesine>
            <TextBoxDesine value={props.inputs.area_business} name="area_business" label="area_business" handleChange={props.handleChange}></TextBoxDesine>
            <TextBoxDesine value={props.inputs.cust_payment_terms} name="cust_payment_terms" label="cust_payment_terms" handleChange={props.handleChange}></TextBoxDesine>
            {/* <TextBoxDesine value={props.inputs.aging_bucket} name="aging_bucket" label="aging_bucket" handleChange={props.handleChange}></TextBoxDesine> */}

            {/* --------------------Sstart of date column------------------------------------------------------ */}

            <TextBoxDesine type="date" shrink={true} value={props.inputs.baseline_create_date} name="baseline_create_date" label="baseline_create_date" handleChange={props.handleChange}></TextBoxDesine>

            <TextBoxDesine type="date" shrink={true} value={props.inputs.clear_date} name="clear_date" label="clear_date" handleChange={props.handleChange}></TextBoxDesine>
            <TextBoxDesine type="date" shrink={true} value={props.inputs.posting_date} name="posting_date" label="posting_date" handleChange={props.handleChange}></TextBoxDesine>
            <TextBoxDesine type="date" shrink={true} value={props.inputs.document_create_date} name="document_create_date" label="document_create_date" handleChange={props.handleChange}></TextBoxDesine>
            <TextBoxDesine type="date" shrink={true} value={props.inputs.document_create_date1} name="document_create_date1" label="document_create_date1" handleChange={props.handleChange}></TextBoxDesine>
            <TextBoxDesine type="date" shrink={true} value={props.inputs.due_in_date} name="due_in_date" label="due_in_date" handleChange={props.handleChange}></TextBoxDesine>

            {/* -----------end of date column----------------------------------------------- */}
            <TextBoxDesine value={props.inputs.total_open_amount} name="total_open_amount" label="total_open_amount" handleChange={props.handleChange}></TextBoxDesine>
            <TextBoxDesine value={props.inputs.name_customer} name="name_customer" label="name_customer" handleChange={props.handleChange}></TextBoxDesine>
            <TextBoxDesine value={props.inputs.business_name} name="business_name" label="business_name" handleChange={props.handleChange}></TextBoxDesine>
        </div>





    </form>);
}


export default function ButtonSection(props) {
    return (<div className='flex flex-row justify-between'>


        <div className='mx-3'>
            <ButtonDesine color={'white'} handleClickOpen={props.handlePredict} disableDelete={props.predictDataBtn} variant="contained" text={"PREDICT"}></ButtonDesine>
            <ButtonDesine color={'white'} variant="outlined" handleClickOpen={props.handleOpenAnayticsView} text={"ANALYTICS VIEW"}></ButtonDesine>
            <AnalyticsViewSelction handleOpenAnayticsView={props.handleOpenAnayticsView} handleCloseAnayticsView={props.handleCloseAnayticsView} analyticsView={props.analyticsView} /> 
            <ButtonDesine color={'white'} variant="outlined" handleClickOpen={props.handleOpenAdvanceSearch} text={"ADVANCE SEARCH"}></ButtonDesine>
            <ButtonDesine  ></ButtonDesine>
            <ButtonDesine animation={props.loading ? 'animate-spin' : 'none'} variant="outlined" handleClickOpen={props.handlRefresh} text={"↻"}></ButtonDesine>
            <DialogBox dailogContent={<>
                <div>
                    <p>Advance Search</p>
                </div>
                <div className='mt-4 h-32 grid grid-cols-2 gap-7'>
                    <DesineTextBox value={props.inputAdvanceSearch.doc_id} name="doc_id" label="doc_id" handleChange={props.handleChangeAdvance}></DesineTextBox>
                    <DesineTextBox value={props.inputAdvanceSearch.invoice_id} name="invoice_id" label="invoice_id" handleChange={props.handleChangeAdvance}></DesineTextBox>
                    <DesineTextBox value={props.inputAdvanceSearch.cust_number} name="cust_number" label="cust number" handleChange={props.handleChangeAdvance}></DesineTextBox>
                    <DesineTextBox value={props.inputAdvanceSearch.buisness_year} name="buisness_year" label="buisness year" handleChange={props.handleChangeAdvance}></DesineTextBox>
                </div>
            </>} open={props.openAdvanceSearch} handleClose={props.handleCloseAdvanceSearch} handleSubmit={props.handleAdvance} btn1={'Submit'} btn2={'Cancel'}></DialogBox>
        </div>

        <Box component="form" sx={{
            '& > :not(style)': {
                m: 1,
                width: '25ch'
            }
        }} noValidate autoComplete="off">

            <TextField className='rounded-xl' variant="filled" margin="dense" onChange={props.serchFiled} style={{
                backgroundColor: 'white'
            }} id="outlined-basic" label="Seach Cutsomer number" />
        </Box>
        <div className='flex flex-col mx-3 px-6  md:flex-row'>
            <div>
                <ButtonDesine color={'white'} width="110px" variant="outlined" handleClickOpen={props.handleClickOpen} text={"ADD"}></ButtonDesine>
                <DialogBox maxWidth={false} dailogContent={<DialogForm inputs={props.inputs} handleChange={props.handleChange}></DialogForm>} open={props.open} handleClose={props.handleClose} handleSubmit={props.handleSubmit} btn1={'Add'} btn2={'Cancel'}></DialogBox>
            </div>
            <div>
                <ButtonDesine color={'white'} width="110px" variant="outlined" disableDelete={props.disableEdit} handleClickOpen={props.handleClickOpenEdit} text={"EDIT"}></ButtonDesine>
                <DialogBox dailogContent={
                    <>
                        <div>
                            <p>Edit</p>
                        </div>
                        <div className='mt-6 space-x-5'>
                            <TextBoxDesine value={props.inputsEdit.invoice_currency} name="invoice_currency" label="invoice currency" handleChange={props.handleChangeEdit}></TextBoxDesine>
                            <TextBoxDesine value={props.inputsEdit.cust_payment_terms} name="cust_payment_terms" label="cust payment terms" handleChange={props.handleChangeEdit}></TextBoxDesine>
                        </div>
                    </>
                } open={props.openEdit} handleClose={props.handleCloseEdit} handleSubmit={props.handleEdit} btn1={'Edit'} btn2={'Cancel'}></DialogBox>
            </div>

            <div>
                <ButtonDesine color={'white'} width="110px" variant="outlined" disableDelete={props.disableDelete} handleClickOpen={props.handleClickOpenDelete} text={"DELETE"}></ButtonDesine>
                <DialogBox dailogContent={<div><p>Delete Records ? </p> <p>Are you sure you want to delete these records</p></div>} open={props.openDelete} handleClose={props.handleCloseDelete} handleSubmit={props.handleDelete} btn1={'Delete'} btn2={'Cancel'}></DialogBox>
            </div>

        </div>
    </div>);
}
