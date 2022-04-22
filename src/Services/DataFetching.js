


export default function DataFetching(setLoading, setDataHolder) {
    return async () => {
      try {
  
        setLoading(true);
        const response = await fetch('http://localhost:8080/Invoice/GetUser');
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
  