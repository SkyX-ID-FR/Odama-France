/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr - "Odama, you like it ! ✨"
*/

import Header from '../../components/Header.js';
import Head from 'next/head';
import fsPromises from 'fs/promises';
import path from 'path';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'pages/movies/details/movies.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return { props: objectData }
}

export default function Search(props) {
    const movies_data = props.all_movies; 

    setTimeout(function(){
        if (typeof window !== "undefined") {
            document.getElementById("search_input_query").addEventListener('input', updateValue);
    
            function updateValue(e) {
                document.getElementById("result_item").innerHTML = "";
                for (let i = 1; i < movies_data.length; i++) {
                    if (document.getElementById("search_input_query").value.length == 0) {
                        document.getElementById("result_item").innerHTML = "";
                    } else if (movies_data[i].title.indexOf(e.target.value) !== -1) {
                        document.getElementById("result_item").innerHTML += `
                            <a href="../movies/details" class='movies_search_item' onClick="localStorage.setItem('item_id', this.id);" id="${movies_data[i].id}">
                                <img src='${movies_data[i].poster}' id="poster_img" alt='poster_img'/>
                                <div id='rates'><p>${movies_data[i].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
                            </a>
                        `;
                    }
                }
            }
        }
    }, 1000);    

    return (
      <>
        <Head>
            <title>Odama France - Recherche 🔥</title>
            <meta name="description" content="Odama est la seule plateforme de streaming 100% cloud, sécurisée et open-source en France ! 🇫🇷"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="https://zupimages.net/up/22/28/k6tc.png"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
        <Header/>

        <section id="search_section">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" id="search_input_query" placeholder="Rechercher ici vos films et séries préférées !"/>
            <span>Exemple : Goliath, Novembre ou Spider-Man...</span>

            <div id='result_item'></div>
        </section>
      </>
    )
  }
  