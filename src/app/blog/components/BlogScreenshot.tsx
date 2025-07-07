import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';

interface FigureProps {
  src: StaticImageData | string;
  alt?: string;
  caption?: ReactNode | string;
}

const Figure: React.FC<FigureProps> = ({ src, alt = '', caption }) => {
  const renderCaption = () => {
    if (!caption) return null;
    if (typeof caption === 'string' && /<[^>]+>/.test(caption)) {
      return <figcaption className="text-center mt-4" dangerouslySetInnerHTML={{ __html: caption }} />;
    }
    return <figcaption className="text-center mt-4">{caption}</figcaption>;
  };

  return (
    <figure>
      <div className="lg:bg-GREY lg:p-2 lg:-mx-24">
        <div className="relative overflow-hidden [&+*]:mt-8 lg:bg-[url('/changelog-bg.svg')] bg-cover bg-center no-repeat lg:px-[5.5rem]">
          <Image
            src={src}
            alt={alt? alt : ''}
            className="lg:shadow-2xl lg:block hidden rounded-3xl w-full h-auto max-w-2xl md:max-w-7xl mx-auto shadow-[0_0_20px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>
      <Image
        src={src}
        alt={alt? alt : ''}
        className="lg:shadow-2xl lg:hidden rounded-3xl w-full h-auto max-w-2xl md:max-w-7xl mx-auto shadow-[0_0_20px_rgba(0,0,0,0.25)]"
      />
      {caption && renderCaption()}
    </figure>
  );
};

export default Figure;
