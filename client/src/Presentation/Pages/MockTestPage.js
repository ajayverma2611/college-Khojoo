import React from 'react'
import AvailableMocktests from '../Components/AvailableMocktests'
import PerformanceChart from '../Components/AnalysisGraph'
import AttemptedMocktests from '../Components/AttemptedMocktest'
import ResumeTests from '../Components/ResumeTests'
const MockTestPage = () => {
  return (
    <div>
      <AvailableMocktests />
      <ResumeTests/>
      <PerformanceChart />
      <AttemptedMocktests />

    </div>
  )
}

export default MockTestPage
