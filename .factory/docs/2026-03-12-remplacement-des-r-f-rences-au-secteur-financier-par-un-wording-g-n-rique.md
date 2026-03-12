## Objectif
Remplacer, dans le code du site, les textes qui référencent explicitement la finance / le secteur financier par un wording **sectoriel‑neutre** (IA, innovation, transformation digitale), en s’appuyant sur le document `.factory/docs/2026-03-12-analyse-des-contenus-li-s-a-la-financial-technology.md`.

## Périmètre identifié (dans le code)
- `src/components/EyTunisie.tsx` : 4 occurrences ("services financiers", "secteur financier", "logicielle financière").
- `src/data/agenda.ts` : activité `d1-a3c` (titre + description).
- `src/components/CVs.tsx` : 1 occurrence dans le rôle de Mohamed‑Skander Naija.

## Décisions (selon vos réponses)
- Niveau de généralisation : **très générique** ("tous secteurs", "organisations").
- Agenda : **modifier le titre + la description**.
- CV : **vous souhaitez conserver le rôle tel quel** (note: cela laissera une mention explicite aux “services financiers”, donc le site ne sera pas 100% neutre sur ce point).

## Modifications proposées (textes exacts)
### 1) `src/components/EyTunisie.tsx`
Remplacer les 4 passages suivants :

- Phrase 1 (services financiers) :
  - Avant : "...les éditeurs de logiciels et les acteurs des services financiers..."
  - Après : "...les éditeurs de logiciels et les organisations, tous secteurs confondus, ..."

- Phrase 2 (secteur financier) :
  - Avant : "...dans l’édition de solutions destinées au secteur financier, ..."
  - Après : "...dans l’édition de solutions et de produits digitaux à forte composante IA, ..."

- Phrase 3 (logicielle financière) :
  - Avant : "...les principaux enjeux de l’édition logicielle financière : ..."
  - Après : "...les principaux enjeux de l’édition logicielle et des plateformes numériques : ..."

- Phrase 4 (secteur financier) :
  - Avant : "...propres à l’édition de solutions pour le secteur financier, ..."
  - Après : "...propres à l’édition de solutions digitales et à l’industrialisation de l’IA, ..."

### 2) `src/data/agenda.ts` (activité `d1-a3c`)
- Titre :
  - Avant : "Keynotes - Au Cœur de la Transformation Digitale : Vision, Tendances et Ruptures."
  - Après : "Keynotes - IA & Transformation Digitale : Vision, Tendances et Ruptures."

- Description :
  - Avant : "...cadrer les opportunités IA dans le secteur financier."
  - Après : "...cadrer les opportunités IA pour les organisations, tous secteurs confondus."

### 3) `src/components/CVs.tsx`
- Aucun changement (conformément à votre demande).

## Implémentation (après votre validation)
1. Appliquer les edits dans `EyTunisie.tsx` et `agenda.ts` (et **ne pas** toucher `CVs.tsx`).
2. Vérifier qu’il ne reste plus de mentions "secteur financier" / "financier" dans `src/` (hors CV).
3. Lancer les validateurs du projet (selon `package.json`, typiquement `npm run lint` / `npm run build` / `npm test` si présents) et corriger si nécessaire.

## Point à valider
Confirmez-vous que l’on **laisse volontairement** la mention "transformation des services financiers" dans `CVs.tsx`, même si l’objectif initial est de supprimer les références au secteur financier ?