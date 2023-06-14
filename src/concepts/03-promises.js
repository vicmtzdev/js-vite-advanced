import { heroes } from '../data/heroes'


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

    const renderHero = (hero) => {

        element.innerHTML = hero.name;

    }

    const renderTwoHero = (hero1, hero2) => {

        element.innerHTML = `<h3>${hero1.name}</h3>  
                             <h3>${hero2.name}</h3>`;

    }

    const renderError = (error) => {

        element.innerHTML = `
        <h1>Error:</h1>
        <h3>${error}</h3>
        `

    }


    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f233c9f2425f16916';

    //! Forma 3: Promise All (Si las promesas no dependen entre ellas)
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
        .then(([hero1, hero2]) => renderTwoHero(hero1, hero2))
        .catch(renderError);


    //! Forma 2: promesas en cadena
    // let hero1;
    // findHero(id1)
    //     .then(hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then(hero2 => {
    //         renderTwoHero(hero1, hero2);
    //     })
    //     .catch(renderError);

    //! Forma 1: promise hell
    // findHero(id1).
    //     then((hero1) => {

    //         findHero(id2)
    //             .then((hero2) => {
    //                 renderTwoHero(hero1, hero2);
    //             })
    //             .catch(renderError);
    //     })
    //     .catch(renderError);

}


/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = (id) => {

    return new Promise((resolve, reject) => {

        // Voy a regresar el heroe (hero) mientras que el id de ese heroe(heroes.id) sea igual al id que se manda (id)
        const hero = heroes.find(hero => hero.id === id);

        if (hero) {

            resolve(hero);
            return;

        }

        reject(`Hero with id ${id} not found`);

    });
}