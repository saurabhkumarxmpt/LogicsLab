import Navbar from "../components/Navbar";
const Home=()=>{
    return(
        <>
        <Navbar/>
        <div className="flex min-h-screen ">
        <div className="w-1/2 p-5">
            <img 
            src="/home_images/first_image.jpg"
            alt="image not found"
            className="bg-cover h-full"
            />
        </div>
        <div className="w-1/2 p-5 ">
        <div className="flex justify-center h-full z-30">
            <div>
                <h1 className="text-center text-3xl font-sans text-gray-500  py-6">Solve Problam</h1>
                <img src="/home_images/second_image.jpg"
                alt="image not found"
                className="w-[450px]"
                />
                <div className="w-[450px]  p-4 hover:text-blue-500 cursor-pointer">
                    <h1 className="text-3xl py-3 text-gray-500 hover:text-blue-500">Solve the problam in HTML</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, dicta numquam a ea nisi error molestiae facere suscipit nemo ratione mollitia officia eaque vero.</p>
                </div>
                <div className="text-center py-10">
                    <button
                    className="py-3 px-10 border-1 cursor-pointer hover:text-blue-500"
                    >All Posts</button>
                </div>
            </div>
        </div>
        </div>
      </div>


        </>
    )
}


export default Home;