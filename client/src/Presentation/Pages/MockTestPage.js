import React from 'react'
import AvailableMocktests from '../Components/AvailableMocktests'
import PerformanceChart from '../Components/AnalysisGraph'

const MockTestPage = () => {
  return (
    <div>
      <AvailableMocktests />
      <PerformanceChart />
    </div>
  )
}

export default MockTestPage
