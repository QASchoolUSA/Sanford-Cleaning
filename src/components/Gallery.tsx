import Image from 'next/image';

const images = [
    {
        src: '/sanford-cleaning-cleaning-fridge.png',
        alt: 'Deep cleaning inside a refrigerator in Sanford FL',
        title: 'Deep Cleaning',
    },
    {
        src: '/sanford-cleaning-house-cleaning-wiping-off-dust.png',
        alt: 'Professional house cleaner wiping dust from shelves',
        title: 'Detailed Dusting',
    },
    {
        src: '/sanford-cleaning-mopping-floors.png',
        alt: 'Mopping hardwood floors for a streak-free shine',
        title: 'Floor Care',
    },
    {
        src: '/sanford-cleaning-vacuuming-floor.png',
        alt: 'Vacuuming carpets and rugs to remove allergens',
        title: 'Carpet Vacuuming',
    },
    {
        src: '/sanford-cleaning-windows-cleaning.png',
        alt: 'Cleaning interior windows for crystal clear views',
        title: 'Window Cleaning',
    },
];

export default function Gallery() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Work in Action</h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        See the difference our professional cleaning services make. We take pride in every detail, from sparkling windows to spotless floors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-xl shadow-lg group h-80 md:h-96 ${index === 0 ? 'md:col-span-2' : ''
                                }`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white text-xl font-semibold">{img.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
