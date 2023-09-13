
//hook

import { useState } from "react";

export default function useFavorito(){

    const [favorito, setFavorito] = useState(true)

    function favoritar(){
        setFavorito(true)
        const options = {
            method: 'POST',
            headers: {accept: 'application/json', 'content-type': 'application/json'},
            body: JSON.stringify({media_type: 'movie', media_id: jogo.id, watchlist: true})
        };
        
        fetch('https://api.themoviedb.org/3/account/null/favorite', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
    
    function desfavoritar(){
        setFavorito(false)
        const options = {
            method: 'POST',
            headers: {accept: 'application/json', 'content-type': 'application/json'},
            body: JSON.stringify({media_type: 'movie', media_id: jogo.id, watchlist: true})
        };
        
        fetch('https://api.themoviedb.org/3/account/null/favorite', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }

    return { favoritar, desfavoritar, favorito }

}