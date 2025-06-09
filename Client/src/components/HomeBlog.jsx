const HomeBlog=({
    image,
    postDate,
    username,
    title="This is The title of the blog",
    content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim omnis, necessitatibus aliquam in quibusdam quisquam aut recusandae adipisci ratione consequatur quasi. Consectetur nobis officia animi quasi veritatis alias consequatur ea.'
})=>{
        return(
           <div className="w-full flex flex-col md:flex-row items-center py-6 px-4">
  {/* Image Section */}
  
  <div className="w-full md:w-1/2 flex justify-center">
    {image ? (
  <img
    src={image}
    alt="image"
    className="w-full max-w-md object-cover rounded-md shadow"
  />
) : (
  <div className="w-full max-w-md h-64 flex items-center justify-center border rounded-md shadow">
    <p className="text-gray-500 text-lg">No image found</p>
  </div>
)}
  </div>

  {/* Text Section */}
  <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-gray-700 hover:text-indigo-600 cursor-pointer">
    <p className="text-sm">
      {postDate} · {"@"}
      <span className="cursor-pointer underline hover:text-indigo-600">
        {username}
      </span>
    </p>

    <h1 className="text-2xl md:text-3xl font-semibold py-4">{title}?</h1>

    <p className="text-sm md:text-base leading-relaxed">
      {content}...
    </p>
  </div>
</div>

        )
}

export default HomeBlog