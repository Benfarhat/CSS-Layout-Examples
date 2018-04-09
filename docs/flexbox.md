# Flexbox

Flexbox est le modules des boites flexibles, il nous permet la réalisation d'interface simplement en nous basant sur une direction de référence.

Dans flexbox il y a deux groupes d'élements:

* Les conteneurs (flex-containers)
* Les élements (flex-items)
* 
## Main axis et Cross Axis

L'axe de référence s'appelle l'axe principal (Main axis) et l'axe qui lui est perpendiculaire sera appelé axe secondaire (Cross Axis).

Chacun de ces axes à un point de début et de fin respectivement Main start / Main end et Cross start /Cross end
Ces axes ont également une taille que l'on appelle Main width et Cross width



C'est au niveau du conteneur que nous déclarons les principaux concepts qui seront appliqués à nos élements internes, dont la propriété flex-direction

## flex-direction

Cette propriété qui défini l'axe principal de travail (la direction) et la sens (de gauche à droite ou de droite à gauche).



- row: de gauche à droite
- row-revers: de droite à gauche
- column: de haut en bas
- column-reverse: de bas en haut

![](images/Basics1.png)
![](images/Basics2.png)

Les valeur row et row-reverse permettent d'avoir un axe horizontale alors que column et column-reverse un axe vertical. L'utilité peut être claire dans le cas des élements d'un menu latéral (dans la sidebar) ou une valeur column facilite fortement leur utilisation.

>**Attention**: Si la propriété direction du body est mise à rtl (right to left) alors les sens (et non les directions) défini en bas seront naturellement inversés. Pour saisir cette notion il faut plutot voir le sens de la propriété flex-direction comme le sens d'écriture, en francais et anglais de gauche à droite, en arabe c'est de droite à gauche, et dit comme ca je ne me suis jamais posé la question pour certaines langues asiatiques qui vont de haut en bas et de gauche à droite mais j'imagine que flexbox y répondra facilement. Pour info: il existe une spécification CSS appellé [writing modes](https://developer.mozilla.org/fr/docs/Web/CSS/writing-mode) qui permet de répondre au différents types d'écriture dont de haut en bas ou tb pour top to botton (valeurs disponibles: horizontal-tb, vertical-rl, vertical-lr, sideways-rl et sideways-lr)
>Dans ce qui suis nous supposerons que nous sommes dans un environnement francophone. ![](images/Basics6.png)

## Le conteneur

Celui ci doit avoir une des deux valeurs suivantes de la propriétés display pour que les enfants deviennent des élements flexibles:

- flex
- inline-flex

Si l'on veut travailler sur plusieurs lignes (cas par exemple de l'affichage d'images ou d'articles) ou plusieurs colonnes, on utilise la propriété 




