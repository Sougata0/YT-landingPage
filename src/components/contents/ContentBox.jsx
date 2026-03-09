const ContentBox = () => {
  return (
    <div className="">
      <div className="hover:bg-gray-900 p-3 rounded-xl">
        <img
          className="object-cover overflow-hidden rounded-xl w-full aspect-video"
          src="https://i.pinimg.com/1200x/bd/24/3b/bd243bc3808b1d655941cbd7fe5ed79c.jpg"
        />
        <div>
          <h3 className="text-sm font-semibold">Video title goes here</h3>
          <p className="text-xs text-gray-400">Channel name</p>
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
