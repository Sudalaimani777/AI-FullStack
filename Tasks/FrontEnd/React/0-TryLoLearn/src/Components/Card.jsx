const Card = () => {

    const cardInfo = [
        {id:1, img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80", title:"Mountain Peaks", description:"Explore breathtaking mountain landscapes and discover the beauty of nature's tallest wonders."},
        {id:2, img:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&q=80", title:"Forest Retreat", description:"Immerse yourself in peaceful forest trails where tranquility meets natural beauty."},
        {id:3, img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&q=80", title:"Valley Views", description:"Experience stunning valley vistas and the serene landscapes that inspire adventure."},
    ]

  return (
    <>
        <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        cardInfo.map(card => (
                            <div 
                                key={card.id} 
                                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                <div className="h-48 overflow-hidden rounded-t-lg">
                                    <img 
                                        src={card.img} 
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Card