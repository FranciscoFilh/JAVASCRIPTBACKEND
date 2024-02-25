export class Mamifero {
    constructor(patas) {
        this.patas = patas
    }

    get obterPatas() {
        return this.patas
    }

    /**
     * @param {any} novasPatas
     */
    set mudarPatas(novasPatas) {
        this.patas = novasPatas
    }
}