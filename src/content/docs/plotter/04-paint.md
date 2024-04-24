---
title: Paint with the plotter
description: A guide to paint with the plotter.
---

## In short

To be able to paint with the plotter, we include the dipping in the paint as if it was a piece of the drawing itself. This way, the plotter will dip the brush in the paint and can continue painting. To make this work, we need to follow these steps:

## Artwork preparation

- As always, you need a [vector file consisting out of paths.](../general/01-preparation)
- Group all the paths into their specific color layer. There is an option in Illutstrator to select everything based on a specific color.
  - TODO: could this be done with a script?
- Name the layers with the color you want to use. We've experienced that we need the following additional steps to make the dipping script work:
  - Open the SVG in Inkscape
  - Make shure that the layers are effectively layers. (Mayebe you need to do a right-click → make layer)
  - Right-click on a layer, pick 'Rename layer' and double-check if the name is correct. Sometimes it just says 'Layer 1' or something like that.

Prepare your artwork: group all the paths into their specific color layer.

- Install [Vpype](../general/03-vpype.md)
- Use this script [https://gist.github.com/SimonVanherweghe/fd741b90fa4063c222b690a42d3d171a] to implement the dipping pattern

```shell
vpype read --no-crop linestest.svg -I autodip.vpy
```
