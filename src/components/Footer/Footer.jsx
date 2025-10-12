import "./Footer.css";

function Footer() {
    return (
        <footer className="footer-container">
            <section className="footer-privacy">
                <p>
                    Privacystatement: XXXXX
                </p>
            </section>
            <section className="footer-cookies">
                <p>
                    Cookiebeleid: XXXXX
                </p>

                <address className="footer-info">
                    <p>
                        KVK-nummer: XXXXX
                    </p>
                    <p>
                        Vestigingadres: XXXXX
                    </p>
                    <p>
                        E-mail: scribbelsdierenverhaaltjes@gmail.com
                    </p>
                    <p>
                        ©2025 Scribbels.nl
                    </p>
                </address>
            </section>
        </footer>
    );
}

export default Footer;