---
title: Prepare your work
---

You can't just throw any file at the machines and expect them to work. You have to consiser some things first.

## Lines

You have to think in lines instead of shapes. There is no such things a 'fill'.

There are some solutions for this, like the [Hatch fill](<https://wiki.evilmadscientist.com/Hatch_fill>) in InkScape.

Don't worry about linethickness too much. The machine will plot the lines with the thickness of the pen you put in the machine.

## Color

Color doesn't matter. It will be plotted in the color of the pen you put in the machine.

On the other hand, things like [Saxi](/plotter/01-webinterface) use color to split a drawing into certain groups. This can be useful if you want to plot different parts of a drawing with different pens.

## Optimizing

Tools like [Saxi](/plotter/01-webinterface) can optimize your drawing in a way that the pen follows the shortest path.

[Vpype](/general/vpype) can help you with this too. see [linesort](https://vpype.readthedocs.io/en/latest/reference.html#linesort) and [linemerge](https://vpype.readthedocs.io/en/latest/reference.html#linemerge)
