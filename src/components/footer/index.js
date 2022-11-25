import { FooterArea, FooterAreaContent } from "./styled";
import { Container } from '../mainComponents';

import Logo from '../../assets/images/res-logo.png';

const Footer = () => {
    return (
        <FooterArea>
            <Container>
                <FooterAreaContent>
                    <div className="footer-datas">
                        <div className="footer-data">
                            <img src={Logo} alt="logo" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="footer-data">
                            <div className="footer-data--title">
                                Delivery Time
                            </div>
                            <div className="footer-data--day">
                                <span className="bold">Sunday - Thursday</span>
                                <span className="margin">10:00am - 11:00am</span>
                            </div>
                            <div className="footer-data--day">
                                <span className="bold">Friday - Saturday</span>
                                <span>Off day</span>
                            </div>
                        </div>
                        <div className="footer-data">
                            <div className="footer-data--title">
                                Contact
                            </div>
                            <span style={{marginBottom: 20}}>Location: Some adress, 800, Fortaleza</span>
                            <span className="bold margin">Phone: 99999-9999</span>
                            <span className="bold margin">example@gmail.com</span>
                        </div>
                        <div className="footer-data">
                            <div className="footer-data--title">
                                Newsletter
                            </div>
                            <span className="margin">Subscribe our newsletter</span>
                            <label>
                                <input placeholder="Enter your email">
                                    
                                </input>
                                <button>Send</button>
                            </label>
                        </div>
                    </div>
                </FooterAreaContent>
            </Container>
        </FooterArea>
    )
}

export default Footer;