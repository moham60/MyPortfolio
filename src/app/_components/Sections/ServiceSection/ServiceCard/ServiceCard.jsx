export default function Card({ title, icon, desc }) {
  return (
    <div className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-border-custom transition-all duration-500 hover:-translate-y-1">
      <div className="flex flex-col flex-grow p-8 gap-6">
        <div className="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 transition-all duration-500">
          {/* We assume the icon passed is an SVG or similar element */}
          <div className="w-8 h-8 flex items-center justify-center">
            {icon}
          </div>
        </div>
        
        <div className="space-y-3 mt-2">
          <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary-400 dark:group-hover:text-primary-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed font-medium">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
