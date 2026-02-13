import { useMemo } from 'react'

function Sparkles() {
    const sparkles = useMemo(() =>
        Array.from({ length: 18 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 6,
            duration: 2 + Math.random() * 3,
            size: 8 + Math.random() * 14
        })), []
    )

    return (
        <div className="sparkles">
            {sparkles.map(s => (
                <span
                    key={s.id}
                    className="sparkle"
                    style={{
                        left: `${s.left}%`,
                        top: `${s.top}%`,
                        fontSize: `${s.size}px`,
                        animationDelay: `${s.delay}s`,
                        animationDuration: `${s.duration}s`
                    }}
                >
                    ✨
                </span>
            ))}
        </div>
    )
}

export default Sparkles
