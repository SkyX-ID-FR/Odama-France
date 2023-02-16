/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr - "Odama, you like it ! ✨"
*/

import $ from 'jquery';
import { useState, useEffect } from 'react';

export default function Notifications() {
    const [isHighlighted, setIsHighlighted] = useState(false);
    function later_msg() {alert("Désolé, mais cette fonctionnalité n'est tout simplement pas encore disponible ou définie pour le moment... 😥")};

    useEffect(() => {
        const storedValue = localStorage.getItem('love_status');
        setIsHighlighted(storedValue === 'true');
        if (storedValue == undefined) { $(".love_button").removeClass("active_dyn_button"); } else if (storedValue == "true") { $(".love_button").addClass("active_dyn_button"); } else if (storedValue == "false") { $(".love_button").removeClass("active_dyn_button"); }

        $("#events_box").hide();
        $("#close_icon_2").unbind().click(function() { $("#notifications_side_bar").fadeOut(400); });
        $(".table").unbind().click(function(event) {
            if (event.target.id == "all_target") {
                $("#all_target").addClass("active_2");
                $("#all_target_box").fadeIn("300");
                $("#events_box").hide();
                $("#event_target").removeClass("active_2");
            } else if (event.target.id == "event_target") {
                $("#event_target").addClass("active_2");
                $("#events_box").fadeIn("300");
                $("#all_target_box").hide();
                $("#all_target").removeClass("active_2");
            }   
        });
    }, [])

    function HandleLoveFunction() {
        const newIsHighlighted = !isHighlighted;
        setIsHighlighted(newIsHighlighted);
        const loveIcons = document.querySelectorAll('.love_button');
        for (let i = 0; i < loveIcons.length; i++) { loveIcons[i].classList.toggle('active_dyn_button'); }
        localStorage.setItem('love_status', newIsHighlighted);
    }
    
    return (
        <section id="notifications_side_bar">
            <div className='content_box'>
                <svg id="close_icon_2" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                <h1 className='center_title'>Centre des notifications :</h1>
                <p className='center_description'>Ici, tu peux retrouver toutes les notifications les plus importantes et les plus récentes. Si tu es un utilisateur fréquent : elles seront modifiés en fonction de tes préférences ! 😁</p>

                <div className='selector'>
                    <div id="all_target" className='table active_2'><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg> Toutes</div>
                    <div id="event_target" className='table'><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> Évenements</div>
                </div>

                <div className='notifications_list_item'>
                    <div id='all_target_box'>
                        {/* 📂 All notifications_item : 📂 */}
                        <div className='notifications_box'>
                            <button onClick={later_msg} className="star_icon" title='Ajouter cette notification aux favoris !'><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></button>
                            <div className='img_box'><img src="https://zupimages.net/up/23/06/q81u.png" alt='box_icon'/></div>
                            <h1>Bienvenue dans la nouvelle version ! 🎉</h1>
                            <p>Découvres dès maintenant la nouvelle version 1.1.2 d'Odama : avec ces nouvelles fonctionnalités et ces nouveaux ajouts, ça m'étonnerait qu'elle ne te plaise pas. En conclusion, une version qui annonce du très très lourd...</p>
                            <div className='action_bar'><div onClick={HandleLoveFunction} className='love_button'><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg><p>Tu trouves cette notification utile ?</p></div></div>
                        </div>
                    </div>

                    <div id='events_box'>
                        {/* 🎁 Events notifications_item : 🎁 */}
                        <div className='notifications_box'>
                            <button onClick={later_msg} className="star_icon" title='Ajouter cette notification aux favoris !'><svg className="star_icon" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></button>
                            <div className='img_box'><img src="https://zupimages.net/up/23/06/nqy7.png" alt='box_icon'/></div>
                            <h1>Motivé(e) pour devenir staff ? 🏆</h1>
                            <p>Tu es intérressé(e) de rejoindre une équipe motivée, mature et compétente capable de relever tous les défis ? J'ai une bonne nouvelle pour toi : dès aujourd'hui, Odama recrute quiconque voudrais rejoindre l'aventure. Pour cela, dépose ta candidature sur le serveur Discord ou envoie juste un petit message au compte Instagram...</p>
                            <div className='action_bar'><div onClick={HandleLoveFunction} className='love_button'><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg><p>Tu trouves cette notification utile ?</p></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}