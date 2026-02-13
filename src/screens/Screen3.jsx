import { useState, useEffect } from 'react'
import FormCard from '../components/FormCard'
import './Screen3.css'

const COMPLIMENTS = [
    "You are the most beautiful Chanda in my sky 🌙",
    "You make Waiss smile like an idiot 😄",
    "You are the peace in Aashaa's Bro's chaos ❤️"
]

function Screen3({ onNext }) {
    const [visibleIndex, setVisibleIndex] = useState(-1)
    const [allShown, setAllShown] = useState(false)

    useEffect(() => {
        const timers = COMPLIMENTS.map((_, i) =>
            setTimeout(() => {
                setVisibleIndex(i)
                if (i === COMPLIMENTS.length - 1) {
                    setTimeout(() => setAllShown(true), 800)
                }
            }, (i + 1) * 1400)
        )
        return () => timers.forEach(clearTimeout)
    }, [])

    return (
        <FormCard title="Dear Aashaa ✨">
            <div className="compliments-list">
                {COMPLIMENTS.map((text, i) => (
                    <p
                        key={i}
                        className={`compliment-item ${i <= visibleIndex ? 'visible' : ''}`}
                    >
                        {text}
                    </p>
                ))}
            </div>

            {allShown && (
                <div className="button-group pop-in">
                    <button className="btn btn-primary" onClick={onNext}>
                        Okay okay… what is this about? 😏
                    </button>
                </div>
            )}
        </FormCard>
    )
}

export default Screen3
