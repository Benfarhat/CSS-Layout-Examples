# Layout / Interface CSS

Il existe deux méthodes de mise en place et disposition des élements de votre interface en CSS

- [Flexbox](docs/flexbox.md)
- [CSS Grid](cssgrid.md)

Flexbox permet une gestion unidirectionnelle (en vous basant uniquement soit sur l'axe horizontal / ligne soit l'axe vertical / colonne) des élements. Si par exemple vous avez 5 élements sur une ligne et que le 6 ème passe à la ligne suivante (via la propriété flex-wrap) alors il n'est pas possible de le faire sans modifier l'élement (via notamment flex-basis, flex-grow ou flex-shrink)
CSS Gris contrôle simultanément l'espace bidirectionel (horizontal et vertical) 

A propos des espacement (gap), bientot nous pourrons utiliser row-gap et column-gap (une fois qu'elles seront supportées par tous les navigateurs), mais pour l'instant cette modification ne peut se faire qu'avec nos bon vieux margin et padding. l'utilisation de column-gap permet par exemple à trois colonnes contenant du texte d'être parfaitement ajuster vers le bas, les margins et paddings ne pourront jamais le réaliser de manière fonctionnelle (quelque soit le texte).

# DEMO

Flexbox:

- [Exemple 01]()

Playground:

- [Jeux de dés]()
 