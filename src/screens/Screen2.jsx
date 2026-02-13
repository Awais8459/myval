import FormCard from '../components/FormCard'

function Screen2({ onNext }) {
    return (
        <FormCard title="Aashoo… 🌙">
            <p className="question-text">
                Do you know how special you are to Waissoo?
            </p>
            <div className="button-group">
                <button className="btn btn-primary" onClick={onNext}>
                    Of course 😌
                </button>
                <button className="btn btn-secondary" onClick={onNext}>
                    Tell me more 👀
                </button>
            </div>
        </FormCard>
    )
}

export default Screen2
