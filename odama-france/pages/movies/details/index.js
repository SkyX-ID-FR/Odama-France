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

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'pages/movies/details/premiere_movies.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return { props: objectData }
}

export default function DetailsMoviesPage(props) {
  const movies_data = props.premiere_movies; 

  useEffect(function() {
    const movie_id = localStorage.getItem('item_id');
    const general_movie_data = movies_data[movie_id];

    /* ✨ Then, we complete the different variables in the page : ✨ */
    document.getElementById("movie_title").innerHTML = general_movie_data.title;
    document.getElementById("movies_details_section").style.backgroundImage = `url(${general_movie_data.background})`;
    document.getElementById("short_infos").innerHTML = `
      ${general_movie_data.duration} &nbsp; · &nbsp; ${general_movie_data.tags} &nbsp; · &nbsp; ${general_movie_data.year}
    `;
    document.getElementById("profile_pic").src = general_movie_data.productors[0].profile_pic;
    document.getElementById("name").innerHTML = general_movie_data.productors[0].name;
    document.getElementById("synopsis_description").innerHTML = general_movie_data.synopsis;
  }, []);

  return (
    <>
      <Head>
        <title>Odama France - Détails 🔥</title>
        <meta name="description" content="Odama est la seule plateforme de streaming 100% cloud, sécurisée et open-source en France ! 🇫🇷"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="https://zupimages.net/up/22/28/k6tc.png"/>
      </Head>

      <section id='movies_details_section'>  
        <Link className='back_link' style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/movies"><img className='back_icon' src='https://svgur.com/i/p5L.svg'/><p>Revenir à tout les films</p></Link>
        <div id="love_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
        <h1 id="movie_title"></h1>
        <p id="short_infos"></p>
        <div id='productors'><img id="profile_pic" src=''/><p id="name"></p></div>

        <div id='button_container'><button id="watch_button"><img src="https://zupimages.net/up/22/28/exo5.png" alt="app_logo"/><p>Voir ce film avec Odama !</p></button></div>

        <div className='movies_infos'>
          <div className='content'>
            <h1 id="synopsis_title">Synopsis :</h1>
            <h2 id="warning_message">⛔ Avertissement : des scènes, des propos ou des images peuvent heurter la sensibilité des spectateurs ! ⛔</h2>
            <p id="synopsis_description"></p>
          </div>
        </div>

        <footer id="movies_details_footer">Made with <font color="red">❤</font> by @skyx_id_fr <br/>Version BETA</footer>
      </section>
    </>
  )
}
