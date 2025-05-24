import data from '../../data.json';

export const Products = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <h1 className='text-4xl lg:text-5xl font-main font-bold my-8 text-center text-sec'>
                Our Products
            </h1>
            <div className='flex flex-wrap justify-center gap-8 max-w-screen-2xl text-sec'>
                {data.map((product, index) => (
                    <div key={index} className="card bg-base-100 w-full sm:w-80 shadow-sm hover:shadow-md transition-shadow">
                        <figure>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-48 object-cover"
                            />
                        </figure>
                        <div className="card-body font-main">
                            <h2 className="card-title text-2xl">{product.title}</h2>
                            <p className="text-xl">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};