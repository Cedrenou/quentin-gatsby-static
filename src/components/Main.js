import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'

class Main extends React.Component {
    render() {
        let close = (
            <div className="close" onClick={() => this.props.onCloseArticle()}></div>
        )

        return (
            <div
                ref={this.props.setWrapperRef}
                id="main"
                style={this.props.timeout
                ? {
                    display: 'flex'
                }
                : {
                    display: 'none'
                }}>

                {/* ABOUT */}
                <article
                    id="about"
                    className={`${this.props.article === 'about'
                    ? 'active'
                    : ''} ${this.props.articleTimeout
                        ? 'timeout'
                        : ''}`}
                    style={{
                    display: 'none'
                }}>
                    <h2 className="major">Qui suis-je ?</h2>
                    <span className="image main">
                        <img src={pic01} alt=""/>
                    </span>
                    <p>
                        Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam
                        facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor
                        magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam
                        maximus erat id euismod egestas.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum
                        facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum.
                        Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies
                        condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
                        dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                        turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque
                        aliquam maximus risus, vel sed vehicula.
                    </p>
                    {close}
                </article>

                {/* WORK */}
                <article
                    id="work"
                    className={`${this.props.article === 'work'
                    ? 'active'
                    : ''} ${this.props.articleTimeout
                        ? 'timeout'
                        : ''}`}
                    style={{
                    display: 'none'
                }}>
                    <h2 className="major">Mes sons</h2>
                    <span className="image main">
                        <iframe
                            width="100%"
                            height="300"
                            scrolling="no"
                            frameBorder="no"
                            allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/659259596&color=%23050505&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

                        <hr className="divider"></hr>

                        <iframe
                            width="100%"
                            height="300"
                            scrolling="no"
                            frameBorder="no"
                            allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/653291855&color=%23050505&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

                    </span>
                    <p>
                        Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend
                        sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem
                        et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
                    </p>
                    <p>
                        Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris
                        aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In
                        efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque
                        lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                        sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
                        tempus.
                    </p>
                    {close}
                </article>

                {/* CONTACT */}
                <article
                    id="contact"
                    className={`${this.props.article === 'contact'
                    ? 'active'
                    : ''} ${this.props.articleTimeout
                        ? 'timeout'
                        : ''}`}
                    style={{
                    display: 'none'
                }}>
                    <h2 className="major">Contact</h2>

                    <div>
                        <ul className='icons'>
                            <li>
                                <a
                                    href="https://www.youtube.com/channel/UCKSYmx-Rg2VpEc_KwKJVjdA"
                                    target='_blank'
                                    className="icon fa-envelope">
                                    <span className="label">Mon Email: lorem@ipsum.com</span>
                                </a>
                            </li>
                        </ul>

                        <p>Mon Tel: 06.22.23.24.25</p>
                    </div>

                    <form
                        method="post"
                        name="contact form"
                        action="/"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        data-netlify-recaptcha="true">

                        <input type="hidden" name="form-name" value="contact form"/>

                        <p style={{display: 'none'}}>
                            <label>Don’t fill this out if you're human:
                                <input name="bot-field"/></label>
                        </p>

                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="contact-name" id="name"/>
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="contact-email" id="email"/>
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="contact-message" id="message" rows="4"></textarea>
                        </div>
                        <ul className="actions">
                            <li>
                                <input type="submit" value="Send Message" className="special"/>
                            </li>
                            <li>
                                <input type="reset" value="Reset"/>
                            </li>
                        </ul>

                        <div data-netlify-recaptcha="true"></div>

                    </form>

                    <ul className="icons">
                        <li>
                            <a
                                href="https://www.youtube.com/channel/UCKSYmx-Rg2VpEc_KwKJVjdA"
                                target='_blank'
                                className="icon fa-youtube-play">
                                <span className="label">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/beatbox.vd/"
                                target='_blank'
                                className="icon fa-instagram">
                                <span className="label">Instagram</span>
                            </a>
                        </li>
                    </ul>
                    {close}
                </article>
            </div>
        )
    }
}

Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired
}

export default Main
