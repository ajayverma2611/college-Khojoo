import React from 'react'
import AvailableMocktests from '../Components/AvailableMocktests'
import PerformanceChart from '../Components/AnalysisGraph'
import AttemptedMocktests from '../Components/AttemptedMocktest'

const MockTestPage = () => {
  return (
    <div>
      <AvailableMocktests />
      <PerformanceChart />
      <AttemptedMocktests />

    </div>
  )
}

export default MockTestPage
