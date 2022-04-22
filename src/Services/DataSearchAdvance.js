

// export default function DataSearchAdvance(dataHolder, inputAdvanceSearch) {
//     return dataHolder.filter((data) => {
//       if (data.cust_number.toString().includes(inputAdvanceSearch.cust_number) && data.doc_id.toString().includes(inputAdvanceSearch.doc_id) && data.invoice_id.toString().includes(inputAdvanceSearch.invoice_id) && data.buisness_year.toString().includes(inputAdvanceSearch.buisness_year)) {
//         return data;
//       }
//     });
//   }
  

export default async function DataSearchAdvance(inputAdvanceSearch) {
  let res  =  await fetch('http://localhost:8080/Invoice/advancesearch' , {
    method : 'POST',
    body : new URLSearchParams({
      doc_id : inputAdvanceSearch.doc_id,
      cust_number : inputAdvanceSearch.cust_number,
      invoice_id  : inputAdvanceSearch.invoice_id,
      buisness_year : inputAdvanceSearch.buisness_year
    })
  })

  console.log(res);

  let dataHolders = await res.json();
  console.log(dataHolders)

  return dataHolders


}


  
