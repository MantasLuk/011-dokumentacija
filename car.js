/**
 * Automobilio kilometrazas pagal sanaudas
 * @param {string} auto Automobilio marke
 * @param {number} tank Bako turis
 * @param {number} highway Magistrales kuro sanaudos 
 * @param {number} average Vidutines kuro sanaudos 
 * @param {number} city Miesto kuro sanaudos
 * @returns {string} Sakinys
 */


function car(auto, tank, highway, average, city) {
    const highwayKm = Math.floor(tank/highway *100)
    const cityKm = Math.floor(tank/city *100)
    const averageKm = Math.floor(tank/average *100)

    return `${auto} su ${tank}l baku, gali nuvaziuoti ${highwayKm}km (magistralej, kai sanaudos yra ${highway}l/100km), ${averageKm}km (vidutiniskai, kai sanaudos yra ${average}l/100km) ir ${cityKm}km (mieste, kai sanaudos yra ${city}l/100km)`;
}


module.exports = car;