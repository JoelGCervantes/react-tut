import PropTypes from 'prop-types'
function UserGreeting(props) {

    const WelcomeMsg = <h2 className="welcome-msg">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>

    return (props.isLoggedIn ? WelcomeMsg : loginPrompt);
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "guest",
}


export default UserGreeting