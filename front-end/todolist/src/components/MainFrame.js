import "../css/mainPage.css"
import Calendar from './Calendar';

function MainFrame(props) {
    return(
    <div className="container">
        <div className="cardContainer">
            <Calendar/>
            {props.view}
        </div>
    </div>
    )
}

export default MainFrame;