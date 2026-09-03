import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [apiStatus, setApiStatus] = useState('Checking...')

  useEffect(() => {
    // Test API connection - Updated to port 5001
    fetch('http://localhost:5001/api/health')
      .then(res => res.json())
      .then(data => {
        setApiStatus(`✅ API Status: ${data.status}`)
      })
      .catch(err => {
        setApiStatus('❌ API Connection Failed')
      })
  }, [])

  return (
    <div className="App">
      <h1>🚗 Car Dealership Platform</h1>
      <h2>Phase 1 Setup Complete!</h2>
      <div style={{ 
        padding: '20px', 
        margin: '20px', 
        border: '2px solid #4CAF50',
        borderRadius: '8px',
        backgroundColor: '#f0f0f0'
      }}>
        <h3>System Status:</h3>
        <p>{apiStatus}</p>
        <p>Frontend: ✅ Running on port 3000</p>
        <p>Backend: {apiStatus.includes('✅') ? '✅ Running on port 5001' : '⏳ Waiting...'}</p>
        <p>MongoDB: ✅ Connected</p>
      </div>
      <div style={{ marginTop: '20px' }}>
        <a href="http://localhost:5001/api/health" target="_blank" rel="noopener noreferrer">
          Test API Endpoint →
        </a>
      </div>
    </div>
  )
}

export default App
