'use client'
import Fullpage, { FullpageNavigation, FullPageSections } from "@ap.cx/react-fullpage";

export default function FullPageContext({children}) {
    return (
        <Fullpage>
          
        <FullPageSections>
         
             {children} 
          
             
            </FullPageSections>
           
    </Fullpage>
      
  );
}