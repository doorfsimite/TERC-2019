import React, {useCallback, Component} from 'react';
import Header from './Components/Header';
import "./styles.css";
import api from "./services/api";
import Chart from './graphics/Chart';
import Button from 'simple-react-button';
import YourComponent from './Components/Header/botao_que_pega';
import Led_on from './Components/Header/botao_que_pega';
import Led_off from './Components/Header/botao_que_dispega';


class App extends Component {
  constructor() {
    super();
    this.state = {
      registros: [],
      chartData: {}
    }
  }
  
  componentDidMount() {
    this.loadProducts();
  }
  
  loadProducts = async () => {
    const response = await api.get("/completo");
    console.log(response.data)
    this.setState({ registros: response.data })

    var vet_sensor = []
    var vet_tempo = [];
    for(let i = 0; i < response.data.length; i++) {
      vet_sensor.push(response.data[i].valor_sensor);
      vet_tempo.push(response.data[i].tempo);
    }

    console.log(vet_sensor)
    this.setState({
      chartData: {
        labels: vet_tempo,
        datasets: [
          {
            label: 'PH',
            data: vet_sensor,
            backgroundColor: [
              'rgba(0, 0, 200, 0.5)'
            ]
          }
        ]
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Header/>
        {this.state.chartData ? <Chart chartData={this.state.chartData} /> : null }
        
        <div className="led">

          <div className="botao_ligar">
            <Led_on />
          </div>
          <div className="botao_desligar">
            <Led_off />
          </div>

        </div>
      </div>
    );
  }
}


/*const App = () => (
  
  <div className = "App">
    <Header />
    <Main /> 


   
  </div>
);*/


export default App;
