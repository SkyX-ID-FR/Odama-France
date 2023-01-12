/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr - "Odama, you like it ! ✨"
*/

import Link from 'next/link';
import $ from 'jquery';

export default function LeftNavBar() {
  function open_side_bar_menu() {
    $(".content_page").hide();
    $("#navbar").hide();
    $("#responsive_menu_side_bar").fadeIn(1000);
  }

  function close_side_bar_menu() {
    $(".content_page").fadeIn(1000);
    $("#navbar").show();
    $("#responsive_menu_side_bar").hide();
  }

  return (
    <>
      <div id="responsive_menu_side_bar">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/2048px-VisualEditor_-_Icon_-_Close_-_white.svg.png' className='close_white_icon' onClick={close_side_bar_menu}/>
          
          <ul>
            <li><Link  style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/" id="home-link">🏠 Accueil</Link></li>
            <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/movies" id="movies-link">🎞 Films</Link></li>
            <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/series" id="series-link">🎥 Séries</Link></li>
            <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/contact" id="contact-link">📬 Contact</Link></li><br/><br/>
            <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/search">🔍 Rechercher</Link></li>
            <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/my-profile">👤 Mon profil</Link></li>
          </ul>

          <footer className='responsive_menu_footer'>
            <p>Made with <font color="red">❤</font> by @skyx_id_fr <br/> Version Officiel BETA</p>
          </footer>
      </div>
      
      <section id="navbar">
        <img src="https://zupimages.net/up/22/28/exo5.png" className="odama_app_logo" alt="odama_app_logo"/>
        <img onClick={open_side_bar_menu} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png' className='menu_white_icon' alt='menu_icon'/>

        <ul className="menu_list">
          <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/" id="home-link">Accueil</Link></li>
          <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/movies" id="movies-link">Films</Link></li>
          <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/series" id="series-link">Séries</Link></li>
          <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/contact" id="contact-link">Contact</Link></li>
          <li id="search-link"><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/search"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></Link></li>
          <li id="profile-link"><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/my-profile"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></Link></li>
        </ul>
      </section>
    </>
  )
}
