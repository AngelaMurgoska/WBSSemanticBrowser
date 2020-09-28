import React from 'react';
import UserInfoService from "../../service/userInfoService";
import './Footer.css'

const Footer = ()=> {

    //TODO fix footer overlapping content
    return(
        <footer className="custom-footer page-footer font-small blue mt-5 bg-light">
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://finki.ukim.mk">FINKI</a>
            </div>
        </footer>
    )
}

export default Footer;