export default async function DataAdding(inputs) {
    return await fetch('http://localhost:8080/Invoice/Add', {
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
       // aging_bucket: inputs.aging_bucket,
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