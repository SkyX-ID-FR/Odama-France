/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr      "Odama, you like it ! ✨"
*/

import { useRouter } from 'next/router';
export default function DetailsMoviesPage() {
    const router = useRouter()
    console.log(router.query);

  return (
    <>
      <section>        
        <p>movies details</p>
      </section>
    </>
  )
}
