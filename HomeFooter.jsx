import React from 'react'
import "./HomeFooter.css"

function HomeFooter() {
  return (
    <div className='homeFooter'>
        <div className="footer__logo">
            <img src="http://localhost:3000/static/media/Vision.25ed811888a3714b0bd2.png" alt="" />
        </div>
        <div className="footer__container">
            <h3 className="footer__link">
                Help Centre
            </h3>
            <h3 className="footer__link">
                Jobs
            </h3>
            <h3 className="footer__link">
                Terms of Use
            </h3>
            <h3 className="footer__link">
                Privacy Policy
            </h3>
            <h3 className="footer__link">
                Contact Us
            </h3>
        </div>
        <div className="footer__end">
            <footer>© 2014-2022 <b> Vision </b>, Inc.</footer>
        </div>

    </div>
  )
}

export default HomeFooter