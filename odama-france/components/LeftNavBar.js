/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr      "Odama, you like it ! ✨"
*/

import Link from 'next/link';
import $ from 'jquery';

export default function LeftNavBar() {
  function syncDelay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
  }

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
            <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/" id="home-link">🏠 Accueil</Link></li>
            <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/discover" id="discover-link">✨ Découvrir</Link></li>
            <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/movies" id="movies-link">🎞 Films</Link></li>
            <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/series" id="series-link">🎥 Séries</Link></li>
            <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/contact" id="contact-link">✉ Contact</Link></li>
          </ul>

          <footer className='responsive_menu_footer'>
            <p>Made with <font color="red">❤</font> by @skyx_id_fr</p>
          </footer>
      </div>
      
      <section id="navbar">
        <img src="https://zupimages.net/up/22/28/exo5.png" className="odama_app_logo" alt="odama_app_logo"/>
        <img onClick={open_side_bar_menu} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png' className='menu_white_icon' alt='menu_icon'/>

        <ul className="menu_list">
          <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/" id="home-link">🏠 Accueil</Link></li>
          <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/discover" id="discover-link">✨ Découvrir</Link></li>
          <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/movies" id="movies-link">🎞 Films</Link></li>
          <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/series" id="series-link">🎥 Séries</Link></li>
          <li><Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/contact" id="contact-link">✉ Contact</Link></li>
        </ul>
      </section>
    </>
  )
}
