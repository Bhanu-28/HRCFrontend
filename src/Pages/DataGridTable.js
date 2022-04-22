
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { HeadCells } from '../DemoData/DataHead'
import ButtonSection from './ButtonSection';
import AnalyticsViewSelction from './AnalyticsViewSelction';
import DataFetching from '../Services/DataFetching';
import { DleteingData } from '../Services/DeletingData';
import DataEditing from '../Services/DataEditing';
import DataAdding from '../Services/DataAdding';
import DatePrediction from '../Services/DatePrediction';
import DataSearchAdvance from '../Services/DataSearchAdvance';
import HandleChangeForAddingData from '../Controller/HandleChangeForAddingData';
import HandleChangeForEditingData from '../Controller/HandleChangeForEditingData';
import HandleChangeForAdvanceSeacrh from '../Controller/HandleChangeForAdvanceSeacrh';


export default function DataGridTable() {

  const [refresh , setRefresh] =  React.useState(false);
  const [pageSize, setPageSize] = React.useState(10);
  const [dataHolder, setDataHolder] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openAdvanceSearch, setOpenAdcanceSearch] = React.useState(false);
  const [disableDelete, setdisableDelete] = React.useState(true);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [disableEdit, setdisableEdit] = React.useState(true);
  const [analyticsView, setAnalyticsView] = React.useState(false);
  const [predictDataBtn, setPredictDataBtn] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    sl_no: "",
    buisness_year: "",
    cust_number: "",
    posting_id: "",
    invoice_id: "",
    isOpen: "",
    is_deleted: "",
    business_code: "",
    doc_id: "",
    invoice_currency: "",
    document_type: "",
    area_business: "",
    cust_payment_terms: "",
   // aging_bucket: "",
    baseline_create_date: "",
    clear_date: "",
    posting_date: "",
    document_create_date: "",
    document_create_date1: "",
    due_in_date: "",
    total_open_amount: "",
    name_customer: "",
    business_name: "",

  });
  const [inputAdvanceSearch, setInputAdvanceSearch] = React.useState({
    doc_id: "",
    cust_number: "",
    invoice_id: "",
    buisness_year: ""
  })

  const [inputsEdit, setInputsEdit] = React.useState({
    sl_no: "",
    invoice_currency: "",
    cust_payment_terms: ""
  });




  React.useEffect(() => {
    loadData();
  
  }, [refresh])

  //for fetcing data from java servelet or api
  const loadData = DataFetching(setLoading, setDataHolder)

  const handlRefresh = () => {
    setRefresh(!refresh);
  }


