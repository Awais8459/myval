import { useMemo } from 'react'

const COLORS = [
    '#ff758f', '#ff8fab', '#ffb3c6', '#ffd6e0',
    '#ff6b9d', '#c9184a', '#ff4d6d', '#ffccd5',
    '#f8bbd9', '#ff69b4', '#ff1493', '#db7093',
    '#ffd700', '#ffec8b'
]
const SHAPES = ['square', 'circle', 'triangle']

function Confetti() {
    const pieces = useMemo(() =>
        Array.from({ length: 80 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
            delay: Math.random() * 2,
            duration: 2 + Math.random() * 3,
            swayDuration: 0.5 + Math.random() * 1,
            size: 8 + Math.random() * 10
        })), []
    )

    return (
        <div className="confetti-container">
            {pieces.map(p => (
                <div
                    key={p.id}
                    className={`confetti-piece ${p.shape}`}
                    style={{
                        left: `${p.left}%`,
                        backgroundColor: p.shape !== 'triangle' ? p.color : 'transparent',
                        borderBottomColor: p.shape === 'triangle' ? p.color : undefined,
                        width: p.shape !== 'triangle' ? `${p.size}px` : 0,
                        height: p.shape !== 'triangle' ? `${p.size}px` : 0,
                        borderLeftWidth: p.shape === 'triangle' ? `${p.size / 2}px` : undefined,
                        borderRightWidth: p.shape === 'triangle' ? `${p.size / 2}px` : undefined,
                        borderBottomWidth: p.shape === 'triangle' ? `${p.size}px` : undefined,
                        animationDelay: `${p.delay}s`,
                        animationDuration: `${p.duration}s, ${p.swayDuration}s`
                    }}
                />
            ))}
        </div>
    )
}

export default Confetti
