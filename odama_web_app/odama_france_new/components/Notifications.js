/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr - "Odama, you like it ! ✨"
*/

import $ from 'jquery';
import { useEffect } from 'react';

export default function Notifications() {
    function later_msg() { alert("Désolé, mais cette fonctionnalité n'est tout simplement pas encore disponible ou définie pour le moment... 😥"); }
    useEffect(() => {
        /* 💨 Get the actual liked value into database : 💨 */
        var notifications_liked_status = localStorage.getItem('notifications_liked_status');
        var notifications_disliked_status = localStorage.getItem('notifications_disliked_status');
        /* ================================================= */

        if (notifications_liked_status == undefined) { $(".like_count").html("0")} else {
            $(".like_count").html(notifications_liked_status);
            if (notifications_liked_status%2 == 0) {$(".svg_like").removeClass("active_dyn_button")} else {$(".svg_like").addClass("active_dyn_button")}
        }
        
        if (notifications_disliked_status == undefined) {$(".dislike_count").html("0")} else {
            $(".dislike_count").html(notifications_disliked_status);
            if (notifications_disliked_status%2 == 0) {$(".svg_dislike").removeClass("active_dyn_button")} else {$(".svg_dislike").addClass("active_dyn_button")}
        }

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

        $(".like_button").unbind().click(function() {
            $(".svg_dislike").removeClass("active_dyn_button");
            if (notifications_disliked_status > 0) {notifications_disliked_status -= 1}
            if (notifications_liked_status%2 == 0) {notifications_liked_status ++; $(".svg_like").addClass("active_dyn_button")} else {notifications_liked_status -= 1; $(".svg_like").removeClass("active_dyn_button")}

            /* ⛔ Update the new value to the database : ⛔ */
            localStorage.setItem('notifications_disliked_status', notifications_disliked_status);  
            localStorage.setItem('notifications_liked_status', notifications_liked_status); 
            /* ============================================= */
            $(".dislike_count").html(notifications_disliked_status)
            $(".like_count").html(notifications_liked_status)
            /* window.location.reload(); */
        });

        $(".dislike_button").unbind().click(function() {
            $(".svg_like").removeClass("active_dyn_button");
            if (notifications_liked_status > 0) {notifications_liked_status -= 1}
            if (notifications_disliked_status%2 == 0) {notifications_disliked_status ++; $(".svg_dislike").addClass("active_dyn_button")} else {notifications_disliked_status -= 1; $(".svg_dislike").removeClass("active_dyn_button")}

            /* ⛔ Update the new value to the database : ⛔ */
            localStorage.setItem('notifications_disliked_status', notifications_disliked_status); 
            localStorage.setItem('notifications_liked_status', notifications_liked_status);   
            /* ============================================= */
            $(".dislike_count").html(notifications_disliked_status)
            $(".like_count").html(notifications_liked_status)
            /* window.location.reload(); */
        });
    }, [])
    
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
                        
                            <div className='action_bar'>
                                <div className='item_selector like_button'><svg className='svg_like' viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg><p className="like_count"></p></div>
                                <div className='item_selector dislike_button'><svg className='svg_dislike' viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg><p className='dislike_count'></p></div>
                            </div>
                        </div>
                    </div>

                    <div id='events_box'>
                        {/* 🎁 Events notifications_item : 🎁 */}
                        <div className='notifications_box'>
                            <button onClick={later_msg} className="star_icon" title='Ajouter cette notification aux favoris !'><svg className="star_icon" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></button>
                            <div className='img_box'><img src="https://zupimages.net/up/23/06/nqy7.png" alt='box_icon'/></div>
                            <h1>Motivé(e) pour devenir staff ? 🏆</h1>
                            <p>Tu es intérressé(e) de rejoindre une équipe motivée, mature et compétente capable de relever tous les défis ? J'ai une bonne nouvelle pour toi : dès aujourd'hui, Odama recrute quiconque voudrais rejoindre l'aventure. Pour cela, dépose ta candidature sur le serveur Discord ou envoie juste un petit message au compte Instagram...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}