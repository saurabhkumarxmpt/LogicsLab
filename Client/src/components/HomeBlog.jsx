const HomeBlog=({
    image,
    postDate,
    username,
    title="This is The title of the blog",
    about='lorem'
})=>{
        return(
           <div className="w-full flex flex-col md:flex-row items-center py-6 px-4">
  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={image}
      alt="image not found"
      className="w-full max-w-md object-cover rounded-md shadow"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-gray-700">
    <p className="text-sm">
      {postDate} ·{" "}
      <span className="cursor-pointer underline hover:text-indigo-600">
        {username}
      </span>
    </p>

    <h1 className="text-2xl md:text-3xl font-semibold py-4">{title}?</h1>

    <p className="text-sm md:text-base leading-relaxed">
      {about}
    </p>
  </div>
</div>

        )
}

export default HomeBlog