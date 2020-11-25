<!DOCTYPE html>
<html class="all" lang="en">
<head>
  
  <!-- /Yandex.Metrika counter -->
  <meta charset="utf-8">
  <title><?php wp_title(''); ?></title>
  <meta name="viewport" content="user-scalable=no" />
  <meta content="" name="keywords">
  <meta content="" name="description">


  <link href="<?php bloginfo('template_url'); ?>/style.css" rel="stylesheet">
  <?php wp_head(); ?>
</head>

<body>
  <div id="all">
    <nav id="menu">
      <header>
        <h2>Menu</h2>
      </header>
    </nav>

    <main id="panel">
      <header>
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2><?php the_title(); ?></h2>
            </div>
            <div class="col-md-12 seminar_content">
              <?php
              the_content(__('(more...)'));
              edit_post_link(__('Edit This'));
              ?>
            </div>
          </div>
        </div>
        <?php endwhile; else: ?>
          <?php _e('Sorry, no posts matched your criteria.'); ?>
        <?php endif; ?>
      </header>
    </main>

  </div>
  <?php wp_footer(); ?>
  <script src="<?php bloginfo('template_url'); ?>/js/jquery.ui.touch-punch.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/pull_ref.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/slideout.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/script.js"></script>
</body>
</html>
