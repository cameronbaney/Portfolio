<?php
/**
 * Template Name: Portfolio
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
<div class="container portfolio">
	<div class="row">
		<?php
			$pcount = 0;
			$portfolio = new WP_Query(array('post_type'=>'portfolio','order'=>'ASC','orderby'=>'menu_order','posts_per_page'=>'-1'));
			while ( $portfolio->have_posts() ) : $portfolio->the_post();
			$pcount +=1;
			?>
			<div class="span4">
				<a href="<?php the_field('link'); ?>" target="_blank">
					<img src="<?php the_field('image'); ?>" alt="<?php the_title(); ?>">
					<div class="desc">
						<h2><?php the_title(); ?></h2>
						<p><?php the_field('description'); ?></p>
						<span href="<?php the_field('link'); ?>" class="btn">Visit Site</span>
					</div>
				</a>
			</div>
			<?php if($pcount == 3){ echo '</div><div class="row">'; $pcount = 0;}?>
		<?php
			endwhile;
			wp_reset_postdata();
		?>
	</div>
</div>
<?php get_footer(); ?>