/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr - "Odama, you like it ! ✨"
*/

import Head from 'next/head';
import Header from '../../../components/Header.js';
import fsPromises from 'fs/promises';
import path from 'path';
import { useRouter } from 'next/router';
import $ from 'jquery';
import { useEffect } from 'react'; 
import Link from 'next/link.js';
import Loader from '../../../components/Loader.js';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'pages/movies/details/movies.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return { props: objectData }
}

export default function MoviesPage(props) {
  const router = useRouter();
  const file_data = props.all_movies; 

  const RedirectToMoviesDetails = event => {
    var id_element = event.currentTarget.id;
    localStorage.setItem('item_id', id_element);
    router.push({pathname: '../movies/details'});
  };

  /* ⌛ Launch Loading Function Screen : ⌛ */
  useEffect(function() {
    $("#loader_page_finish").hide();
    setTimeout(function(){
      $("#loader_screen").hide();
      $("#loader_page_finish").fadeIn(800);
    }, 2000);
  }, []);

  const show_genres_poppup = event => {
    var movies_genres_selected = event.currentTarget.id;
    document.getElementById("movies_list").innerHTML = "";

    setTimeout(function(){
      for (let i = 1; i < file_data.length; i++) {
        if (file_data[i].genres.indexOf(movies_genres_selected) !== -1) {
          document.getElementById("movies_list").innerHTML += `
            <a href="../movies/details" class='movies_genres_item' onClick="localStorage.setItem('item_id', this.id);" id="${file_data[i].id}">
                <img src='${file_data[i].poster}' id="poster_img" alt='poster_img'/>
                <div id='rates'><p>${file_data[i].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
                <span id='tags'>${file_data[i].tags}</span>
            </a>
          `;
        }
      }
    }, 200);
  }

  return (
    <>
      <Head>
        <title>Odama France - Genres 🔥</title>
        <meta name="description" content="Odama est la seule plateforme de streaming 100% cloud, sécurisée et open-source en France ! 🇫🇷"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="https://zupimages.net/up/22/28/k6tc.png"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <Loader/>

      <div id="loader_page_finish">
      <Header/>
        <section className="content_page genres_page">
          <Link className='back_link' style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/movies"><img className='back_icon' src='https://svgur.com/i/p5L.svg'/><p>Revenir à tout les films</p></Link><br/><br/>
          
          <div className='button_genres_group'>
            <h1>Choissisez votre genre de film préféré :</h1>
            <p>Cela nous permettra de sauvegarder vos préférences d'utilisateurs et d'améliorer votre expérience avec la plateforme Odama&copy;.</p>

            <button onClick={show_genres_poppup} id="humour">Comédie 😂</button>
            <button onClick={show_genres_poppup} id="aventure">Aventure 🗡</button>
            <button onClick={show_genres_poppup} id="drame">Drame 😥</button>
            <button onClick={show_genres_poppup} id="action">Action 🔥</button>
            <button onClick={show_genres_poppup} id="horreur">Horreur 💀</button>
            <button onClick={show_genres_poppup} id="heros">Super-Héros 🚀</button>
          </div>
        </section>
      </div>

      <div id='movies_list'></div>
    </>
  )
}
