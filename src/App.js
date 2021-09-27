import './App.css';
import { useState } from 'react';
import Slider from '@material-ui/core/Slider'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ps4 from './ps4.png'
const muiTheme = createMuiTheme({
  overrides:{
    MuiSlider: {
      root: {
        color: '#52af77',
        height: 8,
      },
      thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
          boxShadow: 'inherit',
        },
      },
      active: {},
      valueLabel: {
        left: 'calc(-50% + 4px)',
      },
      track: {
        height: 8,
        borderRadius: 4,
      },
      rail: {
        height: 8,
        borderRadius: 4,
      },
    }
}
});

function App() {
  const [price,setprice] = useState(300)
  const [value,setvalue] = useState(1)
  const valuehandler = (event,newvalue) => {
    setvalue(newvalue)
    switch(value){
      case 2:
        setprice(price=> price =600);
        break;
      case 3:
        setprice(price=> price =900);
        break;
      case 4:
        setprice(price=> price =1200);
        break;
      case 5:
        setprice(price=> price =1500);
        break;
      case 6:
        setprice(price=> price =1800);
        break;
      case 7:
        setprice(price=> price =1500);
        break;
      default:
        setprice(price=> price =300);
    }
  }
  return (
    <ThemeProvider theme={muiTheme}>
    <div className="App">
      <img src={ps4} alt="ps4" className="psimage" />
      <div className="base">
      <h2 className="h2">PS4 w/1 Controller</h2>
      <div className="words">
      <p>Easy to connect, share and play with friends</p>
      <p>1TB PS4 Console; 1 Controller; 1 Game of your choice</p>
      </div>
      <h3 className="deal">1 Month only for ₹4500 and 4 PS4 Games of your Choice </h3>
      <h3 className="h3">Tap or slide to calculate your rental</h3>
      
      <Slider
            value={value}
            onChange={valuehandler}
            className="slider"
            step={1}
            min={1}
            max={7}
            valueLabelDisplay="on"
            />
        
          <h3 className="h33">₹{price} For {value}days</h3>
          <div className="notes">
          <p>Extra controller ₹100/Day,₹500/week</p>
          <p>Extra game ₹100/Day,₹300/Week</p>
          <p className="deposit">Deposit only ₹1000 + Original Govt ID</p>
          <p className="free">Free Home Delivery</p>
          </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
