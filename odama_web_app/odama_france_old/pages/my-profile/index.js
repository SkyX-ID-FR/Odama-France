/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr - "Odama, you like it ! ✨"
*/

import Head from 'next/head';
import Header from '../../components/Header.js';
import $ from 'jquery';
import { useEffect } from 'react'; 
import fsPromises from 'fs/promises';
import path from 'path';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'pages/movies/details/movies.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return { props: objectData }
  }

export default function MyProfile(props) {
    useEffect(function() {
        $("#confirm_popup").hide();
        $("#movies_library_popup").hide();
        $("#show_movies_library").click(function() { $("#movies_library_popup").fadeIn(400); }); 
        $("#close_icon_popup").click(function() { $("#movies_library_popup").hide(); });
        
        if (JSON.parse(localStorage.getItem('list_movies_liked')) == null || JSON.parse(localStorage.getItem('list_movies_liked')).length === 0) {    
            document.getElementById("all_liked_movies_component").innerHTML = `
                <div class="not_found_component">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/not-found-4064375-3363936.png" alt="not_found_img"/>
                    <h1>Aucun(s) film(s) n'a pu être affiché(s) !</h1>
                    <p>Pourquoi ? Il n'y a tout simplement aucun(s) film(s) aimé(s)... <font color="red">❤</font></p>
                </div>
            `;
        } else {
            const list_movies_liked = JSON.parse(localStorage.getItem('list_movies_liked'));
            const movies_data = props.all_movies;

            for (let id of list_movies_liked) {
                document.getElementById("all_liked_movies_component").innerHTML += `
                    <a href="../movies/details" onClick="localStorage.setItem('item_id', this.id);" id="${movies_data[id].id}" class="movies_liked_item">
                        <div id='rates'><p>${movies_data[id].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
                        <span class='movies_tags'>${movies_data[id].tags}</span>
                        <img src="${movies_data[id].poster}" alt="movies_liked_poster"/>
                    </a>
                `;
            }
        }

        $("#two").click(function() { $("#confirm_popup").fadeIn(400); }); 
        $("#close_icon").click(function() { $("#confirm_popup").fadeOut(400); }); 
        $("#no").click(function() { $("#confirm_popup").fadeOut(400); }); 

        /* 📂 Delete all localStorage (also user's library) : 📂 */
        $("#yes").click(function() {
            localStorage.clear();
            location.reload();
        }); 
    }, []);

    return (
        <>
            <Head>
                <title>Odama France 🔥</title>
                <meta name="description" content="Odama est la seule plateforme de streaming 100% cloud, sécurisée et open-source en France ! 🇫🇷"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="https://zupimages.net/up/22/28/k6tc.png"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>

            <Header/>
            <section id="my_profile_section">
                <h1 className='big_title'>Mon profil :</h1>
                <p className='description'>Retrouvez-ici votre espace personnel avec quelques informations propre avec votre utilisation comme vos films et séries préféré(e)s, le tout regroupé sous forme de bibliothèque intéractive. Toutes vos préférences utilisateurs sont enregistrées localement sur votre appareil (pour pas qu'Odama y est accède) mais vous pouvez à tout moment les supprimer en cliquant sur le bouton de droite, juste ci-dessous. Toutes idées, remarques ou reports de bugs peuvent être envoyés depuis notre page de contact...</p>
                
                <div className='button_group_action'>
                    <button id="show_movies_library">Ma bibliothèque de films ! ✨</button>
                    <button id="two">Réinitialiser vos paramètres d'utilisateurs... 📦</button>
                </div>
            </section>

            <div id='movies_library_popup'>
                <img id="close_icon_popup" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/2048px-VisualEditor_-_Icon_-_Close_-_white.svg.png' alt="close_icon"/>
                <div id="all_liked_movies_component"></div>
            </div>

            <div id="confirm_popup">
                <div class="content">
                    <img id="close_icon" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/2048px-VisualEditor_-_Icon_-_Close_-_white.svg.png' alt="close_icon"/>
                    <h1>Êtes-vous vraiment sûr(e) de vouloir supprimer toutes vos préférences utilisateurs ? 😓</h1>
                    <span>Si vous cliquez sur oui, toutes vos préférences et paramètres utilisateurs normalement enregistrés localement vont être supprimés. Cette action est irréversible : c'est-à-dire que vous ne pourrez plus restituer vos données personnelles. Si vous souhaitez continuer, cliquez sur oui sinon cliquez sur non.</span>

                    <div className='button_group'>
                        <button id="yes">Oui, pas de soucis ! ✔️</button>
                        <button id="no">Non, c'est une erreur... ❌</button>
                    </div>
                </div>
            </div>
        </>
    )
}