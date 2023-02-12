/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr - "Odama, you like it ! ✨"
*/

import Head from 'next/head';
import LeftNav from 'components/LeftNav.js';
import ResponsiveNav from 'components/ResponsiveNav';
import { useEffect } from 'react';
import $ from "jquery";
import Notifications from 'components/Notifications';

export default function Home() {
  console.clear(); 
  console.log("The new Odama© Web Application has just been launched ! ✨");

  useEffect(() => {
    document.getElementById("event_box_1").style.display = "none";
    document.getElementById("event_box_2").style.display = "none";
    document.getElementById("event_box_3").style.display = "block";
    document.getElementById("event_box_4").style.display = "none";
    document.getElementById("event_box_5").style.display = "none";
    $(".feather-bookmark").unbind().click(function() { alert("Désolé, mais cette fonctionnalité n'est tout simplement pas encore disponible ou définie pour le moment... 😥"); });

    $(".item").on('click', function(event) {
      const old_item = $(".active_item").get(0).id;
      document.getElementById(old_item).classList.remove("active_item");
      document.getElementById(event.currentTarget.id).classList.add("active_item");
      if (event.currentTarget.id == "item_1") { $("#event_box_1").fadeIn(600); document.getElementById("event_box_2").style.display = "none"; document.getElementById("event_box_3").style.display = "none"; document.getElementById("event_box_4").style.display = "none"; document.getElementById("event_box_5").style.display = "none"; } else if (event.currentTarget.id == "item_2") { document.getElementById("event_box_1").style.display = "none"; $("#event_box_2").fadeIn(600); document.getElementById("event_box_3").style.display = "none"; document.getElementById("event_box_4").style.display = "none"; document.getElementById("event_box_5").style.display = "none"; } else if (event.currentTarget.id == "item_3") { document.getElementById("event_box_1").style.display = "none"; document.getElementById("event_box_2").style.display = "none"; $("#event_box_3").fadeIn(600); document.getElementById("event_box_4").style.display = "none"; document.getElementById("event_box_5").style.display = "none"; } else if (event.currentTarget.id == "item_4") { document.getElementById("event_box_1").style.display = "none"; document.getElementById("event_box_2").style.display = "none"; document.getElementById("event_box_3").style.display = "none"; $("#event_box_4").fadeIn(600); document.getElementById("event_box_5").style.display = "none"; } else if (event.currentTarget.id == "item_5") { document.getElementById("event_box_1").style.display = "none"; document.getElementById("event_box_2").style.display = "none"; document.getElementById("event_box_3").style.display = "none"; document.getElementById("event_box_4").style.display = "none"; $("#event_box_5").fadeIn(600); }
    });
  });

  return (
    <>
      <Head>
        <title>Odama France 🔥</title>
        <meta name="description" content="Odama© est la seule plateforme de streaming 100% cloud, sécurisée et open-source en France ! 🇫🇷"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="https://zupimages.net/up/22/28/k6tc.png"/>
      </Head>
      
      <LeftNav page_id="home_link"/>
      <ResponsiveNav page_id_responsive="home_link_responsive"/>
      <Notifications/>
      
      <section id="right_content_page">
        <h1 className='welcome_title'>Bienvenue sur Odama France ! <img className='popcorn_icon' src="https://cdn3d.iconscout.com/3d/premium/thumb/popcorn-bowl-4375600-3632391.png?f=avif" alt='popcorn_icon'/></h1>
        <p className='welcome_description'>Tu kiff le cinéma, les films et les séries ? Alors t'es au bon endroit, du streaming cloud et local comme tu n'en as jamais vu : zéro pubs, zéro bugs et un flux en HD minimum, donc zéro excuses pour ne pas y rester pendant des heures et des heures... Le cinéma a changé. Finit les dizaines d'abonnements pour des dizaines de plateformes (sans citer de noms) : retrouves maintenant tous tes programmes dans un seul et même endroit : Odama ! Rien n'est terminé, ça vient de commencer... 😉</p>
        <div className='button_donations_box'>
          <a href="https://www.buymeacoffee.com/skyxidfr" target="_blank"><button id="coffee"><img src="https://masterspot-volley.com/wp-content/uploads/2021/01/bmc-logo-white.png"/>Buy me a coffee</button></a>
          <a href="https://www.paypal.com/paypalme/skyxidfr" target="_blank"><button id="paypal"><img src="https://cdn-icons-png.flaticon.com/512/174/174861.png"/>Donations Paypal</button></a>
        </div>

        <div className='calendar_box'>
          <div className='selector'>
            <div id="item_1" className='item'><h1>07</h1><p>Février</p><div className='circle'></div></div>
            <div id="item_2" className='item'><h1>14</h1><p>Février</p><div className='circle'></div></div>
            <div id="item_3" className='item active_item'><h1>20</h1><p>Février</p><div className='circle'></div></div>
            <div id="item_4" className='item'><h1>03</h1><p>Mars</p><div className='circle'></div></div>
            <div id="item_5" className='item'><h1>17</h1><p>Mars</p><div className='circle'></div></div>
          </div>

          <div id="event_box_1">
            <div className='event_item'>
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              <span>#dev · Le Mardi 7 Février 2023</span>
              <h1>La nouvelle version est en cours ! ✨</h1>
              <p>Après de longues et difficiles décisions, toute l'équipe d'Odama France peut t'annoncer officielement la sortie de la prochaine version et ça annonce du très très lourd !</p>
              <div className='authors'>
                <img src="https://avatars.githubusercontent.com/u/89273191?v=4" alt="user_post_pic"/>
                <p>Publié par l'administrateur officiel : @SkyX_ID_FR 👨</p>
              </div>
            </div>
          </div>
          
          <div id="event_box_2">
            <div className='event_item'>
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              <span>#movies · Le Mardi 14 Février 2023</span>
              <h1>Ajout de nouveaux films ! 🎬</h1>
              <p>A partir de cette date, tous les films d'Odama France seront syncronisés avec une liste pré-définis qui contiendra tous les prochains films qui sortent au cinéma !</p>
              <div className='authors'>
                <img src="https://avatars.githubusercontent.com/u/89273191?v=4" alt="user_post_pic"/>
                <p>Publié par l'administrateur officiel : @SkyX_ID_FR 👨</p>
              </div>
            </div>
          </div>

          <div id="event_box_3">
            <div className='event_item'>
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              <span>#version #news · Le Lundi 20 Février 2023</span>
              <h1>Sortie de la version 1.0 ! 🎉</h1>
              <p>Enfin ! La voilà ! La première "vraie" version d'Odama qui va te faire tourner la tête avec ses multiples nouvelles fonctionnalités et ajouts...</p>
              <div className='authors'>
                <img src="https://avatars.githubusercontent.com/u/89273191?v=4" alt="user_post_pic"/>
                <p>Publié par l'administrateur officiel : @SkyX_ID_FR 👨</p>
              </div>
            </div>
          </div>

          <div id="event_box_4">
            <div className='event_item'>
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              <span>#series · Le Mecredi 3 Mars 2023</span>
              <h1>Ajout des séries ! 🎈</h1>
              <p>A partir de cette date, un paquet de séries françaises et internationales vont être ajoutés et notés sur la plateforme : dont celles qui ont le plus de succès sous les grandes enseignes !</p>
              <div className='authors'>
                <img src="https://avatars.githubusercontent.com/u/89273191?v=4" alt="user_post_pic"/>
                <p>Posté par l'administrateur officiel : @SkyX_ID_FR 👨</p>
              </div>
            </div>
          </div>

          <div id="event_box_5">
            <div className='event_item'>
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              <span>#sport #news · Le Vendredi 17 Mars 2023</span>
              <h1>Ajout du sport ! ⚽</h1>
              <p>A partir de cette date, Odama France sera fier de t'annoncer qu'elle pourra diffuser plus de 25 chaînes de sport en continu avec comme deux sports principaux : le football et le basket.</p>
              <div className='authors'>
                <img src="https://avatars.githubusercontent.com/u/89273191?v=4" alt="user_post_pic"/>
                <p>Posté par l'administrateur officiel : @SkyX_ID_FR 👨</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
