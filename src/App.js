
  
import AnalyticsViewSelction from './Pages/AnalyticsViewSelction';
import DataGridTable from './Pages/DataGridTable';
import Footer from './Pages/Footer';
import Header from './Pages/Header';

function App() {
  return (
    // <AnalyticsViewSelction/>

      <div className='flex flex-col '>
        {/* <DataDisplayTable/> */}
        <Header className=""/>
        <DataGridTable className = ""/>
        <Footer className =""/>
      </div>
  );
}

export default App;
