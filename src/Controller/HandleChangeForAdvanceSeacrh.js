export default function HandleChangeForAdvanceSeacrh(setInputAdvanceSearch) {
    return (event) => {
      const name = event.target.name;
      const value = event.target.value;
  
      setInputAdvanceSearch(values => ({ ...values, [name]: value }));
    };
  }
  