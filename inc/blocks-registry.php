<?php 

$BlocksParser = scandir(  plugin_dir_path( __FILE__ ) . 'blocks' );

$BlocksRemovableValues = array( '.' , '..' );

foreach( $BlocksRemovableValues as $value ){
    array_splice( $BlocksParser , array_search( $value , $BlocksParser) , 1);
}

function ___pysar_register_blocks() {
    
    global $BlocksParser;

    foreach( $BlocksParser as $type ){
        register_block_type_from_metadata( plugin_dir_path( __FILE__ ) . 'blocks/' . $type );
    }
}


add_action('init', '___pysar_register_blocks');