#Gridzilla

Gridzilla is a CSS library which provides a grid-based layout system.

More specifically, a `{display: table}`-based grid system intended to alleviate the pains of the `float`-based grid.

If you need older browser support, then you probably need floats.  If you are designing a modern website, then enjoy the more natural flow provided by CSS tables.

Curious about the specific browser support? We were too!
http://caniuse.com/#feat=css-table

##Installation

This library is best installed via bower.
    bower install cfx-gridzilla

Alternatively, you can download the compiled CSS file from `/public/css/gridzilla.css` and include it in your application just like any other CSS file.


##Usage
Using this library is as simple as installing it (see above), and then including the CSS file in your application. The CSS file can be found under `/public/css/gridzilla.css` and is loaded just like any other CSS file.

####Note: Using this file will conflict with bootstrap.

This is made to be a replacement to Bootstrap's grid, hence the confliction. That being said, the implementation is very similar for ease of use. For example, instead of `.row` you would use `.grid`. Instead of `col-md-5` in bootstrap, you'd use `cell-md-5`.

After including the CSS file, you can write the following HTML to implement the grid.

    <div class="grid">
        <div class="cell-md-6">This cell spans 6 columns.</div>
        <div class="cell-md-6">This one does too.</div>
    </div>

Alternatively, the fixed grid can be used like so.

    <div class="grid fixed">
        <div class="cell-md-12">This cell spans all.</div>
    </div>

A full example can be found in sample.html.

Similarly to Bootstrap, different breakpoints can be specified on their cells.
The following classes are valid, where $X is a number from 0 to 12.

    cell-lg-$X
    cell-md-$X
    cell-sm-$X
    cell-xs-$X

Additionally, setting any cell's $X value to 0 will cause the cell to no longer display at the breakpoint. Our breakpoints follow Bootstrap3's standardized breakpoints.

###Offsets
Need to include some offsets? Offsets in gridzilla are padding based, as the table display doesn't play well with margins. That being said, they're really easy to use. Offsets that should happen before the cell are implemented like so..

    cell-pre-$X
    
Offsets that should happen after the cell are implemented like this...
    
    cell-post-$X

###Need inherit spacing between the cells?
Just add the `.grid-padding` property onto your grid. This will evenly space out your cells for you with ample room in between. If you need to change the spacing, it's as simple as overriding one property or changing a variable if you're building from source.

Your grid html should look like this if you're including the spacing...
    
    <section class="grid grid-padding"></section>

##Building From Source

Interested in contributing? We're happy to have you!

Just follow the typical ["Fork & Pull"](https://help.github.com/articles/using-pull-requests/) GitHub collaborative model.

If you have ideas or questions just [open an issue](https://github.com/CARFAX/gridzilla/issues/new).

###Requirements

Before you're able to build, you'll need to have NPM and Ruby installed. Additionally, you'll need the SASS gem installed in Ruby. We choose to use Ruby instead of Node-SASS because Node-SASS is a port of the original Ruby version. This way, our SASS is kept up to date with the latest features. Lastly, you'll need Gulp installed. This can be accomplished by running

    npm install -g gulp

###Building

Simply clone the repo and then run

    npm install

You should install your dependencies. From here, you can modify the .sass files to make your changes. When you're ready to test your changes, just run

    gulp

from the root directory. Then, open Sample.html and make sure everything looks as expected!

###One Last Step!

If you make any improvements, we'd love to incorporate them into the source at some point. Feel free to open up a pull request and we'll try our best to get to it in a timely manner! Thanks!

##Aditional Info

A github page will come soon, allowing you to see the different grids in action.

##Contact and License Info

Author: CARFAX First Class Frontend Team

License: MIT
