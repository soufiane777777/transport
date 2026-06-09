# KARBOLOG — Site Web Officiel
**Transport & Logistique Connectée — Maroc**

---

## Structure du projet

```
karbolog-site/
├── index.html          → Page d'accueil
├── about.html          → À propos
├── services.html       → Nos services
├── contact.html        → Contact + Formulaire de devis
├── vercel.json         → Configuration Vercel (URLs propres)
├── css/
│   └── style.css       → Feuille de style complète
├── js/
│   ├── main.js         → Scripts (animations, formulaires)
│   └── components.js   → Header + Footer partagés
└── images/             → Dossier pour vos images (logo, photos)
    └── (vide - ajoutez vos images ici)
```

---

## Déploiement sur Vercel (5 minutes)

### Option A — Interface Web (recommandé)
1. Créez un compte sur **vercel.com**
2. Cliquez **"Add New Project"**
3. Choisissez **"Import Git Repository"** OU glissez-déposez ce dossier
4. Cliquez **"Deploy"** — c'est tout !

### Option B — Via GitHub
1. Créez un dépôt GitHub (github.com/new)
2. Uploadez tous les fichiers dans le dépôt
3. Sur Vercel → "Import from GitHub" → sélectionnez le dépôt
4. Chaque push GitHub redéploie automatiquement le site

### Option C — Vercel CLI
```bash
npm install -g vercel
cd karbolog-site
vercel
```

---

## Connecter votre domaine karbolog.ma

1. Dans Vercel → votre projet → **Settings → Domains**
2. Ajoutez **karbolog.ma**
3. Copiez les enregistrements DNS affichés
4. Dans votre registrar marocain (Registre.ma / OVH) → DNS Management
5. Ajoutez les enregistrements fournis par Vercel
6. SSL activé automatiquement en 24h

---

## Personnalisation

### Changer les coordonnées
Recherchez et remplacez dans tous les fichiers HTML :
- `+212600000000` → votre vrai numéro WhatsApp
- `contact@karbolog.ma` → votre vraie adresse email
- `123 Boulevard Zerktouni, Casablanca` → votre vraie adresse

### Ajouter votre logo
1. Placez votre logo `logo.png` dans le dossier `images/`
2. Dans `js/components.js`, remplacez l'élément `.logo-icon` par :
```html
<img src="images/logo.png" alt="KARBOLOG" style="height:38px;">
```

### Intégrer Google Maps
Dans `contact.html`, remplacez `.map-placeholder` par :
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=VOTRE_CODE_ICI"
  width="100%" height="200" style="border:0;border-radius:16px;" 
  allowfullscreen loading="lazy">
</iframe>
```

### Connecter les formulaires à Supabase
Dans `js/main.js`, fonction `submitDevis()`, ajoutez avant la confirmation :
```javascript
// 1. Ajoutez dans <head> : 
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

// 2. En haut du fichier main.js :
const supabase = supabase.createClient('VOTRE_URL', 'VOTRE_ANON_KEY');

// 3. Dans submitDevis(), avant successEl.classList.add('show') :
await supabase.from('devis').insert({ societe: document.getElementById('f-societe').value, ... });
```

---

## Checklist avant mise en ligne

- [ ] Remplacer le numéro de téléphone (+212600000000)
- [ ] Remplacer l'email (contact@karbolog.ma)
- [ ] Remplacer l'adresse (Boulevard Zerktouni...)
- [ ] Ajouter votre logo dans images/
- [ ] Intégrer Google Maps dans contact.html
- [ ] Tester le formulaire de devis
- [ ] Connecter votre domaine karbolog.ma
- [ ] Soumettre à Google Search Console

---

## Support technique
Pour toute question technique, contactez votre développeur web.
