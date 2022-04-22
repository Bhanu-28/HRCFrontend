import axios from "axios";



export default  function DatePrediction(obj) {
    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/",
      headers: {
        Authorization: ``,
        'Content-Type': 'application/json'
      },
      data: {
        business_code: obj["business_code"],
        cust_number: obj["cust_number"],
        clear_date: obj["clear_date"],
        buisness_year: obj["buisness_year"],
        doc_id: obj["doc_id"],
        posting_date: obj["posting_date"],
        business_code: obj["business_code"],
        name_customer: obj["name_customer"],
        due_in_date: obj["due_in_date"],
        baseline_create_date: obj["baseline_create_date"],
        cust_payment_terms: obj["cust_payment_terms"],
        converted_usd: obj["total_open_amount"],
      }
      
    })
      .then(res => {
        console.log("res", (res.data));
        console.log(obj);
        obj["aging_bucket"] = res.data[0].aging_bucket;
      })
      .catch(err => {
        console.log("error in request", err);
      });
  }
  