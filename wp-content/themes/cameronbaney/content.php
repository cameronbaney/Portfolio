<?php
/**
 * @package cameronbaney
 * @since cameronbaney 1.0
 */
?>

<div class="post span12">
	<div class="row">
		<div class="span4">
			<a href="<?php the_permalink(); ?>" class="thumb" style="background:url(http://lorempixel.com/370/250/sports/) center center; background-size:100%"><?php the_title(); ?></a>
		</div>
		<div class="span8">
			<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
			<div class="meta"><i class="icon-calendar"></i><?php the_date(); ?> <i class="icon-tags"></i><?php the_category(', '); ?></div>
			<?php the_excerpt(); ?>
			<a href="<?php the_permalink(); ?>" class="btn">Read more</a>
		</div>
	</div>
</div>
