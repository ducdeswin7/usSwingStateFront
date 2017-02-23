const styles = {
    overlayStyles: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 99,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    skylightDialog: {
        backgroundColor: 'rgba(6, 13, 23, 0.85)',
        width: '90%',
        minHeight: '88%',
        height: '90%',
        left: '0',
        position: 'fixed',
        top: '1%',
        right: '0',
        marginTop: '2%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '2px',
        zIndex: 100,
        padding: '0',
        boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.4)',
        overflowY: 'auto'
    },
    title: {
        marginTop: '0'
    },
    closeButtonStyle: {
        cursor: 'pointer',
        position: 'absolute',
        fontSize: '4em',
        background: '#d9372d',
        right: '0',
        padding: "0px 15px",
        top: '0',
        color: 'white'
    }
};

export default styles;