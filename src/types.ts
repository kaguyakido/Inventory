//----- Types de base-----------------
export type Taille = "S" | "M" | "L";
export type Voltage = 110 | 220;

//------- interface commune------------
export interface ArticleBase {
    id: string;
    nom: string;
    prix: number;
    stock: number;
}

//------- Aticles spécifiques -------------
export interface Vetement extends ArticleBase {
    type: "vetement";
    taille: Taille;
    couleur: string;
}

export interface ProduitElectronique extends ArticleBase {
    type: "electronique";
    voltage: Voltage;
    garantieMois: number;
}

//------- type union -----------------
export type Article = Vetement | ProduitElectronique;

//------- fonctions de type garde -------------
export function isVetement(a: Article): a is Vetement {
    return a.type === "vetement";
}

export function isElectronique(a: Article): a is ProduitElectronique {
    return a.type === "electronique";
}