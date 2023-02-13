<?php

// REGISTERING POST TYPE

add_action( 'init', 'register_post_types' );

function register_post_types(){

	register_post_type( 'forms', [
		'label'  => null,
		'labels' => [
			'name'			=> 'Forms',
            'singular_name'	=> 'Form',
		],
		'description'		=> '',
		'public'			=> true,
		'show_in_menu'		=> true,
		'show_in_rest'		=> true,
		'rest_base'			=> null,
		'menu_position'		=> null,
		'menu_icon'			=> null,
		'hierarchical'		=> false,
		'supports'			=> [ 'title', 'editor' ],
		'rewrite'			=> true,
		'query_var'			=> true,
	] );

}

// LIMITING ALLOWED BLOCKS ONLY TO THE ONES CREATED BY THIS PLUGIN

add_filter( 'allowed_block_types_all', '___pysar_allowed_blocks_for_forms', 10, 2 );

function ___pysar_allowed_blocks_for_forms(){

    global $post;
    
    global $BlocksParser;
    
    if( 'forms' == $post->post_type ){

        $allowed_blocks = [];
    
        foreach( $BlocksParser as $type ){
            $typeFullName = 'pysar/' . $type;
            array_push( $allowed_blocks , $typeFullName);
        }

        return $allowed_blocks;

    }

}