<?php
/**
 * The Template for displaying all single posts.
 *
 * @package cameronbaney
 * @since cameronbaney 1.0
 */

get_header(); ?>

	<div class="container">
		<div class="row">
			<div class="span4">
				<?php $thumb = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'regular'); ?>
				<div class="thumb" style="background:url(<?php echo $thumb[0]; ?>) center center; background-size:100%"><?php the_title(); ?></div>
			</div>
			<div class="span8">
				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'content', 'single' ); ?>

					<?php
						if ( comments_open() || '0' != get_comments_number() )
							comments_template( '', true );
					?>

				<?php endwhile; // end of the loop. ?>
			</div>
		</div>
	</div>

<?php get_footer(); ?>