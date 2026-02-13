import { useState } from 'react'
import './App.css'
import FloatingHearts from './components/FloatingHearts'
import Sparkles from './components/Sparkles'
import RosePetals from './components/RosePetals'
import Confetti from './components/Confetti'
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Screen3 from './screens/Screen3'
import Screen4 from './screens/Screen4'
import FinalScreen from './screens/FinalScreen'

function App() {
  const [step, setStep] = useState(1)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showPetals, setShowPetals] = useState(false)

  const nextStep = () => setStep(prev => prev + 1)

  const handleYes = () => {
    setShowConfetti(true)
    setShowPetals(true)
    nextStep()

    // Send email notification
    try {
      fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ valentineAccepted: true })
      })
    } catch (error) {
      console.log('Email send attempted')
    }
  }

  const renderScreen = () => {
    switch (step) {
      case 1: return <Screen1 onNext={nextStep} />
      case 2: return <Screen2 onNext={nextStep} />
      case 3: return <Screen3 onNext={nextStep} />
      case 4: return <Screen4 onYes={handleYes} />
      case 5: return <FinalScreen />
      default: return <Screen1 onNext={nextStep} />
    }
  }

  return (
    <div className="app">
      <FloatingHearts />
      <Sparkles />
      {showPetals && <RosePetals />}
      {showConfetti && <Confetti />}

      <div className="screen-wrapper" key={step}>
        {renderScreen()}
      </div>
    </div>
  )
}

export default App
