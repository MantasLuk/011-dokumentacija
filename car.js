/**
 * 
 * @param {string} auto Automobilio marke
 * @param {number} tank Bako turis
 * @param {number} highway Magistrales kuro sanaudos /100km
 * @param {number} average Vidutines kuro sanaudos /100km
 * @param {number} city Miesto kuro sanaudos /100km
 * @returns {string} Sakinys apie automobilio kilometraza pagal sanaudas
 */


function car(auto, tank, highway, average, city) {
    const highwayKm = (tank/highway *100).toFixed();
    const cityKm = (tank/city *100).toFixed();
    const averageKm = (tank/average *100).toFixed();

    return `${auto} su ${tank}l baku, gali nuvaziuoti ${highwayKm}km (magistralej, kai sanaudos yra ${highway}l/100km), ${averageKm}km (vidutiniskai, kai sanaudos yra ${average}l/100km) ir ${cityKm}km (mieste, kai sanaudos yra ${city}l/100km)`;
}


module.exports = car;