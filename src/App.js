import BarChart from './components/BarChart';
import CustomChart from './components/CustomChart';
import LineChart from './components/LineChart';
import Navbar from './components/Navbar';
import PieChart from './components/PieChart';
import PokeCon from './components/PokeCon';
import RadarChart from './components/RadarChart';

function App() {
  return (
    <div className="primarycon">
      <Navbar/>
      <div className='bodycontainer'>
      <PokeCon/>
      <PokeCon/>
      <LineChart/>
      <BarChart/>
      <PieChart/>
      <RadarChart/>
      <CustomChart/>
      </div>

    </div>
  );
}

export default App;
