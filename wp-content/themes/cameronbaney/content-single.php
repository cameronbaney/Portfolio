<?php
/**
 * @package cameronbaney
 * @since cameronbaney 1.0
 */
?>

	<h1><?php the_title(); ?> <?php edit_post_link( __( 'Edit', 'cameronbaney' ), '<span class="edit-link"> - ', '</span>' ); ?></h1>
	<div class="meta"><i class="icon-calendar"></i><?php the_date(); ?> <i class="icon-tags"></i><?php the_category(', '); ?></div>

	<div class="entry-content">
		<?php the_content(); ?>
		<?php wp_link_pages( array( 'before' => '<div class="page-links">' . __( 'Pages:', 'cameronbaney' ), 'after' => '</div>' ) ); ?>
	</div><!-- .entry-content -->
