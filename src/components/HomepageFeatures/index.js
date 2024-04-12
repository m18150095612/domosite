import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const newsList = [
  { title: '福州外语外贸学院启动科研平台网页建设', 
  summary: '福州外语外贸学院将分批建设科研平台网页，旨在进一步规范科研平台管理，提高科研创新成果的对外宣传力度。此举亦为加强信息化工作，通过科研平台网页展示学院在科研和技术创新方面的成效，以及吸引更多创新人才。' 
},
];

function NewsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="img/news_images/news_image_1.webp" alt="新闻图片1"/>
      </div>
      <div>
        <img src="img/news_images/news_image_2.webp" alt="新闻图片2"/>
      </div>
      <div>
        <img src="img/news_images/news_image_3.jpg" alt="新闻图片3"/>
      </div>
    </Slider>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" id="center-news">中心新闻</Heading>
        <div className="row">
          <div className={clsx('col col--6')}>
            <NewsCarousel />
          </div>
          <div className={clsx('col col--6')}>
            <div className={styles.newsList}>
              <ul>
                {newsList.map((news, index) => (
                  <li key={index}>
                    <strong>{news.title}</strong>
                    <p>{news.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatures;
