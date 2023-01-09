/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr - "Odama, you like it ! ✨"
*/

import Head from 'next/head';
import Header from '../../components/Header.js';

export default function Contact() {
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
            <section id="contact_section">
                <a href="https://discord.gg/RxeUj2vAWp" target="_blank"><img className="discord_logo" src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6cc3c481a15a141738_icon_clyde_white_RGB.png' alt='discord_logo'/></a>
                <h1>Odama France <img src='https://images.emojiterra.com/twitter/v13.1/512px/1f1eb-1f1f7.png'/></h1>
                <p>Odama&copy; est la seule plateforme de streaming 100% cloud, sécurisée et open-source en France. Sans aucunes pubs, des players avec un flux en HD minimum et une interface UI : elle comblera amplement vos souhaits de streaming !</p>
            </section>  
        </>
    )
}