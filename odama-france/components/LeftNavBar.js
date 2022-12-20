/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr      "Odama, you like it ! ✨"
*/

import Link from 'next/link'

export default function LeftNavBar() {
  return (
    <section id="navbar">
      <img src="https://zupimages.net/up/22/28/exo5.png" className="odama_app_logo" alt="odama_app_logo"/>

      <ul className="menu_list">
        <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/">🏠 Accueil</Link></li>
        <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/discover">✨ Découvrir</Link></li>
        <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/movies">🎞 Films</Link></li>
        <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/series">🎥 Séries</Link></li>
        <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/contact">✉ Contact</Link></li>
      </ul>
    </section>
  )
}
