<?php

/*
    Plugin name: Pysar
    Author: Oleksii Tsioma
    Author URI: https://www.linkedin.com/in/oleksiitsioma/
    Version: 1.0.0
    Description: Advanced plugin for form generation in WordPress. Swotch to new forms that built using React and Gutenberg blocks!
*/


// REGISTERING BLOCKS

require_once( __DIR__ . '/inc/blocks-registry.php');


// REGISTERING FORMS POST TYPE

require_once( __DIR__ . '/inc/forms-post-type.php');


// REGISTERING STYLES AND SCRIPTS

require_once( __DIR__ . '/inc/plugin-scripts.php');