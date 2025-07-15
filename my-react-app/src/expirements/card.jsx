import profilePic from '../assets/twisted.png'

function Card() {

    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile picture"></img>
            <h2 className="card-title">Joel</h2>
            <p className="card-text">I study Computer Science and play Soccer</p>
        </div>
    );
}

export default Card