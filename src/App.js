import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onClick = () => {
    const url = `https://www.mmu.edu.my/?s=${value}&post_type=courses`;
    window.open(url, '_blank', 'noopener,noreferrer')
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ padding: '8px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-chat-left-quote-fill" viewBox="0 0 16 16">
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"/>
          </svg>
        </div>
        <label style={{ fontWeight: 600, fontSize: '32px', marginBottom: '8px' }}>
          Enrolment Agent
        </label>
        <text style={{ fontSize: '16px' }}>
          by <b>Darren Emir Hazmy </b> (1181302886)
        </text>
        <text style={{ marginTop: '32px', fontSize: '12px' }}>
          Search MMU courses here
        </text>
        <input
          type="text"
          value={value}
          onChange={onChange}
          style={{ margin: '16px', borderRadius: '8px', background: 'white', padding: '12px', width: '300px' }}
        />
        <button
          onClick={onClick}
          style={{ width: '300px', height: '30px', borderRadius: '8px', fontSize: '10px', color: '#282c34', fontWeight: 600, backgroundColor: 'white' }}
        >
          SEARCH
        </button>
        <div style={{ position: 'fixed', bottom: 0, left: 0, margin: '24px' }}>
          <svg width="100" height="100" viewBox="-1 -1 31 31" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" id="qr code">
            <rect id="qr background" fill-opacity="1" fill="rgb(255, 255, 255)" x="-1" y="-1" width="31" height="31"></rect>
             <path fill-opacity="1" fill="rgb(0, 0, 0)" id="qr dark pixels" fill-rule="evenodd" d="M 10 0 L 11 0 L 11 1 L 10 1 z M 15 0 L 16 0 L 16 3 L 15 3 L 15 4 L 17 4 L 17 5 L 16 5 L 16 6 L 15 6 L 15 8 L 14 8 L 14 9 L 15 9 L 15 11 L 14 11 L 14 14 L 15 14 L 15 15 L 18 15 L 18 18 L 16 18 L 16 17 L 15 17 L 15 16 L 14 16 L 14 18 L 13 18 L 13 17 L 11 17 L 11 16 L 12 16 L 12 15 L 13 15 L 13 13 L 12 13 L 12 14 L 10 14 L 10 12 L 9 12 L 9 11 L 10 11 L 10 10 L 11 10 L 11 9 L 12 9 L 12 8 L 13 8 L 13 7 L 14 7 L 14 6 L 13 6 L 13 7 L 12 7 L 12 6 L 11 6 L 11 7 L 10 7 L 10 5 L 12 5 L 12 3 L 13 3 L 13 5 L 14 5 L 14 1 L 15 1 zM 11 11 L 12 11 L 12 12 L 11 12 z M 19 0 L 20 0 L 20 1 L 21 1 L 21 3 L 20 3 L 20 2 L 19 2 z M 9 1 L 10 1 L 10 2 L 9 2 z M 17 1 L 18 1 L 18 2 L 17 2 z M 8 2 L 9 2 L 9 3 L 8 3 z M 11 2 L 12 2 L 12 3 L 11 3 z M 18 2 L 19 2 L 19 3 L 20 3 L 20 5 L 21 5 L 21 8 L 23 8 L 23 10 L 25 10 L 25 11 L 24 11 L 24 12 L 23 12 L 23 11 L 22 11 L 22 12 L 23 12 L 23 14 L 25 14 L 25 12 L 26 12 L 26 17 L 27 17 L 27 18 L 25 18 L 25 15 L 21 15 L 21 14 L 20 14 L 20 13 L 21 13 L 21 12 L 18 12 L 18 14 L 16 14 L 16 13 L 15 13 L 15 11 L 16 11 L 16 12 L 17 12 L 17 11 L 20 11 L 20 10 L 22 10 L 22 9 L 17 9 L 17 7 L 18 7 L 18 8 L 19 8 L 19 7 L 20 7 L 20 6 L 19 6 L 19 4 L 18 4 z M 9 3 L 10 3 L 10 5 L 9 5 z M 17 5 L 18 5 L 18 6 L 17 6 z M 8 6 L 9 6 L 9 9 L 10 9 L 10 10 L 8 10 L 8 12 L 7 12 L 7 11 L 6 11 L 6 10 L 7 10 L 7 9 L 6 9 L 6 10 L 5 10 L 5 9 L 4 9 L 4 8 L 8 8 z M 16 6 L 17 6 L 17 7 L 16 7 z M 18 6 L 19 6 L 19 7 L 18 7 z M 11 7 L 12 7 L 12 8 L 11 8 z M 0 8 L 3 8 L 3 9 L 2 9 L 2 10 L 3 10 L 3 11 L 2 11 L 2 12 L 0 12 L 0 10 L 1 10 L 1 9 L 0 9 z M 26 8 L 27 8 L 27 9 L 26 9 z M 3 9 L 4 9 L 4 10 L 3 10 z M 16 9 L 17 9 L 17 10 L 16 10 z M 25 9 L 26 9 L 26 10 L 25 10 z M 28 9 L 29 9 L 29 11 L 28 11 L 28 12 L 29 12 L 29 15 L 28 15 L 28 16 L 29 16 L 29 19 L 28 19 L 28 20 L 27 20 L 27 18 L 28 18 L 28 17 L 27 17 L 27 14 L 28 14 L 28 13 L 27 13 L 27 11 L 26 11 L 26 10 L 28 10 z M 4 10 L 5 10 L 5 11 L 4 11 z M 3 11 L 4 11 L 4 12 L 3 12 z M 2 12 L 3 12 L 3 14 L 4 14 L 4 13 L 5 13 L 5 12 L 7 12 L 7 13 L 6 13 L 6 14 L 7 14 L 7 13 L 9 13 L 9 15 L 6 15 L 6 16 L 3 16 L 3 17 L 2 17 L 2 18 L 1 18 L 1 16 L 0 16 L 0 15 L 2 15 L 2 14 L 0 14 L 0 13 L 2 13 z M 6 16 L 7 16 L 7 17 L 6 17 z M 8 16 L 10 16 L 10 17 L 8 17 z M 20 16 L 21 16 L 21 17 L 22 17 L 22 16 L 23 16 L 23 18 L 22 18 L 22 19 L 21 19 L 21 18 L 20 18 z M 4 17 L 5 17 L 5 18 L 8 18 L 8 19 L 6 19 L 6 20 L 5 20 L 5 19 L 4 19 z M 10 17 L 11 17 L 11 18 L 10 18 z M 0 18 L 1 18 L 1 19 L 0 19 z M 12 18 L 13 18 L 13 19 L 12 19 z M 18 18 L 19 18 L 19 19 L 20 19 L 20 20 L 18 20 L 18 21 L 20 21 L 20 23 L 18 23 L 18 25 L 19 25 L 19 26 L 22 26 L 22 28 L 21 28 L 21 29 L 19 29 L 19 27 L 18 27 L 18 29 L 16 29 L 16 28 L 15 28 L 15 27 L 17 27 L 17 26 L 16 26 L 16 25 L 13 25 L 13 23 L 14 23 L 14 24 L 16 24 L 16 20 L 14 20 L 14 21 L 13 21 L 13 19 L 18 19 z M 1 19 L 2 19 L 2 20 L 1 20 z M 3 19 L 4 19 L 4 20 L 3 20 z M 9 19 L 10 19 L 10 20 L 9 20 z M 11 19 L 12 19 L 12 20 L 11 20 z M 23 19 L 24 19 L 24 20 L 23 20 z M 25 19 L 26 19 L 26 20 L 25 20 z M 0 20 L 1 20 L 1 21 L 0 21 z M 2 20 L 3 20 L 3 21 L 2 21 z M 4 20 L 5 20 L 5 21 L 4 21 z M 6 20 L 9 20 L 9 21 L 10 21 L 10 22 L 9 22 L 9 24 L 10 24 L 10 26 L 9 26 L 9 25 L 8 25 L 8 21 L 6 21 z M 12 21 L 13 21 L 13 23 L 12 23 z M 26 21 L 29 21 L 29 24 L 28 24 L 28 23 L 27 23 L 27 22 L 26 22 z M 10 22 L 11 22 L 11 23 L 12 23 L 12 24 L 10 24 z M 25 22 L 26 22 L 26 24 L 25 24 z M 27 24 L 28 24 L 28 25 L 29 25 L 29 27 L 28 27 L 28 26 L 26 26 L 26 25 L 27 25 z M 12 25 L 13 25 L 13 26 L 12 26 z M 24 25 L 25 25 L 25 26 L 26 26 L 26 27 L 25 27 L 25 29 L 24 29 L 24 27 L 23 27 L 23 26 L 24 26 z M 8 26 L 9 26 L 9 27 L 10 27 L 10 26 L 11 26 L 11 27 L 12 27 L 12 28 L 11 28 L 11 29 L 10 29 L 10 28 L 9 28 L 9 29 L 8 29 z M 13 26 L 14 26 L 14 29 L 12 29 L 12 28 L 13 28 z M 27 27 L 28 27 L 28 28 L 29 28 L 29 29 L 27 29 z"></path><path id="qr squares" d="M0,0h7h0v0v7v0h0h-7h0v0v-7v0h0zM1,1h5h0v0v5v0h0h-5h0v0v-5v0h0zM2,2h3h0v0v3v0h0h-3h0v0v-3v0h0z M22,0h7h0v0v7v0h0h-7h0v0v-7v0h0zM23,1h5h0v0v5v0h0h-5h0v0v-5v0h0zM24,2h3h0v0v3v0h0h-3h0v0v-3v0h0z M0,22h7h0v0v7v0h0h-7h0v0v-7v0h0zM1,23h5h0v0v5v0h0h-5h0v0v-5v0h0zM2,24h3h0v0v3v0h0h-3h0v0v-3v0h0zM20,20h5h0v0v5v0h0h-5h0v0v-5v0h0zM21,21h3h0v0v3v0h0h-3h0v0v-3v0h0zM22,22h1h0v0v1v0h0h-1h0v0v-1v0h0z" fill-rule="evenodd" fill-opacity="1" fill="rgb(0, 0, 0)"></path></svg>
        </div>
      </header>
    </div>
  );
}

export default App;
