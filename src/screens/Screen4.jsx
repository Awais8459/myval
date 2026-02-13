import { useState, useEffect } from 'react'
import FormCard from '../components/FormCard'
import './Screen4.css'

function Screen4({ onYes }) {
    const [phase, setPhase] = useState('intro')       // intro → countdown → proposal
    const [countdown, setCountdown] = useState(3)
    const [attempts, setAttempts] = useState(0)
    const [showMessage, setShowMessage] = useState(false)
    const [shakingNo, setShakingNo] = useState(false)
    const [popupText, setPopupText] = useState('')
    const [noHidden, setNoHidden] = useState(false)

    const NO_RESPONSES = [
        "Haha nice try Aashoo 😏",
        "That button doesn't work! 😜",
        "Still No? Waissoo is sad 🥺"
    ]

    // Start countdown on mount
    useEffect(() => {
        if (phase !== 'intro') return

        const t = setTimeout(() => setPhase('countdown'), 1200)
        return () => clearTimeout(t)
    }, [phase])

    // Countdown 3 → 2 → 1 → proposal
    useEffect(() => {
        if (phase !== 'countdown') return

        if (countdown > 0) {
            const t = setTimeout(() => setCountdown(c => c - 1), 1000)
            return () => clearTimeout(t)
        } else {
            setPhase('proposal')
        }
    }, [phase, countdown])

    // Handle NO tap
    const handleNoTap = () => {
        setShakingNo(true)
        setTimeout(() => setShakingNo(false), 500)

        const msg = NO_RESPONSES[Math.min(attempts, NO_RESPONSES.length - 1)]
        setPopupText(msg)
        setTimeout(() => setPopupText(''), 2000)

        const next = attempts + 1
        setAttempts(next)

        if (next >= 3 && !showMessage) {
            setShowMessage(true)
            setTimeout(() => setNoHidden(true), 1200)
        }
    }

    // ── INTRO ──
    if (phase === 'intro') {
        return (
            <FormCard title="So Aashaa… 💫">
                <p className="question-text">
                    There is one important question…
                </p>
            </FormCard>
        )
    }

    // ── COUNTDOWN ──
    if (phase === 'countdown') {
        return (
            <FormCard>
                <div className="countdown-number" key={countdown}>
                    {countdown === 0 ? '💖' : countdown}
                </div>
            </FormCard>
        )
    }

    // ── PROPOSAL ──
    return (
        <FormCard title="Will you be my Valentine? 💖">
            {popupText && (
                <div className="popup-message pop-in">{popupText}</div>
            )}

            {showMessage && (
                <p className="funny-message pop-in">
                    Nice try Aashoo 😌 but this website only supports YES
                </p>
            )}

            <div className="proposal-buttons">
                <button
                    className="btn btn-primary btn-yes glow"
                    onClick={onYes}
                >
                    YES ❤️
                </button>

                {!noHidden && (
                    <button
                        className={`btn btn-no ${shakingNo ? 'shake' : ''}`}
                        onClick={handleNoTap}
                    >
                        No 😏
                    </button>
                )}
            </div>

            {attempts > 0 && attempts < 3 && (
                <p className="attempts-hint">
                    {3 - attempts} attempt{3 - attempts > 1 ? 's' : ''} left… 😏
                </p>
            )}
        </FormCard>
    )
}

export default Screen4
