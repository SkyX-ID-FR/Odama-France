/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr      "Odama, you like it ! ✨"
*/

import Head from 'next/head';
import Header from '../../components/Header.js';
import $ from 'jquery';
import { useEffect } from 'react'; 
import { useRouter } from 'next/router';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'pages/movies/details/movies.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return { props: objectData }
}

export default function MyProfile(props) {
    const router = useRouter();
    const file_data = props.all_movies; 

    useEffect(function() {
        $("#movies_library_popup").hide();
        $("#more_info_container").click(function() { $("#movies_library_popup").fadeIn(400); }); 
        $("#close_icon_popup").click(function() { $("#movies_library_popup").hide(); });
        
        if (JSON.parse(localStorage.getItem('list_movies_liked')) == null) {    
            document.getElementById("all_liked_movies_component").innerHTML = `
                <div class="not_found_component">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/not-found-4064375-3363936.png" alt="not_found_img"/>
                    <h1>Aucun(e)s films ou séries ne peut être affiché(e)s !</h1>
                    <p>[ Raison : auncun(e)s films ou séries n'est aimés.. ❤ ]</p>
                </div>
            `;

            let list_movies_liked = [];
            localStorage.setItem('list_movies_liked', JSON.stringify(list_movies_liked));
        } else {
            const list_movies_liked = JSON.parse(localStorage.getItem('list_movies_liked'));
            document.getElementById("all_liked_movies_component").innerHTML = `<p>${list_movies_liked}</p>`;
        }
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
                <h1 className='big_title'>Mon profile :</h1>
                <p className='description'>Retrouvez ici votre espace personnel avec quelques infos ainsi que vos films et séries préféré(e)s. Odama se soucie de votre sécurité sur Internet de se fait, vous devriez utiliser un VPN pour masquer et peut-être chiffrer également votre IP (108.16.11.3). Vous pouvez retrouver l'intégralité de notre projet sur le repos Github correspondant en open-source à cette adresse : <a href="https://github.com/SkyX-ID-FR/Odama-France" target="_blank">https://github.com/SkyX-ID-FR/Odama-France</a>. Toutes idées, remarques ou reports de bugs peuvent être envoyés depuis notre page de contact...</p>
                <div id='more_info_container'>Ma bibliothèque de films ✨ <i class="fa fa-chevron-right"></i></div>
            </section>

            <div id='movies_library_popup'>
                <img id="close_icon_popup" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/2048px-VisualEditor_-_Icon_-_Close_-_white.svg.png' alt="close_icon"/>
                <div id="all_liked_movies_component"></div>
            </div>
        </>
    )
}