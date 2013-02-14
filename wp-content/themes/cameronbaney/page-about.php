<?php
/**
 * Template Name: About
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package cameronbaney
 * @since cameronbaney 1.0
 */

get_header(); ?>

		<div class="container cf">
				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'content', 'page' ); ?>
					<ul class="social">
						<li><a href="http://twitter.com/cameronbaney" class="icon-twitter" target="_blank"></a></li>
						<li><a href="https://plus.google.com/u/0/116566098312275318770/posts" class="icon-gplus" target="_blank"></a></li>
						<li><a href="http://www.linkedin.com/in/cameronbaney" class="icon-linkedin" target="_blank"></a></li>
						<li><a href="https://github.com/cameronbaney" class="icon-github" target="_blank"></a></li>
						<li><a href="http://grooveshark.com/cameronbaney" class="icon-grooveshark" target="_blank"></a></li>
						<li><a href="http://www.last.fm/user/cameronbaney" class="icon-lastfm" target="_blank"></a></li>
					</ul>


				<?php endwhile; // end of the loop. ?>
		</div>
<?php get_footer(); ?>