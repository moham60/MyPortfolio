"use client"
import { motion } from "framer-motion"
import { transition } from "../../../../transition";
export default function Education({
    degree, institution, duration, location, skills, description, projects }) {
    return (
        <motion.div
               initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            className="relative p-4"
            
      >
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
           transition={transition}
          className="contentEducation">
       {/* Degree & Institution */}
      <div className="mb-3">
        <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400">{degree}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">{institution}</p>
            </div>
             {/* Duration & Location */}
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
        <span>{duration}</span>
        {location && <span>{location}</span>}
            </div>
             {/* Description */}
            <p className="text-gray-500 dark:text-gray-300 mb-4 leading-relaxed">{description}</p>
             {/* Skills */}
      {skills && skills.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">Skills Learned:</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-purple-600/10 text-purple-600  dark:bg-purple-500/10 dark:text-purple-300 text-xs px-3 py-1 rounded-full border dark:border-purple-500/30 border-purple-500/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
            )}
            {/* Projects */}
      {projects && projects.length > 0 && (
        <div>
          <h3 className="text-sm  text-purple-600 dark:text-purple-400 font-medium mb-2">Projects:</h3>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-300 text-sm space-y-1">
            {projects.map((proj, i) => (
              <li key={i}>{proj}</li>
            ))}
          </ul>
        </div>
            )}
        </motion.div>
     
            {/* Line Left */}
        <motion.div initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
           transition={transition}
          className="absolute left-0 rounded top-0 w-1 bg-gray-500 dark:bg-white h-full ">

        </motion.div>
        <div className="absolute left-[-5px]  flex justify-center bottom-[-18px]  ">
          <div className="circe border bg-transparent  w-3 h-3 rounded-full border-gray-600 dark:border-gray-300 ">
            
              </div>
            </div>
            <hr className="dark:text-gray-500 text-gray-300 absolute bottom-[-5px] w-full"/>
        </motion.div>
  );
}