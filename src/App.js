import logo from './logo.svg';
import './App.css';
import { Alert } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
    </div>
  );
}

export default App;
