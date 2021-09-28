import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Components/MyNav';
import MyFoot from './Components/MyFoot';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <MyNav title="b00ks = &#9829;" />
      <header className="App-header">
        <Welcome greetingsName = "bööks" subTitle = "This is the greatest shop for books comrades!"/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MyFoot />
    </div>
  );
}

export default App;
