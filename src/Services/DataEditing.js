
export default async function DataEditing(inputsEdit) {
    return await fetch('http://localhost:8080/Invoice/Edit', {
      method: 'POST',
      body: new URLSearchParams({
        sl_no: inputsEdit.sl_no,
        invoice_currency: inputsEdit.invoice_currency,
        cust_payment_terms: inputsEdit.cust_payment_terms,
      })
    });
  }
  
  