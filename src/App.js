import logo from './logo.svg';
import './App.css';
import Card from 'Card'



function App() {

    return (
        <div className="App">

            <Card name='batool maali' job='full stack developer' about='React is an open-source,
     front end, JavaScript library for building user interfaces or UI components. It is maintained by
      Facebook and a community of individual developers and companies' img="imgs/p6.png"/>

            <Card name='sara adas' job='full stack developer' about='React is an open-source,
     front end, JavaScript library for building user interfaces or UI components. It
     is maintained by Facebook and a community of individual developers and companies' img="imgs/p4.png"/>
            <Card name='laith elenooz' job={'full stack developer'} about='React is an open-source,
    front end, JavaScript library for building user interfaces or UI components.
      It is maintained by Facebook and a community of individual developers and companies' img="imgs/p3.png"/>
            <Card name='Sadi Ashlaq' job={'full stack developer'} about='React is an open-source, front end,
     JavaScript library for building user interfaces or UI components. It is maintained by
      Facebook and a community of individual developers and companies' img="imgs/p33.png"/>
        </div>
    );
}

export default App;