import axios from "axios";

export  const DleteingData = async (Deletedata) => {
    await axios.post('http://localhost:8080/Invoice/Deleted',

      {
        params: {
          sl_no: Deletedata.sl_no,
        }
      }).then((res => {
        console.log(res);


      }));
  }

  
  //soft delete
  // const handleDelete = e => {
  //   e.preventDefault();

  //   var data = [];


  //   {
  //     selectionModel.map((row, index) => {
  //       console.log("this is row : ", row, " this is index : ", index)
  //       data = dataHolder.filter(d => d.sl_no !== row)


  //     })
  //   }

  //   setDataHolder(data)
  //   setOpenDelete(false);




  // };