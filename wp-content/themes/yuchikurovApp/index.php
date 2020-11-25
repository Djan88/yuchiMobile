<!DOCTYPE html>
<html class="all" lang="en">
<head>
  
  <!-- /Yandex.Metrika counter -->
  <meta charset="utf-8">
  <title><?php wp_title(''); ?></title>
  <link href="<?php bloginfo('template_url'); ?>/css/bootstrap.min.css" rel="stylesheet">
  <link href="<?php bloginfo('template_url'); ?>/style.css" rel="stylesheet">
  <?php wp_head(); ?>
</head>

<body>
  <div id="all" class="container">
    <div class="row">
      <div class="header">
        <button type="button" class="btn btn-outline-primary btn-app pull-left"><img src="<?php bloginfo('template_url'); ?>/svg/menu.svg" alt="icon name"></button>
        <button type="button" class="btn btn-outline-primary btn-app pull-right"><img src="<?php bloginfo('template_url'); ?>/svg/magnifying-glass.svg"></button>
      </div>
      <div class="col page">
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
                <div class="col">
                  <h2><?php the_title(); ?></h2>
                </div>
                <div class="col seminar_content">
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
    </div>

  </div>
  <?php wp_footer(); ?>
  <script src="<?php bloginfo('template_url'); ?>/js/bootstrap.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/jquery.ui.touch-punch.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/pull_ref.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/slideout.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/script.js"></script>
</body>
</html>
