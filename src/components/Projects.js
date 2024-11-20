
import websiteimg1 from '../components/assets/proct.jpg' 
import websiteimg2 from '../components/assets/project.jpg' 

export default function Projects() {
    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='projects'>
    <div className="w-1/2">
    <div className="flex justify-center">
        <h1 className='text-4xl  border-b-4 border-[indigo] mb-5 w-[140px] font-bold'>Projects</h1>
    </div>
       </div>
    <div className="w-full"> 
    <div className='flex flex-col md:flex-row  px-14 gap-16'>
         <div className='relative'>
            <img className='h-[300px]' src={websiteimg1}/>
            <div className='absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100
   '>
                <p className='text-center py-10'>A ecommerce website.Built with men Stack.</p>
            </div>
            </div>
        <div className='relative'>
            <img className='h-[300px]' src={websiteimg2}/>
            <div className='absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100

'>   
              <p className='text-center py-10'>A basic line website.Built with nextjs and react</p>           
            </div>
        </div>
        
      </div>
    </div>
 </section>

}
    
   

