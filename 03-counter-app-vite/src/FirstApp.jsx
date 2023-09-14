import PropTypes from 'prop-types'

export const FirstApp = ( {
    title, 
    subTitle = "La tierra explota",
    name
} ) => {
    
    // console.log(props.title);
    return (
        <>
            <h1 data-testid="test-title"> { title } </h1>
            {/* <code>{ JSON.stringify(newMessage) }</code> */}
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    );
};


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: "David Giraldo",
    subTitle: "No hay ningún Sub titulo",
    // title: "No hay ningún titulo",
}