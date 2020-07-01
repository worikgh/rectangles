#!/usr/bin/perl -w
use srict;

# Make a SVG rectangles
my $maxx = 3000;
my $maxy = 4854;
my $golden_ratio = 1.61803;

# The top left corner of the document is considered to be the point
# (0,0), or point of origin. Positions are then measured in pixels
# from the top left corner, with the positive x direction being to the
# right, and the positive y direction being to the bottom.

# `maxx`and `maxy` define the number of pixels in the canvas

# Text wrapped...
sub wrapped_text( $$$$$$ )
{
    my ($x, $y, $w, $h, $t, $f) = @_;
    # x, y, w, h describe bounding box
    # t is text and f font
    
    # http://stackoverflow.com/questions/4991171/ddg#4991339
    return "<switch>
<foreignObject x='$x' y='$y' width='$w' height='$h'>
<p xmlns='http://www.w3.org/1999/xhtml' $f>$t</p>
</foreignObject>

<text x='20' y='20'>Your SVG viewer cannot display html.</text>
</switch>";
}
# the viewBox attribute defines the portion of the canvas to display.
# Can zoom in on parts of the canvas with it
my $svg = "
    <svg version='1.1' viewBox='0 0 $maxx $maxy'
    width='.$maxx.' height='.$maxy.'
    xmlns='http://www.w3.org/2000/svg'>
    ";


$svg = $svg . '
</svg>



