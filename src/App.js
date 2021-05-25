import './App.css';
import Stars from './components/Stars';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Stars count={1} />
      </div>
    </div>
  );
}
