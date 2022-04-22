
export default function HandleChangeForEditingData(setInputsEdit) {
    return (event) => {
  
  
  
      const name = event.target.name;
      const value = event.target.value;
  
  
  
      setInputsEdit(values => ({ ...values, [name]: value }));
  
  
    };
  }
  