<!DOCTYPE html>
<html class="all" lang="en">
<head>
  
  <!-- /Yandex.Metrika counter -->
  <meta charset="utf-8">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="viewport" content="initial-scale=1, width=device-width, height=device-height, viewport-fit=cover">
  <title><?php wp_title(''); ?></title>
  <link href="<?php bloginfo('template_url'); ?>/css/bootstrap.min.css" rel="stylesheet">
  <link href="<?php bloginfo('template_url'); ?>/css/jquery-ui.css" rel="stylesheet">
  <!-- <link href="<?php //bloginfo('template_url'); ?>/css/animate.css" rel="stylesheet"> -->
  <link href="<?php bloginfo('template_url'); ?>/css/open-iconic-bootstrap.css" rel="stylesheet">
  <link href="<?php bloginfo('template_url'); ?>/css/swipe-bundle.min.css" rel="stylesheet">
  <link href="<?php bloginfo('template_url'); ?>/styles.css" rel="stylesheet">
  <?php wp_head(); ?>
</head>

<body class="wrapper no-select">
  <div id="all" class="container">
    <div class="row">
      <div class="col header animate__animated animate__fadeInLeft">
        <div class="row">
          <div class="col-2 back-button hidden">
            <svg width="1em" height="1em" viewBox="0 0 12 12" class="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
            </svg>
          </div>
          <span class="col header-text">ПОЛЕЗНЫЕ РЕСУРСЫ</span>
          <div class="col-2 reverce_clean_graph hidden">
            <div class="reverce-clean hidden">
              <svg width="1em" height="1em" viewBox="0 -5 16 20" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </div>
          </div>
          <div class="col-2 reverce_clean_graph_2 hidden">
            <div class="reverce-clean_2 hidden">
              <svg width="1em" height="1em" viewBox="0 -5 16 20" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col page">
        <main id="panel">
          <div class="container app-slide formuls">
            <div class="row">
              <div class="col">
                <h2>Сайты Школы</h2>
                <div class="row">
                  <a href="https://chikurov.com/" class="col main-item">
                    <div class="row">
                      <div class="col-3 main-item-img"><img src="<?php bloginfo('template_url'); ?>/img/ch-fav_.png" alt="Школа Доктора Чикурова"></div>
                      <div class="col main-item-content">
                        <div class="main-item-title">Школа Доктора Чикурова</div>
                        <div class="main-item-sub-title">Официальный сайт. Запись на очные семинары</div>
                      </div>
                    </div>
                  </a>
                  <a href="https://school-bc.ru/" class="col main-item">
                    <div class="row">
                      <div class="col-3 main-item-img"><img src="<?php bloginfo('template_url'); ?>/img/os-fav.png" alt="Онлайн Школа"></div>
                      <div class="col main-item-content">
                        <div class="main-item-title">Онлайн Школа</div>
                        <div class="main-item-sub-title">Расписание и запись на онлайн обучение.</div>
                      </div>
                    </div>
                  </a>
                  <a href="https://shop-bc.com/" class="col main-item">
                    <div class="row">
                      <div class="col-3 main-item-img"><img src="<?php bloginfo('template_url'); ?>/img/sh-fav.png" alt="Магазин БЦ"></div>
                      <div class="col main-item-content">
                        <div class="main-item-title">Магазин БЦ</div>
                        <div class="main-item-sub-title">Книги, флешки, карты и другие товары БЦ с доставкой</div>
                      </div>
                    </div>
                  </a>
                  <a href="https://tarot-bc.ru/" class="col main-item">
                    <div class="row">
                      <div class="col-3 main-item-img"><img src="<?php bloginfo('template_url'); ?>/img/lt-fav.png" alt="Лечебное Tarot"></div>
                      <div class="col main-item-content">
                        <div class="main-item-title">Лечебное Tarot</div>
                        <div class="main-item-sub-title">Онлайн книга о методике "Лебебное Tarot"</div>
                      </div>
                    </div>
                  </a>
                </div>
                <h2>Интерактивные проекты</h2>
                <div class="row">
                  <a href="https://wizardmachine.ru/" class="col main-item">
                    <div class="row">
                      <div class="col-3 main-item-img"><img src="<?php bloginfo('template_url'); ?>/img/wm-fav.png" alt="WizardMachine"></div>
                      <div class="col main-item-content">
                        <div class="main-item-title">WizardMachine</div>
                        <div class="main-item-sub-title">Корректирует нарушения в тонких планах через фото</div>
                      </div>
                    </div>
                  </a>
                  <a href="https://wizardduos.ru/" class="col main-item">
                    <div class="row">
                      <div class="col-3 main-item-img"><img src="<?php bloginfo('template_url'); ?>/img/wd-fav.png" alt="WizardDuos"></div>
                      <div class="col main-item-content">
                        <div class="main-item-title">WizardDuos</div>
                        <div class="main-item-sub-title">Коррекция взаимотношений через фото</div>
                      </div>
                    </div>
                  </a>
                  <a href="https://tarotmachine.ru/" class="col main-item">
                    <div class="row">
                      <div class="col-3 main-item-img"><img src="<?php bloginfo('template_url'); ?>/img/tm-fav.png" alt="TarotMachine"></div>
                      <div class="col main-item-content">
                        <div class="main-item-title">TarotMachine</div>
                        <div class="main-item-sub-title">Коррекция реальности через карты "Tarot"</div>
                      </div>
                    </div>
                  </a>
                  <a href="https://wizard-lovushka.ru/" class="col main-item">
                    <div class="row">
                      <div class="col-3 main-item-img"><img src="<?php bloginfo('template_url'); ?>/img/wl-fav.png" alt="WizardLovushka"></div>
                      <div class="col main-item-content">
                        <div class="main-item-title">WizardLovushka</div>
                        <div class="main-item-sub-title">Программа - Антистресс для снятия напряжения</div>
                      </div>
                    </div>
                  </a>
                  <a href="https://marakata.ru/" class="col main-item">
                    <div class="row">
                      <div class="col-3 main-item-img"><img src="<?php bloginfo('template_url'); ?>/img/m-fav.png" alt="Marakata"></div>
                      <div class="col main-item-content">
                        <div class="main-item-title">Marakata</div>
                        <div class="main-item-sub-title">Электронный оцифратор проекта "Marakata"</div>
                      </div>
                    </div>
                  </a>
                  <a href="http://braincleaner.ru/" class="col main-item">
                    <div class="row">
                      <div class="col-3 main-item-img"><img src="<?php bloginfo('template_url'); ?>/img/b-fav.png" alt="BrainCleaner"></div>
                      <div class="col main-item-content">
                        <div class="main-item-title">BrainCleaner</div>
                        <div class="main-item-sub-title">Метод Терапевтической Дефрагментации Ума</div>
                      </div>
                    </div>
                  </a>
                  <a href="https://deviatochka.ru/" class="col main-item">
                    <div class="row">
                      <div class="col-3 main-item-img"><img src="<?php bloginfo('template_url'); ?>/img/9-fav.png" alt="Девяточка"></div>
                      <div class="col main-item-content">
                        <div class="main-item-title">Девяточка</div>
                        <div class="main-item-sub-title">Психодинамическая трансформационная игра</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="container app-main main">
            <div class="row app-slide-menu">
              <div class="col">
                <div class="row">
                  <div class="col main-item main-item-formuls">
                    <div class="row">
                      <div class="col-3 main-item-img"><img src="<?php bloginfo('template_url'); ?>/img/formuls-fav.png" alt="Формулы"></div>
                      <div class="col main-item-content">
                        <div class="main-item-title">Формулы</div>
                        <div class="main-item-sub-title">Читайте формулы справа налево</div>
                      </div>
                    </div>
                  </div>
                  <div class="col main-item main-item-elems">
                    <div class="row">
                      <div class="col-3 main-item-img"><img src="<?php bloginfo('template_url'); ?>/img/elems-fav_.png" alt="Первоэлементы"></div>
                      <div class="col main-item-content">
                        <div class="main-item-title">Первоэлементы</div>
                        <div class="main-item-sub-title">Коррекция первоэлементов</div>
                      </div>
                    </div>
                  </div>
                  <div class="col main-item main-item-regress">
                    <div class="row">
                      <div class="col-3 main-item-img"><img src="<?php bloginfo('template_url'); ?>/img/treang.png" alt="Регресс"></div>
                      <div class="col main-item-content">
                        <div class="main-item-title">Треугольники</div>
                        <div class="main-item-sub-title">Визуальные динамические проекции мыслительной активности 1-4 зон DSV</div>
                      </div>
                    </div>
                  </div>
                  <div class="col main-item main-item-urav">
                    <div class="row">
                      <div class="col-3 main-item-img"><img src="<?php bloginfo('template_url'); ?>/img/uravn-fav.png" alt="Уравнитель"></div>
                      <div class="col main-item-content">
                        <div class="main-item-title">Уравнитель</div>
                        <div class="main-item-sub-title">Для начала работы проведите пальцем по шкале</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 slider-box slider-formuls overscreen">
              <!-- Swiper -->
              <div class="swiper-container swiper-container-formuls">
                <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="<?php bloginfo('template_url'); ?>/img/otvorenie.png" alt="Отворение"></div>
                  <div class="swiper-slide"><img src="<?php bloginfo('template_url'); ?>/img/trauma.png" alt="Травма"></div>
                  <div class="swiper-slide"><img src="<?php bloginfo('template_url'); ?>/img/kopje.png" alt="Копье"></div>
                  <div class="swiper-slide"><img src="<?php bloginfo('template_url'); ?>/img/filtr.png" alt="Фильтр"></div>
                  <div class="swiper-slide"><img src="<?php bloginfo('template_url'); ?>/img/solis.png" alt="Solis"></div>
                  <div class="swiper-slide"><img src="<?php bloginfo('template_url'); ?>/img/live_voda.png" alt="Живая Вода"></div>
                  <div class="swiper-slide"><img src="<?php bloginfo('template_url'); ?>/img/mertv_voda.png" alt="Мертвая Вода"></div>
                  <div class="swiper-slide"><img src="<?php bloginfo('template_url'); ?>/img/lovushka.png" alt="Ловушка"></div>
                  <div class="swiper-slide"><img src="<?php bloginfo('template_url'); ?>/img/csv_util.png" alt="ЧСВ Утилизатор"></div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination swiper-pagination-formuls"></div>
              </div>
            </div>
            <div class="col-12 slider-box slider-elems overscreen">
              <div class="propeller_title" style="position: absolute;"></div>
              <div class="propeller_field">
                <img class="propeller_rotor" src="<?php bloginfo('template_url'); ?>/img/treangle_alt.png" alt="rotor">
              </div>
            </div>
            <div class="col-12 slider-box slider-regress overscreen">
              <div class="regress-wrapper">
                <!-- <canvas id="canvas" width="350" height="650"></canvas> -->
                <div class="treangle_handler btn btn-lg btn-primary">СТАРТ</div>
                <span id="time" class="inopacity"></span>
                <div class="treangle treangle_0 inopacity"></div>
              </div>
            </div>
            <div class="col-12 slider-box slider-urav overscreen">
              <div class="urav-wrapper">
                <div class="urav_graph">
                  <div class="urav_graph_handle"><i class="fa fa-arrows-alt-h"></i></div>
                  <div class="urav_value"></div>
                </div>
                <div id="slider_2">
                  <div id="custom-handle_2" class="ui-slider-handle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="container app-second second hidden">
            <div class="row socials">
              <a class="col-12 social_tel" href="tel:+79855381468"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg> +7 (985) 538-14-68</a>
              <div class="col social_wrap">
                <a href="https://telegram.me/chikurov_school" class="ch_socials ch_socials_tg"><img src="<?php bloginfo('template_url'); ?>/img/telegram_icon.png" alt="telegram_icon"><span>Telegram</span></a>
              </div>
              <div class="col social_wrap">
                <a href="https://api.whatsapp.com/send?phone=79855381468" class="ch_socials ch_socials_tg"><img src="<?php bloginfo('template_url'); ?>/img/whatsapp_icon.png" alt="whatsapp_icon"><span>WhatsApp</span></a>
              </div>
              <div class="col social_wrap">
                <a href="viber://chat?number=+79855381468" class="ch_socials ch_socials_tg"><img src="<?php bloginfo('template_url'); ?>/img/viber_icon.png" alt="viber_icon"><span>Viber</span></a>
              </div>
              <div class="col social_wrap">
                <a href="mailto:info@chikurov.com" class="ch_socials ch_socials_tg"><img src="<?php bloginfo('template_url'); ?>/img/mail_icon.png" alt="mail_icon"><span>Email</span></a>
              </div>
            </div>
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
          <a href="" class="phone">
            <div>
              <svg id="phone" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 473.806 473.806" style="enable-background:new 0 0 473.806 473.806;" xml:space="preserve">
              <g>
                <g>
                  <path class="st0" d="M375.6,289c-9.5-9.9-21-15.2-33.2-15.2c-12.1,0-23.7,5.2-33.6,15.1l-31.1,31c-2.6-1.4-5.1-2.7-7.6-3.9
                    c-3.5-1.8-6.9-3.4-9.7-5.2c-29.1-18.5-55.5-42.6-80.9-73.7c-12.3-15.5-20.5-28.6-26.5-41.9c8.1-7.4,15.5-15,22.8-22.4
                    c2.8-2.8,5.5-5.6,8.3-8.4c20.6-20.6,20.6-47.4,0-68l-26.8-26.8c-3-3-6.2-6.2-9.1-9.3c-5.9-6.1-12.1-12.4-18.5-18.3
                    c-9.5-9.4-20.9-14.5-32.9-14.5s-23.6,5-33.4,14.5C63.1,42,63.1,42,63,42.1L29.6,75.8C17,88.4,9.8,103.7,8.3,121.5
                    c-2.4,28.7,6.1,55.4,12.6,72.9c15.9,43,39.7,82.8,75.2,125.4c43.1,51.4,94.9,92,154.1,120.6c22.6,10.7,52.8,23.4,86.5,25.6
                    c2.1,0.1,4.2,0.2,6.2,0.2c22.7,0,41.8-8.2,56.7-24.4c0.1-0.2,0.3-0.3,0.4-0.5c5.1-6.2,11-11.8,17.2-17.8c4.2-4,8.6-8.3,12.8-12.7
                    c9.7-10.1,14.8-21.9,14.8-34c0-12.2-5.2-23.9-15.1-33.7L375.6,289z"/>
                </g>
              </g>
              </svg>
              <em>
                <!-- <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 473.806 473.806" style="enable-background:new 0 0 473.806 473.806;" xml:space="preserve">
                <g>
                  <g>
                    <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2
                      c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11
                      S248.656,111.506,256.056,112.706z"/>
                    <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11
                      c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2
                      c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"/>
                  </g>
                </g>
                </svg> -->
              </em>
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
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="phone">
            <path d="M1.188 0c-.11 0-.188.077-.188.188v7.625c0 .11.077.188.188.188h4.625c.11 0 .188-.077.188-.188v-7.625c0-.11-.077-.188-.188-.188h-4.625zm.813 1h3v5h-3v-5zm1.5 5.5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5z" id="phone"></path>
        </symbol>
    </svg>
  </div>
  <?php wp_footer(); ?>
  <script src="<?php bloginfo('template_url'); ?>/js/jq.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/jquery-ui.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/jquery.ui.touch-punch.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/pull_ref.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/propeller.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/swiper-bundle.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/jquery.touchSwipe.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/scripts.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/stacktrace.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/fire_base.js"></script>
</body>
</html>
