/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr      "Odama, you like it ! ✨"
*/

import Head from 'next/head';
import { useEffect } from 'react' 
import fsPromises from 'fs/promises';
import path from 'path'

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
    /* For the app debug mode : console.log(general_movie_data.title); */

    /* ✨ Then, we complete the different variables in the page : ✨ */
    document.getElementById("movie_title").innerHTML = general_movie_data.title;
    document.getElementById("movies_details_section").style.backgroundImage = `url(${general_movie_data.background})`;
    document.getElementById("short_infos").innerHTML = `
      ${general_movie_data.duration} &nbsp; · &nbsp; ${general_movie_data.tags}
    `;
  },[]);

  return (
    <>
      <Head>
        <title>Odama France - Détails 🔥</title>
        <meta name="description" content="Odama est la seule plateforme de streaming 100% cloud, sécurisée et open-source en France ! 🇫🇷"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="https://zupimages.net/up/22/28/k6tc.png"/>
      </Head>

      <section id='movies_details_section'>  
        <h1 id="movie_title"></h1>
        <p id="short_infos"></p>

        <div className='movies_infos'>
          <div className='content'>
            coucou
          </div>
        </div>
      </section>
    </>
  )
}
