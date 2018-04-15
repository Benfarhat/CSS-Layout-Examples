# CSS Grid

Contrairement à flexbox qui est environnement unidirectionnel dans lequel les élements se positionnent selon les propriétés émises, css-grid offre une solution bidirectionnel qui fait en sortes que le positionnement se base sur les grilles définies par css-grid, ce qui est proche d'un positionnement dans un tableau.

## Terminologie

Il y a ici également une relation entre la grille conteneur (grid container) et les enfants (Grid items). Le grid container crée un "grid context" dans lequel il y a des lignes (Grid lines) qui ont un axe des colonnes (Columns Axis) gérant les grid columns et un axe des lignes (Row Axis) pour les grids rows.

Les zones générés par les lignes ou les colonnes forment des Grid Tracks. Via les intersections des Grid rows et grid columns ont obtient les cellules ou unités de grilles (Grid Cells) qui permettent de créer des aires ou zones (un peut comme dans un mockup) et qui se nomments des Grid areas

## Est il supporté

Selon les browsers, il faut l'activer via une option qui se rapproche de "Enable Experimental Web Platform features" ou "layout.css.grid.enabled" (pour firefox)
