# Smart Inventory API Console

Interface web style API Explorer pour gérer un stock d'articles typés en TypeScript.

## Stack

- **TypeScript** — types union, interfaces, type guards
- **HTML/CSS** — thème dark, style GitHub API
- Aucune dépendance externe

## Structure

```
smart-inventory/
├── index.html          # Interface principale
├── src/
│   ├── types.ts        # Interfaces & types union (Article, Vetement, ProduitElectronique)
│   ├── magasin.ts      # Classe Magasin (CRUD + logique métier)
│   └── main.ts         # Logique DOM & rendu UI
├── dist/               # JS compilé (généré par tsc)
├── tsconfig.json
└── .gitignore
```

## Lancer le projet

```bash
# Compiler le TypeScript
npx tsc

# Ouvrir index.html dans le navigateur
# (ou utiliser un serveur local)
npx serve .
```

## Concepts TypeScript illustrés

- **Type union** : `type Article = Vetement | ProduitElectronique`
- **Discriminant** : le champ `type` pour le narrowing
- **Type guards** : `isVetement()`, `isElectronique()`
- **Omit** : `Omit<Article, "id">` pour la création
- **Classe** : `Magasin` avec méthodes typées
