import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
<footer className="footer footer-center bg-base-300 text-base-content p-4  fixed bottom-0">
  <aside>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved by <Link to="https://github.com/hamidillojaloldinov/" className='link link-primary'>Jaloldinov Hamidillo</Link></p>
  </aside>
</footer>  )
}

export default Footer