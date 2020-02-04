import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'

class Main extends React.Component {
    render() {
        let close = (
            <div className="close"
                 onClick={() => this.props.onCloseArticle()}></div>
        )

        return (
            <div ref={this.props.setWrapperRef}
                 id="main"
                 style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>


                {/* ABOUT */}
                <article id="about"
                         className={`${this.props.article === 'about' ? 'active' : ''} ${
                             this.props.articleTimeout ? 'timeout' : ''
                             }`}
                         style={{display: 'none'}}>
                    <h2 className="major">Qui suis-je ?</h2>
                    <span className="image main">
            <img src={pic01} alt=""/>
          </span>
                    <p>
                        Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
                        aliquam facilisis ante interdum congue. Integer mollis, nisl amet
                        convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
                        magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
                        libero eu nibh porttitor fermentum. Nullam venenatis erat id
                        vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
                        Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
                        dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
                        lectus. Pellentesque habitant morbi tristique senectus et netus et
                        malesuada fames ac turpis egestas. In non lorem sit amet elit
                        placerat maximus. Pellentesque aliquam maximus risus, vel sed
                        vehicula.
                    </p>
                    {close}
                </article>


                {/* WORK */}
                <article id="work"
                         className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>
                    <h2 className="major">Work</h2>
                    <span className="image main">
            <img src={pic02} alt=""/>
          </span>
                    <p>
                        <iframe width="100%"
                                height="300"
                                scrolling="no"
                                frameBorder="no"
                                allow="autoplay"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/723315721&color=%23050505&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                        Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
                        at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
                        urna nisi, fringila lorem et vehicula lacinia quam. Integer
                        sollicitudin mauris nec lorem luctus ultrices.
                    </p>
                    <p>
                        Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                        libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                        Pellentesque condimentum sem. In efficitur ligula tate urna.
                        Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
                        Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
                        libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
                        tempus.
                    </p>
                    {close}
                </article>

                {/* CONTACT */}
                <article id="contact"
                         className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>
                    <h2 className="major">Contact</h2>

                    <div>
                        <p>Email: lorem@ipsum.com</p>
                        <p>Tel: 06.22.23.24.25</p>
                    </div>

                    <ul className="icons">
                        <li>
                            <a href="#"
                               className="icon fa-twitter">
                                <span className="label">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="icon fa-facebook">
                                <span className="label">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="icon fa-instagram">
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
    setWrapperRef: PropTypes.func.isRequired,
}

export default Main
