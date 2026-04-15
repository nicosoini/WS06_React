import React from 'react';
const Footer = () => {
    const date = new Date().getFullYear();
    const footerStyle = {
        backgroundColor: 'mediumblue',
        padding: '10px',
        marginTop: '10px',
        color: 'white'
    };

    return (
        <footer style={footerStyle}>
            {/* Footer content goes here */}
            <p>Copyright &copy; JariKovis {date}</p>

        </footer>
    );
};

export default Footer;