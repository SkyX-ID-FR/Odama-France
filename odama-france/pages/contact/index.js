/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr      "Odama, you like it ! ✨"
*/

import Head from 'next/head';
import Header from '../../components/Header.js';

export default function Contact() {
    function send_out() {
        var re_contact_value = document.getElementById("re_contact").value;
        var message_value = document.getElementById("message_textarea").value;

        if (document.getElementById("message_textarea") && document.getElementById("message_textarea").value) {
            console.log("Re-contact : " + re_contact_value);
            console.log("Message : " + message_value);
        } else {
            alert("⛔ Vous êtes obligé d'écrire au moins un message pour envoyer votre report ! ⛔");
        }
    }

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
                <h1>Un petit message ? 👋</h1>
                <p>Odama&copy; vous permet d'envoyer au staff toutes demandes, avis ou remarques afin d'améliorez la plateforme avec les avis précieux de tous les utilisateurs. Si vous laissez votre email ou un contact quelconque, nous pourrons vous répondre avec plaisir ! 😊</p>
            
                <input placeholder='Écrivez-ici un contact pour que la staff puissent vous répondre (pas obligatoire)...' type="text" id="re_contact"/><br/><br/>
                <textarea placeholder='Écrivez-ici votre message qui sera envoyé au staff (obligatoire)..' id="message_textarea"/><br/><br/>
                <button onClick={send_out} id="send_out">OK</button>
            </section>  
        </>
    )
}