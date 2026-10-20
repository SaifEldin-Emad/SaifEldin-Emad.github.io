import { createRoot } from 'react-dom/client';

const testVar = (
  <div>
    <h1>mormar</h1>
    <p>Cant</p>
  </div>
);

class Pot {
  constructor(name) {
    this.material = name;
  }
}

const glassPot = new Pot("glass");

createRoot(document.getElementById('root')).render(
  testVar
) 