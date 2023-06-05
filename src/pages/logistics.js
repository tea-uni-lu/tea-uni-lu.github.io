import React from 'react'
import Map from './map'
import '../App.css'

function Logistics() {

    const location = {
        address: '162a Avenue de la Faïencerie, L-1511, Luxembourg',
        lat: 49.62308,
        lng: 6.11223,
      } // our location object from earlier
      

    return (
        <div>
            <h2>Logistics</h2>
            <h3>Conference site</h3>
            <p className='marginer' style={{fontSize: "18px"}}>
                The conference will take place on Limpertsberg campus, University of Luxembourg. Located 20 minutes on foot from the city-center of Luxembourg, the Limpertsberg campus is home to the Physics and Materials Science department. The conference will take place in room 0.03 in <a href="https://wwwfr.uni.lu/universite/presentation/galerie_de_photos/batiment_des_sciences_on_limpertsberg_campus">Bâtiment des Sciences</a>.
            </p>
            <h3>Public Transport</h3>
            <p className='marginer' style={{fontSize: "18px"}}>
                The public transport is free for the whole country, including the buses, trains, and tram, with up-to-date information available on the Mobilitèit website <a href="https://www.mobiliteit.lu/en/">Mobilitéit webpage</a> or mobile app. The nearest bus stops for the university's Limpertsberg campus are Uni Campus Limpertsberg, Lycée Michel Lucius, Limpertsberg, and Jean Soupert. The nearest tram stop is Faïencerie/INLL, which is located about 12 minutes on foot from campus.
            </p>
            <h3>By car or bike</h3>
            <p className='marginer' style={{fontSize: "18px"}}>
                A paid parking is available at <a href="https://www.vdl.lu/en/getting-around/by-car/parkings-and-pr/glacis">Glacis</a>, located next to the Faïencerie/INLL bus stop. However, Luxembourg is prone to traffic jams on the routes exiting the city in the direction of Belgium and France.
            </p>
            <p className='marginer' style={{fontSize: "18px"}}>
                There are also bike racks available on campus, as well as a hire-and-drop-off site for rental bikes next to the campus entrance (at the Jean Soupert bus stop). The Limpertsberg neighbourhood has new bike lanes, however they do not continue through the city center.
            </p>
            <h3>Recommended hotels</h3>
            <p  className='marginer' style={{fontSize: "18px"}}> <a href= "http://www.grandhotelvictorhugo.lu/en/">Hotel Victor Hugo</a> is frequently used by visitors of the university and is 15 minutes on foot from the conference site.
            Address: 2 Av. Victor Hugo, 1750 Limpertsberg Luxembourg
            </p>
            <p  className='marginer' style={{fontSize: "18px"}}> <a href= "https://hdg.lu">Hosteliere du Grünewald</a> is located in Luxembourg-Dommeldange, and about 30 minutes by public transport to the conference site. For university vistors a promotional code "Uni2023" is applicable for 10% discount.
            Address:10-14 Rte d'Echternach, 1453 Dommeldange Luxembourg
            </p>
            <Map location={location} zoomLevel={17} /> {/* include it here */}
        </div>
    

    )
}

export default Logistics;