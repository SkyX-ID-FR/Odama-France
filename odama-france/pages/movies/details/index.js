/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr      "Odama, you like it ! ✨"
*/

import Head from 'next/head';
import { useEffect } from 'react'; 
import fsPromises from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import $ from 'jquery';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'pages/movies/details/movies.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return { props: objectData }
}

export default function DetailsMoviesPage(props) {
  const movies_data = props.all_movies;

  useEffect(function() {
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
        $("#add_movies_toast").animate({bottom: '80px'}), 5000;

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
        $("#remove_movies_toast").animate({bottom: '80px'}), 5000;

        setTimeout(function(){
          $("#remove_movies_toast").fadeOut(500);
        }, 5500);
      }
    });

    /* ✨ Then, we complete the different variables in the page : ✨ */
    if (list_movies_liked.indexOf(movie_id) !== -1) { document.getElementById("love_icon").style.color = "red"; } else { document.getElementById("love_icon").style.color = "white"; }
    document.getElementById("movie_title").innerHTML = general_movie_data.title;
    document.getElementById("movies_details_section").style.backgroundImage = `url(${general_movie_data.background})`;
    document.getElementById("short_infos").innerHTML = `${general_movie_data.duration} &nbsp; · &nbsp; ${general_movie_data.tags} &nbsp; · &nbsp; ${general_movie_data.year}`;
    document.getElementById("profile_pic").src = general_movie_data.productors[0].profile_pic;
    document.getElementById("name").innerHTML = general_movie_data.productors[0].name;
    document.getElementById("synopsis_description").innerHTML = `${general_movie_data.synopsis} <br/><br/><br/><a target="_blank" href="${general_movie_data.trailer}">🎬 Voir la bande-annonce de ce film ! 🎬</a>`;
    document.getElementById("movie_component").innerHTML = `<iframe id="popup_player" src="${general_movie_data.source}" scrolling="no" frameborder="0" allowfullscreen/>`;
  }, []);

  function open_movie_popup() { $("#movie_watch_popup").fadeIn(400); }
  function close_movie_popup() { 
    $("#movie_watch_popup").fadeOut(400); 
    $('#popup_player').attr('src', $('#popup_player').attr('src'));
  }

  function close_add_movies_toast() { $("#add_movies_toast").fadeOut(500); }
  function close_remove_movies_toast() { $("#remove_movies_toast").fadeOut(500); }

  return (
    <>
      <Head>
        <title>Odama France - Détails 🔥</title>
        <meta name="description" content="Odama est la seule plateforme de streaming 100% cloud, sécurisée et open-source en France ! 🇫🇷"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="https://zupimages.net/up/22/28/k6tc.png"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      <section id='movies_details_section'>  
        <Link className='back_link' style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/movies"><img className='back_icon' src='https://svgur.com/i/p5L.svg'/><p>Revenir à tout les films</p></Link>
        <div id="love_icon"><i className="fa fa-heart"></i></div>
        
        <h1 id="movie_title"></h1>
        <p id="short_infos"></p>
        <div id='productors'><img id="profile_pic" src=''/><p id="name"></p></div>
        <div id='button_container'><button onClick={open_movie_popup} id="watch_button"><img src="https://zupimages.net/up/22/28/exo5.png" alt="app_logo"/><p>Voir ce film avec Odama !</p></button></div>

        <div id='movie_watch_popup'>
          <img onClick={close_movie_popup} id="popup_close_icon" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/2048px-VisualEditor_-_Icon_-_Close_-_white.svg.png' alt="close_icon"/>
          {/* 🔊 Movie Player Component (iframe) : 🔊 */}
          <div id='movie_component'></div>
        </div>

        <div className='movies_infos'>
          <div className='content'>
            <h1 id="synopsis_title">Synopsis :</h1>
            <h2 id="warning_message">⛔ Avertissement : certaines scènes, propos ou images peuvent heurter la sensibilité des jeunes spectateurs ! ⛔</h2>
            <p id="synopsis_description"></p>
          </div>
        </div>
        
        <div id="add_movies_toast" className='toast_popup'>
          <img onClick={close_add_movies_toast} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/2048px-VisualEditor_-_Icon_-_Close_-_white.svg.png' alt="close_icon"/>
          <p>Ce film a bien été ajouté à vos favoris ! 🎉<br/>Vous pouvez retrouver tout vos films aimés dans <Link style={{textDecoration:"none", backgroundColor:"transparent"}} href="/my-profile">votre bibiliothèque personnelle..</Link></p>
        </div>

        <div id="remove_movies_toast" className='toast_popup'>
          <img onClick={close_remove_movies_toast} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/2048px-VisualEditor_-_Icon_-_Close_-_white.svg.png' alt="close_icon"/>
          <p>Ce film a bien été supprimé de vos favoris ! ❌<br/>Vous pouvez retrouver tout vos films aimés dans <Link style={{textDecoration:"none", backgroundColor:"transparent"}} href="/my-profile">votre bibiliothèque personnelle..</Link></p>
        </div>
      </section>
    </>
  )
}
