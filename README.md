# Livret d'accueil numérique — Josie Conciergerie

Livret d'accueil mobile-first pour les voyageurs, accessible par QR code.
Multilingue (FR, EN, DE, ES, IT), réutilisable pour plusieurs logements.

**Stack :** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 ·
next-intl · Leaflet / OpenStreetMap.

---

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrez ensuite **http://localhost:3000/fr/granville** (le QR code pointera vers
cette adresse une fois en ligne).

Autres commandes :

```bash
npm run build   # build de production (vérifie aussi les types)
npm start       # lance le build de production
```

---

## Structure du projet

```
app/[locale]/[logement]/      Pages du livret (accueil + sous-pages)
components/                   Composants réutilisables (cartes, en-tête, carte…)
data/
  types.ts                    Forme d'un logement
  logements/<id>.ts           Données d'un logement
  logements/index.ts          Registre des logements
messages/<langue>.json        Textes d'interface traduits
i18n/                         Configuration des langues
public/logements/<id>/        Images d'un logement (couverture…)
public/josie.svg              Mascotte Josie
```

- **Langue dans l'URL** : `/fr/granville`, `/en/granville`, etc.
  La langue par défaut est le français (voir `i18n/routing.ts`).
- **Texte d'interface** (boutons, titres) → `messages/*.json`.
- **Contenu d'un logement** (descriptions, mot d'accueil) → `data/logements/<id>.ts`.

---

## ➕ Ajouter un nouveau logement

1. **Copiez** `data/logements/granville.ts` vers `data/logements/<id>.ts`
   (par ex. `cabourg.ts`). Donnez un `id` unique en minuscules (il servira
   d'adresse : `/fr/<id>`).

2. **Remplissez les données** : adresse, `coords` (latitude, longitude du
   logement), mot d'accueil, infos arrivée/départ, WiFi, équipements, lieux
   « autour de moi » (avec leurs `coords` pour la carte), contact, etc.

3. **Enregistrez la photo de couverture** dans
   `public/logements/<id>/cover.jpg` et indiquez son chemin dans le champ
   `cover` (par ex. `/logements/cabourg/cover.jpg`).

4. **Déclarez le logement** dans `data/logements/index.ts` :

   ```ts
   import { cabourg } from "./cabourg";
   export const logements: Logement[] = [granville, cabourg];
   ```

5. C'est prêt : le livret est accessible sur `/fr/<id>` (et dans toutes les
   langues). Aucune autre étape de routing n'est nécessaire.

### Trouver les coordonnées (`coords`)

Sur **Google Maps**, faites un clic droit sur le point → les coordonnées
`latitude, longitude` s'affichent en haut du menu. Recopiez-les sous la forme
`[48.8367, -1.5959]`.

---

## 🌍 Traduire le contenu d'un logement

Par défaut, chaque texte est en français. Pour le traduire, remplacez la chaîne
par un objet par langue :

```ts
// Avant
motAccueil: "Bienvenue dans cette maison…",

// Après
motAccueil: {
  fr: "Bienvenue dans cette maison…",
  en: "Welcome to this house…",
  de: "Willkommen in diesem Haus…",
},
```

Le **français reste obligatoire** ; si une langue manque, le livret affiche
automatiquement le français. Vous pouvez traduire champ par champ, à votre
rythme.

### Ajouter une langue d'interface

1. Ajoutez son code dans `i18n/routing.ts` (`locales`).
2. Créez `messages/<code>.json` (copiez `fr.json` et traduisez les valeurs).
3. Ajoutez son drapeau/libellé dans `components/LangSwitcher.tsx`.

---

## 🖼️ Remplacer la mascotte et les photos

- **Mascotte Josie** : un SVG fidèle au logo est fourni (`public/josie.svg`,
  et le composant `components/JosieAvatar.tsx`). Pour utiliser le logo officiel,
  remplacez `public/josie.svg` par votre fichier (même nom), ou adaptez
  `JosieAvatar.tsx`.
- **Photo de couverture** : une illustration provisoire est dans
  `public/logements/granville/cover.svg`. Déposez votre vraie photo
  (`cover.jpg`) et mettez à jour le champ `cover` du logement.

---

## 🚀 Déploiement (Vercel)

1. Poussez le projet sur un dépôt GitHub.
2. Sur **vercel.com**, importez le dépôt (« New Project »). Vercel détecte
   Next.js automatiquement — aucune configuration nécessaire.
3. Après le déploiement, votre livret est en ligne à une adresse du type
   `https://<projet>.vercel.app/fr/granville`.

### Générer le QR code

Créez un QR code (par ex. avec un générateur gratuit) pointant vers l'adresse
du logement, par exemple `https://<projet>.vercel.app/fr/granville`, puis
imprimez-le pour l'afficher dans le logement.

---

## Évolutions prévues

L'architecture est prête à brancher une base de données (Supabase) plus tard :
il suffira de remplacer les fonctions de `data/logements/index.ts`
(`getLogement`, `logements`) par des requêtes, sans toucher aux pages.
