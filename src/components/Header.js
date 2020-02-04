import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-headphones"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Quentin Deboudt</h1>
        <p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br/>
            Labore molestiae neque sed similique sint tempora vel veritatis vitae, voluptatibus voluptatum ?
          </span>
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button onClick={() => props.onOpenArticle('about')}>Qui suis-je ?</button>
        </li>
        <li>
          <button onClick={() => props.onOpenArticle('work')}>Mes sons</button>
        </li>
        <li>
          <button onClick={() => props.onOpenArticle('contact')}>Contact</button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
