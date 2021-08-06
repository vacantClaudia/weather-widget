import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './widgetMeteo.scss';

const WidgetMeteo = ({ zipCode, city }) => {
  /*
  useState : crée une case dans le state
  En argument on fournit la valeur initiale pour la case du state
  useState retourne un tableau avec 2 informations :
    - valeur actuelle de la case
    - fonction qui permet de changer la valeur
  Quand on fait appel à la fonction qui permet de changer la valeur, React
  fait automatiquement un rendu du composant
  */
  const [ temperature, setTemperature ] = useState('-');

  /*
  deuxième argument de useEffect :
   - si pas indiqué => après chaque rendu du composant
   - si tableau de dépendances vide, [] => après le premier rendu du composant, et plus jamais ensuite
   - si tableau de dépendances non vide => après le premier rendu du composant, et ensuite l'effet sera
   appliqué conditionnellement après les rendus suivants, si l'une des dépendances change de valeur
  */
  useEffect(() => {
    axios.get('http://localhost:1234')
      .then((response) => {
        // console.log(response);

        const temperatureFromAPI = response.data.main.temp;
        // on arrondit à zéro décimale
        // retourne une chaîne de caractères
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
        const temperatureToDisplay = temperatureFromAPI.toFixed(0);
        setTemperature(temperatureToDisplay);
      })
  }, [city, zipCode]);
  // ici on veut réappliquer l'effet si l'une des props change de valeur
  
  
  return (
    <article className="weather-widget">
      <div className="weather-container">
        <div className="weather-infos">
          <h3 className="weather-city">{city}</h3>
          <p className="weather-zipcode">{zipCode}</p> 
        </div>
        <div className="weather-temperature">
          {temperature}
        </div>
      </div>
    </article>
  );
};

WidgetMeteo.propTypes = {
  zipCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default WidgetMeteo;
