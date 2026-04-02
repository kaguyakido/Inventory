//------- Classe Magasin -------------
export class Magasin {
    constructor() {
        this.articles = [];
        this.nextId = 1;
    }
    // POST / items
    ajouter(article) {
        const newArticle = {
            ...article,
            id: `${article.type === "vetement" ? "v" : "e"}-${String(this.nextId++).padStart(3, "0")}`,
        };
        this.articles.push(newArticle);
        return newArticle;
    }
    // GET / items
    listerTous() {
        return [...this.articles];
    }
    // GET / items?type=vetement
    filterParType(type) {
        return this.articles.filter((a) => a.type === type);
    }
}
