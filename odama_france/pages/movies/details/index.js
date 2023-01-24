/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr - "Odama, you like it ! ✨"
*/

import Head from 'next/head';
import { useEffect } from 'react'; 
import fsPromises from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import $ from 'jquery';
import Loader from '../../../components/Loader';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'pages/movies/details/movies.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return { props: objectData }
}

export default function DetailsMoviesPage(props) {
  const movies_data = props.all_movies;

  /* ⌛ Launch Loading Function Screen : ⌛ */
  useEffect(function() {
    $("#movies_details_section").hide();
    setTimeout(function(){
      $("#loader_screen").hide();
      $("#movies_details_section").fadeIn(800);
      $("#player_1").hide();
    }, 1500);

    $("#add_movies_toast").hide(); 
    $("#remove_movies_toast").hide(); 
    const movie_id = localStorage.getItem('item_id');
    const general_movie_data = movies_data[movie_id];

    /* 📬 If no array is initialized, then do it and save it in the browser's localstorage : 📬 */
    if (JSON.parse(localStorage.getItem('list_movies_liked')) == null) {
      let list_movies_liked = [];
      localStorage.setItem('list_movies_liked', JSON.stringify(list_movies_liked));
    } 

    const list_movies_liked = JSON.parse(localStorage.getItem('list_movies_liked'));
    $("#love_icon").click(function() { 
      if (list_movies_liked.indexOf(movie_id) == -1) {
        /* 📢 If this movie is liked, then add it to the library : 📢 */
        list_movies_liked.push(movie_id);
        localStorage.setItem('list_movies_liked', JSON.stringify(list_movies_liked));

        /* Also change the color of love_icon : */
        document.getElementById("love_icon").style.color = "red";
        $("#add_movies_toast").show();
        $("#add_movies_toast").animate({bottom: '50px'}), 5000;

        setTimeout(function(){
          $("#add_movies_toast").fadeOut(500);
        }, 5500);
      } else {        
        /* 📢 Else you delete it : 📢 */
        const id_to_remove = list_movies_liked.indexOf(movie_id);
        list_movies_liked.splice(id_to_remove, 1);
        localStorage.setItem('list_movies_liked', JSON.stringify(list_movies_liked));

        /* Also change the color of love_icon : */
        document.getElementById("love_icon").style.color = "white";
        $("#remove_movies_toast").show();
        $("#remove_movies_toast").animate({bottom: '50px'}), 5000;

        setTimeout(function(){
          $("#remove_movies_toast").fadeOut(500);
        }, 5500);
      }
    });

    /* ✨ Then, we complete the different variables in the page : ✨ */
    if (list_movies_liked.indexOf(movie_id) !== -1) { document.getElementById("love_icon").style.color = "red"; } else { document.getElementById("love_icon").style.color = "white"; }
    document.getElementById("movies_details_section").style.backgroundImage = `url(${general_movie_data.background})`;
    document.getElementById("movie_poster").src = `${general_movie_data.poster}`;
    document.getElementById("movie_title").innerHTML = `${general_movie_data.title}`;
    document.getElementById("trailer_container").innerHTML = `<a href='${general_movie_data.trailer}' target="_blank"><button id="trailer_button"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/YouTube_social_white_squircle.svg/1200px-YouTube_social_white_squircle.svg.png" alt="app_logo"/><p>Voir la bande-annonce VF !</p></button></a>`;
    document.getElementById("synopsis").innerHTML = `${general_movie_data.synopsis}`;
    document.getElementById("download_button").href = general_movie_data.download; 
    document.getElementById("player_1").src = general_movie_data.source[0];
    document.getElementById("player_2").src = general_movie_data.source[1];
    document.getElementById("duration").innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${general_movie_data.duration}`;
    document.getElementById("tags").innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg> ${general_movie_data.tags}`;
    document.getElementById("year").innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> ${general_movie_data.year}`;
  }, []);

  function close_add_movies_toast() { $("#add_movies_toast").fadeOut(500); }
  function close_remove_movies_toast() { $("#remove_movies_toast").fadeOut(500); }
  function open_movie_popup() { $("#movie_watch_popup").fadeIn(200); }
  function close_movie_popup() {  
    $("#movie_watch_popup").fadeOut(400); 
    $('#player_2').attr('src', $('#player_2').attr('src'));
  }

  function change_player(e) {
    if (e.target.checked == true) {
      $("#player_1").show(); 
      $("#player_2").hide(); 
      $('#player_2').attr('src', $('#player_2').attr('src'));
    } else {
      $("#player_2").show(); 
      $("#player_1").hide(); 
    }
  }

  return (
    <>
      <Head>
        <title>Odama France - Détails 🔥</title>
        <meta name="description" content="Odama est la seule plateforme de streaming 100% cloud, sécurisée et open-source en France ! 🇫🇷"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="https://zupimages.net/up/22/28/k6tc.png"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <Loader/>

      <section id='movies_details_section'>  
        <Link className='back_link' style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/movies"><img className='back_icon' src='https://svgur.com/i/p5L.svg'/><p>Revenir à tout les films</p></Link>
        <div id="love_icon"><i className="fa fa-heart"></i></div>

        <div className='movies_infos'>
          <div id='content'>
            <div className='poster_box'><img src='' id="movie_poster" alt='movie_poster'/></div>

            <div className='short_infos_box'>
              <h1 id="movie_title"></h1>
              <div className="tags_box">
                <span id="duration"></span>
                <span id="tags"></span>
                <span id="year"></span>
              </div>

              <p id="synopsis"></p>
              <button onClick={open_movie_popup} id="watch_button"><img src="https://zupimages.net/up/22/28/exo5.png" alt="app_logo"/><p>Voir ce film avec Odama !</p></button>
              <div id='trailer_container'></div>
            </div>

            <div className='bottom_box'></div>
          </div>
        </div>

        {/* 🎥 Watch Popup Movie : 🎥 */}
        <div id='movie_watch_popup'>
          <img onClick={close_movie_popup} id="popup_close_icon" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/2048px-VisualEditor_-_Icon_-_Close_-_white.svg.png' alt="close_icon"/>
          {/* <video controlsList="nodownload" oncontextmenu="return false;" controls id="player_1" className="popup_player"><source src="" type="video/mp4"/></video> */}
          <iframe id="player_1" className="popup_player" src="" scrolling="no" frameborder="0" allowFullScreen/>
          <iframe id="player_2" className="popup_player" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"/>

          <div id='player_changed'>
            <label onChange={change_player}  class="switch"><input id="test" type="checkbox"/><div></div></label>
            <p>Changement de players MP4 Host/TM 🎥</p>
          </div>

          <div className='action_group'>
            <a href='' id="download_button" target="_blank"><svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Télécharger</a>
            {/* Todo : add new tips/actions here ! 📂 */}
          </div>
        </div> 
        
        {/* <h1 id="movie_title"></h1>
        <p id="short_infos"></p>
        <div id='productors'><img id="profile_pic" src=''/><p id="name"></p></div>

        <div className='movies_infos'>
          <div className='content'>
            <h1 id="synopsis_title">Synopsis :</h1>
            <h2 id="warning_message">⛔ Avertissement : certaines scènes, propos ou images peuvent heurter la sensibilité des jeunes spectateurs ! ⛔</h2>
            <p id="synopsis_description"></p>
          </div>
        </div> */}
        
        <div id="add_movies_toast" className='toast_popup'>
          <img onClick={close_add_movies_toast} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/2048px-VisualEditor_-_Icon_-_Close_-_white.svg.png' alt="close_icon"/>
          <p>Ce film a bien été ajouté dans vos favoris ! 🎉<br/>Vous pouvez retrouver tout vos films aimés dans <Link style={{textDecoration:"none", backgroundColor:"transparent"}} href="/my-profile">votre bibliothèque personnelle..</Link></p>
        </div>

        <div id="remove_movies_toast" className='toast_popup'>
          <img onClick={close_remove_movies_toast} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/2048px-VisualEditor_-_Icon_-_Close_-_white.svg.png' alt="close_icon"/>
          <p>Ce film a bien été supprimé de vos favoris ! ❌<br/>Vous pouvez retrouver tout vos films aimés dans <Link style={{textDecoration:"none", backgroundColor:"transparent"}} href="/my-profile">votre bibliothèque personnelle..</Link></p>
        </div>
      </section>
    </>
  )
}
