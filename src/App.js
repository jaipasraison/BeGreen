import logo from './logo.svg';
import FormComponent from './components/FormPageTest';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <FormComponent current_page={1}/>
    </div>
  );
}

export default App;
