import React from 'react'

function Footer() {
  return (
<footer className="footer footer-center bg-base-300 text-base-content p-4 fixed left-0 top-[690px]">
  <aside>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved by <span className='link text-violet-700'>Jaloldinov Hamidillo</span></p>
  </aside>
</footer>  )
}

export default Footer