# CSS Grid

Contrairement à flexbox qui est environnement unidirectionnel dans lequel les élements se positionnent selon les propriétés émises, css-grid offre une solution bidirectionnel qui fait en sortes que le positionnement se base sur les grilles définies par css-grid, ce qui est proche d'un positionnement dans un tableau.

## Terminologie

Il y a ici également une relation entre la grille conteneur (grid container) et les enfants (Grid items). Le grid container crée un `grid context` dans lequel il y a des lignes (Grid lines) qui ont un axe des colonnes (Columns Axis) gérant les grid columns et un axe des lignes (Row Axis) pour les grids rows.

Les zones générés par les lignes ou les colonnes forment des Grid Tracks. Via les intersections des Grid rows et grid columns ont obtient les cellules ou unités de grilles (Grid Cells) qui permettent de créer des aires ou zones (un peut comme dans un mockup) et qui se nomments des Grid areas
Les espaces entres les colonnes (Column gap) et les rangés (Row Gap) sont appelé gap

## Est il supporté

Selon les browsers, il faut l'activer via une option qui se rapproche de `Enable Experimental Web Platform features` ou `layout.css.grid.enabled` (pour firefox). 
Le support minimal est:
- chrome 57
- Edge 16
- Firefox 52
- Safari 10
- Opéra 44

Plus de détails [ici](https://caniuse.com/#feat=css-grid)

## Grid container

Un conteneur de grille se déclare en mettand la valeur `grid` ou `inline-grid` à la propriété `display`. Pour les grilles imbriqués, c'est la valeur `subgrid` qui doit être utilisée.
La valeur `grid` permet de prendre toute la place du conteneur, alors que la valeur `inline-grid`, juste la place occupée par le contenu

## Taille des gaps

Les gaps se paramètres selon un des propriétés suivantes:

- grid-column-gap (pour les espaces entres les colonnes)
- grid-row-gap (pour les espaces entres les lignes)
- grid-gap (pour les deux, la première valeur étant celle de la colonne et la seconde de la rangée)

## Positionnement à partir du conteneur

On place les élements en donnant la ligne de colonne de départ (la première est 1) et celle d'arrivé via les propriétés:

- grid-column-start
- grid-column-end

Pour les rangés c'est:

- grid-row-start
- grid-row-end

## Positionnement à partir des enfants (items)

### Au niveau des lignes de colonnes

On utilise au niveau des lignes de colonnes la propriété `grid-column` en définissant le départ et l'arrivé 

```
.item1 {
  grid-column: 1 / 5;
}
```

ou en définissant un saut via le mot clé `span`

```
.item1 {
  grid-column: 1 / span 4;
}
```

### Au niveau des lignes de rangés

Au niveau des lignes de rangés c'est le même principe en utilisant la propriété `grid-row`

### Mixin

Pour avoir un raccourci entre colonne et rangé on utilise la propriété `grid-area` en définissant les paramètres ligne-rangee-debut / ligne-colonne-debut / ligne-rangee-fin / ligne-colonne-fin en utilisant également le mot clé `span`

```
.item1 {
  grid-area: 1 / 2 / 5 / 6;
}
.item2 {
  grid-area: 2 / 1 / span 2 / span 3;
}
```

La propriété `grid-area` peut être nommée pour suivre le template (une sorte de format ou patron) `grid-template-areas` du conteneur

```
.item1 {
  grid-area: monAire;
}
.grid-container {
  grid-template-areas: 'monAire monAire monAire monAire monAire';
} 
```

si l'on veut seulement quelques élements on remplace le reste par des points:

```
.item1 {
  grid-area: monAire;
}
.grid-container {
  grid-template-areas: 'monAire monAire . . .';
} 
```

Sur deux colonnes et deux rangés cela donne

```
.grid-container {
  grid-template-areas: 'monAire monAire . . .' 'monAire monAire . . .';
} 
```

Pour une interface web il vous suffirait de faire ceci

```
.header { grid-area: header; }
.menu { grid-area: menu; }
.main { grid-area: main; }
.sidebar { grid-area: right; }
.footer { grid-area: footer; }

.grid-container {
  grid-template-areas:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';
} 
```

NB: il est également possible de changer l'ordre dans la grille

## Définition de la grille

la propriété `grid-template-columns` (avec un s) permet de dire le nombre de colonnes mais également de préciser leur taille, même chose pour les rangés via la propriété `grid-template-rows` (également au pluriel)

## Justification des items

Pour l'horizontal, cela se fait via la propriété `justify-content` (au niveau du conteneur), cette dernière peut prendre les propriétés suivantes:

- space-evenly
- space-aournd
- space-between
- center
- start
- end

Pour le vertical, cela se fait via la prorpiété `align-content` qui peut également prendre les même valeurs

## L'unité fr

un track peut avoir comme taille:

- Une grandeur
- Un pourcentage
- Une fraction de l'espace restant dans la grille (fr)