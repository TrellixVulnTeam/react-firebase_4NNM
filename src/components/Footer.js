import React from 'react'
import {Link} from 'office-ui-fabric-react/lib/Link'
import '../_styles/Footer.css'

const Footer = () => (
  <div className="footer-container">
    {' -- Made with '}
    <span className="text-red">♥</span>
    {' by '}
    <Link href="https://github.com/crh2258">Chris House{'<@crh225>'}</Link>    
  </div>
)

export default Footer