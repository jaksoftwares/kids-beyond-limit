import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';

const MasonryGrid = () => {
  const images = [
    "/gallery/001.jpg",
    "/gallery/002.jpg",
    "/gallery/003.jpg",
    "/gallery/004.jpg",
    "/gallery/005.jpg",
    "/gallery/006.jpg",
    "/gallery/007.jpg",
    "/gallery/008.jpg",
    "/gallery/009.jpg",
    "/gallery/010.jpg",
    "/gallery/011.jpg",
    "/gallery/012.jpg",
    "/gallery/013.jpg",
    "/gallery/014.jpg",
    "/gallery/015.jpg",
    "/gallery/016.jpg",
    "/gallery/017.jpg",
    "/gallery/018.jpg",
    "/gallery/019.jpg",
    "/gallery/020.jpg",
    "/gallery/021.jpg",
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry
        columnsCount={4}
        gutter="10px"
        className="space-y-4 md:px-40 px-10 py-10"
      >
        {!loaded &&
          Array.from({ length: images.length }).map((_, i) => (
            <Skeleton key={i} className='w-full h-60 rounded-md' />
          ))
        }

        {loaded &&
          images.map((image, i) => (
            <div key={i} className="relative w-full h-auto overflow-hidden rounded-lg">
              <div className="relative w-full h-0 pb-[60%] overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Gallery image ${i}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${
                    i % 2 === 0 ? 'hover:scale-110' : 'scale-110 hover:scale-100'
                  }`}
                  width={500}
                  height={300}
                  quality={80}
                  priority={i === 0}
                />
              </div>
            </div>
          ))
        }
      </Masonry>
    </ResponsiveMasonry>
  );
};


export default MasonryGrid;
