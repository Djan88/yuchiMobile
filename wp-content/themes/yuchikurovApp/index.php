<!DOCTYPE html>
<html class="all" lang="en">
<head>
  
  <!-- /Yandex.Metrika counter -->
  <meta charset="utf-8">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="viewport" content="initial-scale=1, width=device-width, height=device-height, viewport-fit=cover">
  <title><?php wp_title(''); ?></title>
  <link href="<?php bloginfo('template_url'); ?>/css/bootstrap.min.css" rel="stylesheet">
  <!-- <link href="<?php bloginfo('template_url'); ?>/css/animate.css" rel="stylesheet"> -->
  <link href="<?php bloginfo('template_url'); ?>/css/open-iconic-bootstrap.css" rel="stylesheet">
  <link href="<?php bloginfo('template_url'); ?>/css/swipe-bundle.min.css" rel="stylesheet">
  <link href="<?php bloginfo('template_url'); ?>/style.css" rel="stylesheet">
  <?php //wp_head(); ?>
</head>

<body class="wrapper">
  <div id="all" class="container">
    <div class="row">
      <div class="col header">
        <!-- <button type="button" class="btn btn-outline-primary btn-app search-on-page float-right">
          <span class="oi oi-magnifying-glass"></span>
        </button> -->
        ЗАГОЛОВОК СТРАНИЦЫ
      </div>
    </div>
    <div class="row">
      <div class="col page">
        <main id="panel">
          <div class="container app-slide formuls">
            <div class="col-12 slider-box">
              <!-- Swiper -->
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="<?php bloginfo('template_url'); ?>/img/otvorenie.png" alt="Отворение"></div>
                  <div class="swiper-slide"><img src="<?php bloginfo('template_url'); ?>/img/trauma.png" alt="Травма"></div>
                  <div class="swiper-slide"><img src="<?php bloginfo('template_url'); ?>/img/kopje.png" alt="Копье"></div>
                  <div class="swiper-slide">Фильтр</div>
                  <div class="swiper-slide">Solis</div>
                  <div class="swiper-slide">Живая Вода</div>
                  <div class="swiper-slide">Мертвая Вода</div>
                  <div class="swiper-slide">Ловушка</div>
                  <div class="swiper-slide">Супер Дисфункция</div>
                  <div class="swiper-slide">Супер Ловушка</div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
          <div class="container app-main main">
            <div class="row">
              <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
              <div class="col-12">
                <div class="row">
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
              </div>
              <?php endwhile; else: ?>
                <?php _e('Sorry, no posts matched your criteria.'); ?>
              <?php endif; ?>
            </div>
          </div>
          <div class="container app-second second hidden">
            Пока пусто...
          </div>
        </main>
      </div>
    </div>
    <div class="frame">
      <ul class="tabbar">
        <li class="active">
          <a href="" class="box">
            <div>
              <svg>
                <use xlink:href="#box">
              </svg>
              <em></em>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="home">
            <div>
              <svg>
                <use xlink:href="#home">
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="calendar">
            <div>
              <svg>
                <use xlink:href="#calendar">
              </svg>
              <em></em>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="box">
            <path d="M4.2715356,6.86557078 C3.79533783,7.1301251 3.5,7.63205601 3.5,8.1768067 L3.5,15.8231933 C3.5,16.367944 3.79533783,16.8698749 4.2715356,17.1344292 L11.2715356,21.0233181 C11.7245694,21.2750036 12.2754306,21.2750036 12.7284644,21.0233181 L19.7284644,17.1344292 C20.2046622,16.8698749 20.5,16.367944 20.5,15.8231933 L20.5,8.1768067 C20.5,7.63205601 20.2046622,7.1301251 19.7284644,6.86557078 L12.7284644,2.97668189 C12.2754306,2.72499645 11.7245694,2.72499645 11.2715356,2.97668189 L4.2715356,6.86557078 Z"></path>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="home">
            <path d="M3.66781808,10.0753614 C3.5610739,10.1702451 3.5,10.3062472 3.5,10.4490661 L3.5,20 C3.5,20.8284271 4.17157288,21.5 5,21.5 L19,21.5 C19.8284271,21.5 20.5,20.8284271 20.5,20 L20.5,10.4490661 C20.5,10.3062472 20.4389261,10.1702451 20.3321819,10.0753614 L12.9965458,3.55479593 C12.4282167,3.04961457 11.5717833,3.04961457 11.0034542,3.55479593 L3.66781808,10.0753614 Z"></path>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="calendar">
            <path d="M5,4.5 C4.17157288,4.5 3.5,5.17157288 3.5,6 L3.5,19 C3.5,19.8284271 4.17157288,20.5 5,20.5 L19,20.5 C19.8284271,20.5 20.5,19.8284271 20.5,19 L20.5,6 C20.5,5.17157288 19.8284271,4.5 19,4.5 L5,4.5 Z"></path>
        </symbol>
    </svg>
  </div>
  <?php wp_footer(); ?>
  <script src="<?php bloginfo('template_url'); ?>/js/jq.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/jquery.ui.touch-punch.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/pull_ref.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/swiper-bundle.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/script.js"></script>
</body>
</html>
