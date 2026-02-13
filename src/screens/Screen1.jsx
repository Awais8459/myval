import FormCard from '../components/FormCard'

function Screen1({ onNext }) {
    return (
        <FormCard
            title="Hi Aashaa ❤️"
            subtitle="A special message from Aashaa's Bro (Waiss)"
        >
            <p className="question-text">
                I built something special for you Chanda…
            </p>
            <div className="button-group">
                <button className="btn btn-primary" onClick={onNext}>
                    Tap to continue 💌
                </button>
            </div>
        </FormCard>
    )
}

export default Screen1
