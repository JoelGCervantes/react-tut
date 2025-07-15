// This files introduces how to style REACT components with 
// CSS


function Button() {

    const styles = {
        backgroundColor: "red",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return (<button style={styles}>Click Me</button>)
}

export default Button