
/**
 * Promesas no secuenciales
 * @param {HTMLDivElement} element 
 */

export const asyncAwait2Component = async (element) => {

    console.time('Start');

    // Dispara una promesa, despues otra y despues la otro
    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();
    // Espera a que todas las promesas se resuelvan, pero todas las dispara de manera simultanea
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]);

    element.innerHTML = `
        value1: ${value1} <br/>
        value2: ${value2} <br/>
        value3: ${value3} <br/>

    `

    console.timeEnd('Start');

}


const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
})

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium Promise');
    }, 1500);
})

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000);
})