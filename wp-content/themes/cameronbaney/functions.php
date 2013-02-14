<?php
/**
 * cameronbaney functions and definitions
 *
 * @package cameronbaney
 * @since cameronbaney 1.0
 */
add_action( 'init', 'cb_setup' );
function cb_setup() {

	// Post thumbnails
	add_theme_support( 'post-thumbnails' );

	// Register the menus
	register_nav_menus( array(
		'main_menu' => 'Main Menu'
	) );

	// Custom Post Types
	register_post_type( 'portfolio',
	array(
	'labels' => array(
		'name' => __( 'Portfolio' ),
		'singular_name' => __( 'Portfolio' )
		),
		'menu_position' => 90,
		'menu_icon' => get_bloginfo('template_directory') . '/img/monitor.png',
		'public' => true,
		'hierarchical'=>true,
		'has_archive' => true,
		)
	);
}
?>