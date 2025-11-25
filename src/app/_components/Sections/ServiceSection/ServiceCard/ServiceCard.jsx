export default function Card({title,icon,desc}) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg flex  flex-col  py-1 px-3 items-center justify-center dark:bg-gray-800 dark:border-gray-800 transition-all duration-500  
      hover:scale-105  text-center w-[90%] mx-auto h-64 sm:w-[80%] md:w-[95%] ">
  <div className="icon my-1">
    {icon}
  </div>
  <div className="flex flex-wrap">
    <div className="text p-2">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="mt-1   text-gray-500 dark:text-neutral-400">
        {desc}
      </p>
     
    </div>
  </div>
</div>
  );
}