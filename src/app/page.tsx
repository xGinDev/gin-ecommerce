'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Client, Databases, Storage } from 'appwrite';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import './slider.css'

interface Document {
  $id: string;
  title: string;
  image: string;
}

export default function Home() {
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('648bd122df386ec45927');

  const [titles, setTitles] = useState<Document[]>([]);
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    const databases = new Databases(client);

    const fetchDocuments = async () => {
      try {
        const response = await databases.listDocuments(
          '648f9ef1850979ebe44e',
          '648f9efe5de21dc11e95'
        );
        const titles = response.documents.map((document) => ({
          $id: document.$id,
          title: document.title,
          image: document.image
        }));
        setTitles(titles);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, []);

  useEffect(() => {
    const storage = new Storage(client);

    const fetchImages = async () => {
      try {
        const response = await storage.listFiles('6490b7c9c4064bfe3d64');
        const imagePreviews = await Promise.all(
          response.files.map((image) => storage.getFilePreview('6490b7c9c4064bfe3d64', image.$id))
        );
        setImages(imagePreviews);
        console.log("IMG", imagePreviews);

      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const config = {
    dots: false,
    infite: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infite: true,
          dots: false
        },
      },
    ],
  };

  return (
    <div>
      <div className="">
        <Slider {...config}>
          {images.map((image, index) => (
            <div key={image.$id}>
              <h2>{image.name}</h2>
              <Image src={image.href} alt={image.name} width={1920} height={1100} />
            </div>
          ))}
        </Slider>
      </div>
      {titles.map((document) => (
        <div key={document.$id}>
          <h2>{document.title}</h2>
          <Image src={document.image} alt={`Image for ${document.title}`} width={100} height={100} />
        </div>
      ))}
    </div>
  );
}