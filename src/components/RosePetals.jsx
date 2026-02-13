import { useMemo } from 'react'

function RosePetals() {
    const petals = useMemo(() => {
        const emojis = ['🌸', '🌺', '🪷', '💮', '🏵️']
        return Array.from({ length: 14 }, (_, i) => ({
            id: i,
            emoji: emojis[Math.floor(Math.random() * emojis.length)],
            left: Math.random() * 100,
            delay: Math.random() * 6,
            duration: 9 + Math.random() * 8,
            swayDuration: 3 + Math.random() * 2,
            size: 14 + Math.random() * 14
        }))
    }, [])

    return (
        <div className="rose-petals">
            {petals.map(p => (
                <span
                    key={p.id}
                    className="rose-petal"
                    style={{
                        left: `${p.left}%`,
                        fontSize: `${p.size}px`,
                        animationDelay: `${p.delay}s`,
                        animationDuration: `${p.duration}s, ${p.swayDuration}s`
                    }}
                >
                    {p.emoji}
                </span>
            ))}
        </div>
    )
}

export default RosePetals
