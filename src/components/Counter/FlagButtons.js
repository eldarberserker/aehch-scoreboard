import './FlagButtons.scss';

const FlagButtons = (props) => {
    return (
        <div className="fouls">
            <strong>Faltas</strong>
            &nbsp; <i className="far fa-flag falta-leve" onClick={props.addYellowFlag}></i>
            &nbsp; <i className="far fa-flag falta-grave" onClick={props.addRedFlag}></i>
        </div>
    );
}

export default FlagButtons;