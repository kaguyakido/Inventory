import {
    Article,
    Vetement,
    ProduitElectronique,
    isVetement,
    isElectronique,
} from "./types.js";

//------- Classe Magasin -------------
export class Magasin {
    private articles: Article[] = [];
    private nextId = 1;

    // POST / items
    ajouter(article:Omit<Vetement, "id"> | Omit<ProduitElectronique, "id">): Article {
        const newArticle = {
            ...article,
            id: `${article.type === "vetement" ? "v" : "e"}-${String(this.nextId++).padStart(3, "0")}`,
        } as Article;
        this.articles.push(newArticle);
        return newArticle;
    }

    // GET / items
    listerTous(): Article[] {
        return [...this.articles];
    }

    // GET / items?type=vetement
    filterParType(type: Article["type"]): Article[] {
        return this.articles.filter((a) => a.type === type);
    }
}