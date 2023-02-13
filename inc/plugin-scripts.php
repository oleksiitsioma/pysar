<?php


add_action( 'admin_enqueue_scripts', function(){
	wp_enqueue_style( 'pysar-admin', plugin_dir_url( __DIR__ ) .'build/admin-style.css' );
}, 99 );