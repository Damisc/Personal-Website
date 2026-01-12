// import { useState } from 'react'


function StockAnalysisDashboard() {

    async function runStockAnalysis () {
        alert("function called!")
    }

//   const [count, setCount] = useState(0)

  return (
    <>
    <div>
        <div id="stock-analysis-dashboard-title">STOCK ANALYSIS DASHBOARD</div>
        <div id="stock-analysis-dashboard-subtitle">
            Put in a stock you would like to analyze (e. TSLA)
        </div>
        <input id="stock-analysis-dashboard-input"></input>
        <button className="stock-analysis-dashboard-button" onClick={() => runStockAnalysis()}>Analyze</button>
        <div id="stock-analysis-dashboard-data"></div>
    </div>
    
      {/* <h1>Vite + React in stock Dashboard</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default StockAnalysisDashboard
