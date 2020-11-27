<!DOCTYPE html>
<html class="all" lang="en">
<head>
  
  <!-- /Yandex.Metrika counter -->
  <meta charset="utf-8">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="viewport" content="initial-scale=1, width=device-width, height=device-height, viewport-fit=cover">
  <title><?php wp_title(''); ?></title>
  <link href="<?php bloginfo('template_url'); ?>/css/bootstrap.min.css" rel="stylesheet">
  <link href="<?php bloginfo('template_url'); ?>/style.css" rel="stylesheet">
  <?php wp_head(); ?>
</head>

<body class="wrapper">
  <button type="button" class="mobile-nav-toggle mobile-nav-toggle_open float-right d-lg-none"><i class="fa fa-times" aria-hidden="true"></i></button>
  <div id="all" class="container">
    <div class="row">
      <div class="col header">
        <button type="button" class="btn btn-outline-primary btn-app search-on-page float-right">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col page">
        <!-- <nav id="menu">
          <header>
            <h2>Menu</h2>
          </header>
        </nav> -->
        <nav class="main-nav float-right d-none d-lg-block">
          <ul>
            <li><a href="/">Пункт 1</a></li>
            <li><a href="/">Пункт 2</a></li>
            <li><a href="/">Пункт 3</a></li>
          </ul>
        </nav>

        <main id="panel">
          <header>
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <div class="container">
                <div class="col-12">
                  <h2><?php the_title(); ?></h2>
                </div>
                <div class="col-12 seminar_content">
                  <?php
                  the_content(__('(more...)'));
                  edit_post_link(__('Edit This'));
                  ?>
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
  <script src="<?php bloginfo('template_url'); ?>/js/al.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/bootstrap.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/jquery.ui.touch-punch.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/pull_ref.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/mobile-nav.js"></script>
  <!-- <script src="<?php //bloginfo('template_url'); ?>/js/slideout.min.js"></script> -->
  <script src="<?php bloginfo('template_url'); ?>/js/script.js"></script>
</body>
</html>
