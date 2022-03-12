# Basic Recurrsion Tree in React

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-zs4cwl)

Created Parent **Tree** View function component which is accepting a tree data in array form.
**Tree** component looping on incoming data and it pass the each item to the Next component that is **TreeNode** Component.
TreeNode Component accept the node item,
**useState** react hook I am using to show and hide the children while clicking on the parent node. 
Also checking current item has a children or not and base on the condition I am setting a true and false.
IF hasChild and childVisible is true the show child items.
