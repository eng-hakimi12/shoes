function Product({items}) {
    return <div className=" ml-[100px] h-[600px]">
        <div className=" hover:shadow-2xl  w-[450px]  h-[500px] bg-white hover:bg-green-300  text-black hover:text-white mt-10 p-6 ">
        <h1  className="text-2xl mt-3 font-bold">ID: {items.id}</h1>
            <img className="w-[250px]  h-[250px]" src={items.image} alt="" />
            <h1  className="text-2xl mt-3 font-bold">{items.title}</h1>
            <div className="flex mt-8 justify-between">
            <p className="text-2xl  font-bold">${items.price}</p>
            <button className="w-10 h-8 text-2xl bg-black hover:bg-white text-white hover:text-black  ">+</button>
            </div>
        </div>

    </div>
}

export default Product