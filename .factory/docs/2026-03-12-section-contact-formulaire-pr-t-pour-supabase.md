## Objectif
Ajouter une **section “Contact”** en fin de page avec un formulaire **user‑friendly**, léger, utile (Nom, Email, Sujet, Message), avec validation, états de chargement, et confirmation inline + reset.

## Choix technique (adapté à ton contexte)
### Option recommandée (simple, 100% gratuite)
**Envoi direct vers Supabase depuis le frontend** via la clé `anon` + **RLS** (Row Level Security) configurée pour autoriser uniquement l’`insert` dans une table “contact_messages”.
- Avantage: pas de serveur à maintenir, rapide à brancher.
- Pré-requis: créer la table + activer RLS + policy d’insert (Supabase UI).
- Anti-spam gratuit: **honeypot** côté UI + règles RLS (et éventuellement une contrainte anti-robot simple côté DB si tu veux).

*(Alternative si tu veux une protection plus forte plus tard: une Supabase Edge Function avec rate-limit — toujours gratuit sur le tier free, mais plus technique.)*

## UX / UI (comportement attendu)
- Section en bas, avant le footer, avec:
  - Titre: “Contact” / “Une question ? Parlons-en.”
  - Micro-copy rassurante (ex: “Réponse sous 24–48h ouvrées.”)
- Champs:
  - **Nom** (requis)
  - **Email** (requis, validation format)
  - **Sujet** (requis)
  - **Message** (requis, textarea)
- Bouton “Envoyer”:
  - désactivé si invalide ou en cours d’envoi
  - spinner / état “Envoi…”
- Confirmation: **message inline** + reset
- Erreur: message inline clair (ex: “Une erreur est survenue, réessayez.”)
- Accessibilité: labels, `aria-invalid`, focus states, `autocomplete`, navigation clavier.

## Implémentation prévue (code)
1. **Créer** `src/components/ContactSection.tsx`
   - Form controlled (React state), validation légère (required + email regex simple + longueur min/max), honeypot hidden field.
2. **Créer** `src/lib/supabaseClient.ts`
   - Initialisation via variables d’environnement Vite:
     - `VITE_SUPABASE_URL`
     - `VITE_SUPABASE_ANON_KEY`
3. **Brancher** la section dans `src/App.tsx` (juste avant le footer).
4. **Côté Supabase (à faire dans l’UI Supabase)**
   - Table `contact_messages` (exemple colonnes):
     - `id` uuid, `created_at` timestamp
     - `name` text
     - `email` text
     - `subject` text
     - `message` text
     - `source` text (optionnel: “landing”)
   - Activer **RLS**
   - Policy: autoriser `insert` pour `anon` (uniquement insert, pas select/update/delete).
5. Validation projet: `npm run lint`.

## Détails anti-spam (gratuit)
- Honeypot (champ invisible que les bots remplissent souvent) → si rempli, on n’envoie pas.
- Possibilité (optionnelle) d’ajouter un délai minimal (ex: refuser si soumission < 2s après chargement) côté client.

## À valider avant que je code
Je pars sur:
- wording générique “pour votre organisation”
- envoi direct Supabase (frontend) + RLS + honeypot
- confirmation inline + reset

Si c’est OK, je passe à l’implémentation.