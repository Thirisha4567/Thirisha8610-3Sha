import RESUMEIMG from '../components/assets/resume.jpg'

export default function Resume() {
        const config ={
            link:'https://publuu.com/flip-book/714408/1587721'
        }
   
    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5 py-5'>
          
        <div className=' md:w-1/2 flex '>
        <div className='flex flex-col justify-center text-white'>
             <h1 className='text-4xl  border-b-4 border-[red] mb-5 w-[140px] font-bold'>Resume</h1>
            <p className='pb-5' >you can view my resume <a className='btn' href={config.link}> Download </a></p>
        </div>
           
        </div>
        <div className=' py-2 md:w-1/2  '>
            <img src={RESUMEIMG} alt='the resume of img' width={400} height={300} />
        </div>
       
    </section>
}