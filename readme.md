# Simple x3d example

From [Hello X3DDOM](https://doc.x3dom.org/tutorials/basics/hello/)

[View this here](https://daveeveritt.github.io/x3d-example/).

https://cad-convert.com/en/convert/obj-to-x3d

better ?
https://castle-engine.io/convert.php


https://x3dgraphics.com/slidesets/X3dForWebAuthors/Chapter05AppearanceMaterialTextures.pdf 
page 55-56



https://threejsfundamentals.org/threejs/lessons/threejs-load-obj.html

https://codepen.io/Mamboleoo/pen/PqjGdN?editors=1010

https://doc.x3dom.org/tutorials/index.html




https://doc.instantreality.org/tools/x3d_encoding_converter/
https://www.instantreality.org/downloads/

Offline Transcoding
Download and install the InstantPlayer system. The package includes a command line tool called aopt(.exe) which we will use for conversion. Setup your shell-environment to find and include the binary. The usually paths are:

Windows: C:\Program Files\Instant Player\bin\aopt.exe
Mac: /Applications/Instant Player.app/Contents/MacOS/aopt
Linux: /opt/instantReality/bin/aopt

Usage
run "aopt -h" to get a full list of commands.

For this tutorial the most important are:

Convert VRML to X3D-XML
aopt -i foo.wrl -x foo.x3d

Convert VRML or X3D-XML to HTML
aopt -i foo.x3d -N foo.html

Convert VMRL or X3D-XML to XHTML
aopt -i foo.x3d -M foo.xhtml

Optimization and build DEF/USE reuses while converting with "-u"
aopt -i foo.x3d -u -N foo.html

https://developer.blender.org/T66534 (wtf :( )