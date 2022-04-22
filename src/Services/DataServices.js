import axios from "axios";


//data adding
export async function DataAdding(inputs) {
    return await fetch('http://localhost:8081/HighWay2h/ServeletInsertData', {
        method: 'POST',
        body: new URLSearchParams({
            sl_no: inputs.sl_no,
            buisness_year: inputs.buisness_year,
            cust_number: inputs.cust_number,
            posting_id: inputs.posting_id,
            invoice_id: inputs.invoice_id,
            isOpen: inputs.isOpen,
            is_deleted: inputs.is_deleted,
            business_code: inputs.business_code,
            doc_id: inputs.doc_id,
            invoice_currency: inputs.invoice_currency,
            document_type: inputs.document_type,
            area_business: inputs.area_business,
            cust_payment_terms: inputs.cust_payment_terms,
            aging_bucket: inputs.aging_bucket,
            baseline_create_date: inputs.baseline_create_date,
            clear_date: inputs.clear_date,
            posting_date: inputs.posting_date,
            document_create_date: inputs.document_create_date,
            document_create_date1: inputs.document_create_date1,
            due_in_date: inputs.due_in_date,
            total_open_amount: inputs.total_open_amount,
            name_customer: inputs.name_customer,
            business_name: inputs.business_name,
        })
    });
}


//data deleting


export const DleteingData = async (Deletedata) => {
    await axios.get('http://localhost:8080/Invoice/Deletes',

        {
            params: {
                sl_no: Deletedata
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


//data editing  
export async function DataEditing(inputsEdit) {
    return await fetch('http://localhost:8081/HighWay2h/ServeletUpdateData', {
        method: 'POST',
        body: new URLSearchParams({
            sl_no: inputsEdit.sl_no,
            invoice_currency: inputsEdit.invoice_currency,
            cust_payment_terms: inputsEdit.cust_payment_terms,
        })
    });
}


//data fetching
export function DataFetching(setLoading, setDataHolder) {
    return async () => {
        try {

            setLoading(true);
            const response = await fetch('http://localhost:8081/HighWay2h/ServeletFetchData');
            const data = await response.json();
            console.log("this is data  : ", data);
            setDataHolder(data);
            setLoading(false);
        }
        catch {
            setLoading(false);
        }
    };
}


//data advance search 
export function DataSearchAdvance(dataHolder, inputAdvanceSearch) {
    return dataHolder.filter((data) => {
        if (data.cust_number.toString().includes(inputAdvanceSearch.cust_number) && data.doc_id.toString().includes(inputAdvanceSearch.doc_id) && data.invoice_id.toString().includes(inputAdvanceSearch.invoice_id) && data.buisness_year.toString().includes(inputAdvanceSearch.buisness_year)) {
            return data;
        }
    });
}

//data  prediction
export function DatePrediction(obj) {
    axios({
        method: "POST",
        url: "http://127.0.0.1:5000/",
        headers: {
            Authorization: ``,
            'Content-Type': 'application/json'
        },
        data: [{
            sl_no: obj["sl_no"],
            buisness_year: obj["buisness_year"],
            cust_number: obj["cust_number"],
            posting_id: obj["posting_id"],
            invoice_id: obj["invoice_id"],
            isOpen: obj["isOpen"],
            is_deleted: obj["is_deleted"],
            business_code: obj["business_code"],
            doc_id: obj["doc_id"],
            invoice_currency: obj["invoice_currency"],
            document_type: obj["document_type"],
            area_business: obj["area_business"],
            cust_payment_terms: obj["cust_payment_terms"],
            aging_bucket: obj["aging_bucket"],
            baseline_create_date: obj["baseline_create_date"],
            clear_date: obj["clear_date"],
            posting_date: obj["posting_date"],
            document_create_date: obj["document_create_date"],
            document_create_date1: obj["document_create_date1"],
            due_in_date: obj["due_in_date"],
            total_open_amount: obj["total_open_amount"],
            name_customer: obj["name_customer"],
            business_name: obj["business_name"],
        }
        ]
    })
        .then(res => {
            console.log("res", (res.data));
            console.log("prediction data : ", res.data["predicted_date"]);
            console.log(typeof res.data["predicted_date"][0]);
            obj["predicted_date"] = (res.data["predicted_date"][0]).substring(0, 10);
            console.log(obj);
        })
        .catch(err => {
            console.log("error in request", err);
        });
}



