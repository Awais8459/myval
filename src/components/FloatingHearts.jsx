import { useMemo } from 'react'

function FloatingHearts() {
    const hearts = useMemo(() => {
        const emojis = ['❤️', '💕', '💗', '💖', '💝', '💘', '🩷']
        return Array.from({ length: 14 }, (_, i) => ({
            id: i,
            emoji: emojis[Math.floor(Math.random() * emojis.length)],
            left: Math.random() * 100,
            delay: Math.random() * 10,
            duration: 8 + Math.random() * 7,
            size: 16 + Math.random() * 20
        }))
    }, [])

    return (
        <div className="floating-hearts">
            {hearts.map(h => (
                <span
                    key={h.id}
                    className="floating-heart"
                    style={{
                        left: `${h.left}%`,
                        fontSize: `${h.size}px`,
                        animationDelay: `${h.delay}s`,
                        animationDuration: `${h.duration}s`
                    }}
                >
                    {h.emoji}
                </span>
            ))}
        </div>
    )
}

export default FloatingHearts
