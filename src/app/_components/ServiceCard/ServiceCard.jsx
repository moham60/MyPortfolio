export function Card({title,icon,desc}) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg flex  flex-col p-4  items-center justify-center dark:bg-gray-800 dark:border-gray-800 transition-all duration-500 hover:shadow-purple-600  
      hover:scale-105  text-center dark:hover:shadow-purple-500 dark:shadow-neutral-700/80">
  <div className="icon my-4">
    {icon}
  </div>
  <div className="flex flex-wrap">
    <div className="text p-2">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="mt-1 text-gray-500 dark:text-neutral-400">
        {desc}
      </p>
     
    </div>
  </div>
</div>
  );
}