<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package cameronbaney
 * @since cameronbaney 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 */
	global $page, $paged;

	wp_title( '|', true, 'right' );

	// Add the blog name.
	bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'cameronbaney' ), max( $paged, $page ) );

	?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<script type="text/javascript" src="//use.typekit.net/els2dzt.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
<link href="<?php bloginfo('template_url'); ?>/temp.css" rel="stylesheet">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div class="header cf">
		<div class="container">
			<a href="/" class="logo">Cameron Baney</a>
			<a href="#menu" class="show-menu icon-menu"></a>
			<?php wp_nav_menu(array('theme_location'=>'main_menu','menu_class'=>'nav','container'=>'')); ?>
		</div>
	</div>