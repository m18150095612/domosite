import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const newsList = [
  { title: '新闻标题1', summary: '新闻摘要1' },
  { title: '新闻标题2', summary: '新闻摘要2' },
  { title: '新闻标题3', summary: '新闻摘要3' },
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
        <img src="img/news_images/news_image_1.png" alt="新闻图片1"/>
      </div>
      <div>
        <img src="img/news_images/news_image_2.png" alt="新闻图片2"/>
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
        <div className="row">
          <div className={clsx('col col--6')}>
            <NewsCarousel />
          </div>
          <div className={clsx('col col--6')}>
            <div className={styles.newsList}>
              <Heading as="h2">中心新闻</Heading>
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
