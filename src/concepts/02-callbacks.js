import { heroes } from '../data/heroes';


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {

    const id1 = '5d86371fd55e2e2a30fe1ccb1';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';

    findHeroe(id1, (error, hero1) => {

        if (error) {

            element.innerHTML = error;
            return;

        }

        findHeroe(id2, (error, hero2) => {

            if (error) {

                element.innerHTML = error;
                return;

            }

            // element.innerHTML = hero?.name || 'No hay heroe';
            element.innerHTML = `${hero1.name} / ${hero2.name}`;

        });

    });

}


/**
 * 
 * @param {String} id 
 * @param {(error: String|Null, hero: Object) => void} callback 
 */
const findHeroe = (id, callback) => {

    const hero = heroes.find(hero => hero.id === id)

    if (!hero) {

        callback(`Hero with id ${id} not found.`);
        return; //undefined

    }

    callback(null, hero);

}