//for adding data 
  const handleClickOpen = () => {
    setOpen(true);

    const maxValueSl_no = Math.max(...dataHolder.map(o => o.sl_no), 0);
    inputs.sl_no = maxValueSl_no + 1;

    console.log(inputs);

  };


  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleOpenAdvanceSearch = () => {
    setOpenAdcanceSearch(true);
  }

  const handleCloseAdvanceSearch = () => {
    setOpenAdcanceSearch(false);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  }


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenAnayticsView = () => {
    console.log(analyticsView);
    setAnalyticsView(true)
  }
  const handleCloseAnayticsView = () => {
    setAnalyticsView(false);
  }

  const handleClickOpenEdit = () => {
    
    setOpenEdit(true);
    const obj = dataHolder.find(o => o.sl_no === selectionModel[0])
    console.log("section model ", obj);
    inputsEdit.invoice_currency = obj['invoice_currency']
    inputsEdit.cust_payment_terms = obj['cust_payment_terms']
    inputsEdit.sl_no = obj['sl_no']

  }

  //preding of redicted_date is done here
  const handlePredict =  e => {

    alert("prdict");
    
    for (var i = 0; i < selectionModel.length; i++) {
      console.log("this is selection model : ", selectionModel[i]);

      console.log(selectionModel[i]);
      const obj = dataHolder.find(o => o.sl_no === selectionModel[i]);
      console.log("predict data : ", obj);

      //obj of each data using for loop then in dataprediction in each obj is sent to flask with api where data is predicted
      DatePrediction(obj);
    }
  }



  //here the search field value is set
  const serchFiled = (event) => {

    setSearch(event.target.value)

  }


  //this handle change is for adding data
  const handleChange = HandleChangeForAddingData(setInputs)

  //this handle change is for advnace search
  const handleChangeAdvance = HandleChangeForAdvanceSeacrh(setInputAdvanceSearch)

  //this handle change is for editing data
  const handleChangeEdit = HandleChangeForEditingData(setInputsEdit)


  //new data is inserted from here
  const handleSubmit = async e => {
    e.preventDefault();
    //console.log(inputs);

    //all input data in sent to dataAdding.js and from there data added using java servelet or api
    const response = await DataAdding(inputs)
    console.log(response);
    if (!response.ok) {
      alert("data not inserted")
    }
    else {
      alert("data inserted successfully");
    }


    setOpen(false);
    //window.location.reload(false)
    setRefresh(!refresh);


  };


  //advance seacrch is handle here 
  const handleAdvance = async e => {
    e.preventDefault();
    console.log(inputAdvanceSearch);
    alert("this is advance search section");


    //advance search is handle here using filter method in datasearchadvance.js
    const AdvanceSearchData = await DataSearchAdvance(inputAdvanceSearch)
    console.log(AdvanceSearchData);

    if (AdvanceSearchData.length !== 0) {
      setDataHolder(AdvanceSearchData);
    }else{
      alert("no data");
    }

    setOpenAdcanceSearch(false);
    

  }

  //data editing is handle here of inovice currency and cust_payement_terms
  const handleEdit = async e => {
    e.preventDefault();
    console.log(inputsEdit);

    //inputedit is sent to dataediting where data is edited using java servelet or api
    const response = await DataEditing(inputsEdit)

    if (!response.ok) {
      alert("data not edited")
    }
    else {
      alert("data edited successfully");
    }
    setOpenEdit(false);

    setRefresh(!refresh);

   // window.location.reload(false)
  }



  //hard delete
  const handleDelete = e => {
    e.preventDefault();


    console.log("selection omodel : ", selectionModel);
    let Deletedata = "";


    for (var data in selectionModel) {
      console.log("this is data  : ", selectionModel[data]);
      Deletedata = Deletedata.concat(selectionModel[data], " ");
    }

    //sending deletdata to DeletingData.js to delete the data using java servelet or api
    DleteingData(Deletedata);


    setOpenDelete(false);
    setRefresh(!refresh);
   // loadData();

    //window.location.reload(false) //need to change this 




  };







  return (
    <>
      
        <div className='py-9' style={{ backgroundColor: "#273D4A" }} >
          <ButtonSection handleChangeAdvance={handleChangeAdvance} handleAdvance={handleAdvance}
            open={open} openAdvanceSearch={openAdvanceSearch} openDelete={openDelete}
            disableDelete={disableDelete} openEdit={openEdit} disableEdit={disableEdit}
            inputs={inputs} inputsEdit={inputsEdit} inputAdvanceSearch={inputAdvanceSearch}
            handleClickOpen={handleClickOpen} handleClickOpenDelete={handleClickOpenDelete}
            handleCloseDelete={handleCloseDelete} handleClose={handleClose}
            handleClickOpenEdit={handleClickOpenEdit} handleCloseEdit={handleCloseEdit}
            serchFiled={serchFiled} handleChange={handleChange} handleChangeEdit={handleChangeEdit}
            handleSubmit={handleSubmit} handleEdit={handleEdit} handleDelete={handleDelete}
            handleCloseAdvanceSearch={handleCloseAdvanceSearch} handleOpenAdvanceSearch={handleOpenAdvanceSearch}
            handleOpenAnayticsView={handleOpenAnayticsView} handleCloseAnayticsView={handleCloseAnayticsView}
            handlePredict={handlePredict} predictDataBtn={predictDataBtn} handlRefresh = {handlRefresh}
            loading = {loading} analyticsView = {analyticsView}
          >

          </ButtonSection>

          <div className='mb-11' style={{ width: '100%' }}>
            <div style={{ display: 'flex', height: '100%' }}>
              <div style={{ flexGrow: 1 }}>

                <DataGrid sx={{
                  '& .MuiTablePagination-root': {
                    color: 'white'
                  },
                }} style={{
                  backgroundColor: '#273D4A',
                  color: 'white'
                }} rowHeight={40} autoHeight rows={dataHolder.filter((data) => {
                  if (search === "") {

                    return data
                  }
                  else if (data.cust_number.toString().includes(search)) {

                    return data;
                  }
                })} getRowId={row => row.sl_no} columns={HeadCells} columnVisibilityModel
                  onPageChange={(newPage) => setPage(newPage)}
                  pageSize={pageSize}
                  loading={loading}
                  onSelectionModelChange={(newSelectionModel) => {

                    { newSelectionModel.length === 1 ? setdisableEdit(false) : setdisableEdit(true) }
                    { newSelectionModel.length > 0 ? setdisableDelete(false) : setdisableDelete(true) }
                    { newSelectionModel.length > 0 ? setPredictDataBtn(false) : setPredictDataBtn(true) }
                    setSelectionModel(newSelectionModel);

                  }}
                  selectionModel={selectionModel}
                  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                  rowsPerPageOptions={[5, 10, 20, 30]}
                  disableColumnFilter={true}
                  disableColumnSelector={true}

                  pagination
                  checkboxSelection />
              </div>
            </div>
          </div>
        </div>
      </>
  )




}






