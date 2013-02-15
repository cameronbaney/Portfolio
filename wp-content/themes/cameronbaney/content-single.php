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
		<h2>Share this article</h2>
		<iframe src="//www.facebook.com/plugins/like.php?href=<?php the_permalink(); ?>&amp;send=false&amp;layout=button_count&amp;width=100&amp;show_faces=false&amp;font&amp;colorscheme=light&amp;action=like&amp;height=21&amp;appId=434768336556391" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:21px;" allowTransparency="true"></iframe>
		<a href="https://twitter.com/share" class="twitter-share-button" data-via="cameronbaney" data-lang="en">Tweet</a>
		<h2>Comments</h2>
		<?php wp_link_pages( array( 'before' => '<div class="page-links">' . __( 'Pages:', 'cameronbaney' ), 'after' => '</div>' ) ); ?>
	</div><!-- .entry-content -->
