---
title: Prepare your work
---

You can't just throw any file at the machines and expect them to work. You have to consiser some things first.

## Vector based

You need a vector based file. Bitmaps (like photographs etc) are simply impossible to plot, cut or embroider. But the conversion from a bitmap to a vector based file, can be an opprtunity on its own. Have a look at the different algorithms at [Plotterfun](https://mitxela.com/plotterfun/) for instance.

As a rule of thumb, aim for SVG files. These are the most versatile, are accepted by many tools and easy to convert.

Some machines only accept G-CODE or HPGL files. This a more low-level format that CNC machines can read.

### P5.js vector export

If you want to export your p5.js sketch, you can do this as an SVG with the [p5.js-svg](https://github.com/zenozeng/p5.js-svg) library. Make shure you are using the corresponding p5.js version.

## Lines

You have to think in lines instead of shapes. There is no such things a 'fill'.

There are some solutions for this, like the [Hatch fill](<https://wiki.evilmadscientist.com/Hatch_fill>) in InkScape.

Don't worry about linethickness too much. The machine will plot the lines with the thickness of the pen you put in the machine.

## Color

Color doesn't matter. It will be plotted in the color of the pen you put in the machine.

On the other hand, things like [Saxi](/techtiletime/plotter/01-webinterface) use color to split a drawing into certain groups. This can be useful if you want to plot different parts of a drawing with different pens.

## Optimizing

Tools like [Saxi](/techtiletime/plotter/01-webinterface) can optimize your drawing in a way that the pen follows the shortest path.

[Vpype](/techtiletime/general/03-vpype) can help you with this too. See [linesort](https://vpype.readthedocs.io/en/latest/reference.html#linesort) and [linemerge](https://vpype.readthedocs.io/en/latest/reference.html#linemerge)
