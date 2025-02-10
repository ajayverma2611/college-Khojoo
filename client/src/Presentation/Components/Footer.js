import '../Styles/Footer.css';

const Footer = () =>{
    return (
        <footer>
            <div className="line">
            </div>

            <div className="footer-container">
                <div className="footer-left">
                    <div  className="footer-links">
                        <h1 className="footer-heading">Developers</h1>
                        <h2 className="footer-links">Sudharsan B</h2>
                        <h2 className="footer-links">Himagiri Nandan</h2>
                        <h2 className="footer-links">Ajay Verma</h2>
                    </div>
                    <div className="logo" id="first-footer">
                        <h1 >College Khojo</h1>
                    </div>
                </div>
                <div className="footer-left">
                    <div className="footer-links">
                        <h1 className="footer-heading">Pages</h1>
                        <a href="/home" className="footer-links">Home</a>
                        <a href="/#" className="footer-links">Exams</a>
                        <a href="/#" className="footer-links">Materials</a>
                        <a href="/#" className="footer-links">Help</a>
                        <a href="/#" className="footer-links">Contact Us</a>
                    </div>
                </div>
                <div id="footer-mob" className="footer-left">
                    <div className="footer-links">
                        <h1 className="footer-heading">Quick Links</h1>
                        <a href="/home" className="footer-links">About Us</a>
                        <a href="/#" className="footer-links">Profile</a>
                        <a href="/#" className="footer-links">After +2</a>
                        <a href="/#" className="footer-links">Hero</a>
                        <a href="/#" className="footer-links">Colleges</a>
                    </div>
                </div>
                <div className="footer-left">
                    <h1 className="footer-heading">Contact Us</h1>
                    <textarea className="footer-textarea" placeholder="Enter your message"></textarea>
                </div>
            </div>

            <div className="line">
            </div>
            <h1 className="footer-bottom">2025 @ Copyrights</h1>

        </footer>
    )

}


export default Footer;