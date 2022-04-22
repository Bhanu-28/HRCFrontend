export default function HandleChangeForAddingData(setInputs) {
    return (event) => {
  
  
  
      const name = event.target.name;
      const value = event.target.value;
  
  
  
      setInputs(values => ({ ...values, [name]: value }));
  
  
    };
  }
  