import './FormCard.css'

function FormCard({ children, title, subtitle }) {
    return (
        <div className="form-card">
            {title && <h1 className="form-card-title">{title}</h1>}
            {subtitle && <p className="form-card-subtitle">{subtitle}</p>}
            <div className="form-card-content">
                {children}
            </div>
        </div>
    )
}

export default FormCard
