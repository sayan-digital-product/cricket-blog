import { Carousel } from "react-responsive-carousel";
import { slides } from "@santech/core/config/carousel.config";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import { SlidesModel } from "@santech/core/models/slides.model";
// import styles from "../styles/Responsive.module.css";
import style from './carousel.module.css';
import { IKImage, IKContext } from 'imagekitio-react'
import { imageBaseurl } from '@santech/core/config/app.config';
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";


export default function ResponsiveCarousel() {

  const renderLink = (url: string | undefined) => {

    if(url){
      return (<Link href={url} className={style.textColor}>
                Read more
              </Link>);
    } else {
      return (<span className={style.textColor}>COMING SOON...</span>)
    }

  }

    return (
      <div > 
       <Carousel
            showArrows={true}
            showIndicators={true}
            infiniteLoop={true}
            dynamicHeight={false}
            transitionTime={500}
            interval={2000}
            autoPlay={true}
            showStatus={false}
            stopOnHover={true}
            showThumbs={false}
          >
            {slides.map((item: SlidesModel) => (
              <div className={`grid grid-cols-12 ${style.carouselContainer}`} key={item.id}>
                <div className="col-span-6">
                  {item?.imageUrl && 
                    <IKContext urlEndpoint={imageBaseurl.imageBase}>
                        <IKImage src={item.imageUrl} alt="slides" />
                    </IKContext>}
                </div>
                <div className="grid col-span-6 content-center">
                  <h2  className="text-xl font-bold">{item.title}</h2>
                  <section>{item.text}</section>
                  {item && <Button variant='text' size='small' className='hover:underline-offset-4 hover:underline'>
                    {renderLink(item.linkUrl)}
                  </Button>}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      );
    }