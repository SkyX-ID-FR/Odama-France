/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr - "Odama, you like it ! ✨"
*/

import Link from "next/link";
import { useEffect } from "react";
import $ from 'jquery';

export default function LeftNav(props) {
    useEffect(() => { 
        document.getElementById(props.page_id).className = "active";         
        $("#notif_bell_button").unbind().click(function() { $("#notifications_side_bar").fadeIn(400); });
    });

    return (
        <>
            <section id="leftnav_component">
                <Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/"><img src="https://zupimages.net/up/22/28/exo5.png" className="odama_app_logo" alt="odama_app_logo"/></Link>
                <button title="Afficher le panel des notifications !" id="notif_bell_button"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg><div className="circle">2</div></button>

                <div className="main_menu">
                    <span className="indicator">Pincipal</span>
                    <ul>
                        <Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/"><li id="home_link"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>Accueil</li></Link>
                        <Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/movies/"><li id="movies_link"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" className="feather feather-film"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>Films</li></Link>
                        {/* <Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/"><li id="series_link"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" className="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>Séries</li></Link> */}
                        {/* <Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/"><li id="sport_link"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>Sport</li></Link> */}
                    </ul>

                    <span className="indicator">Utilisateur</span>
                    <ul>
                        <Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/"><li id="profile_link"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>Mon espace</li></Link>
                    </ul>

                    <span className="indicator">Avancé</span>
                    <ul>
                        <Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/"><li id="search_link"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>Rechercher</li></Link>
                        {/* <Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/"><li id="settings_link"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" className="feather feather-tool"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>Paramètres</li></Link> */}
                        <Link style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/"><li id="about_link"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" className="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>A propos</li></Link>
                    </ul>
                </div>
            </section>
        </>
    )
}
