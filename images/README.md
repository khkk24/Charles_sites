# Instructions pour ajouter le logo Engenigma

## Étapes pour ajouter votre logo :

1. **Sauvegardez votre image du logo** dans le dossier `public/images/` avec le nom `engenigma-logo.png`

2. **Format recommandé :**
   - Format : PNG (avec transparence) ou SVG
   - Taille recommandée : 200x60px (ou proportions similaires)
   - Résolution : 72-144 DPI
   - Arrière-plan transparent de préférence

3. **Le logo apparaîtra automatiquement** dans la navbar avec :
   - Hauteur de 45px sur desktop
   - Hauteur de 35px sur tablette
   - Hauteur de 30px sur mobile
   - Effet hover avec légère animation
   - Ombre portée subtile

## Chemin du fichier :
```
/public/images/engenigma-logo.png
```

## Alternative SVG :
Si vous préférez utiliser un fichier SVG, changez l'extension dans le fichier :
`/src/components/SiteNavbar.jsx` ligne 29 :
```jsx
src="/images/engenigma-logo.svg"
```

Le logo sera automatiquement responsive et s'adaptera à tous les thèmes (clair/sombre).
