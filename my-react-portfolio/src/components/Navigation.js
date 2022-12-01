const styles = {
    ul: {
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'space-between'
    }
}

function Navigation() {

    return (
        <ul style={styles.ul}>
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Resume</li>
        </ul>
    )
}

export default Navigation