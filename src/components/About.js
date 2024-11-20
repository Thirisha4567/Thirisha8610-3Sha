import AboutImg  from '../components/assets/about.jpg';

export default function About () {
    const config ={
        line1:' Hi,my name is thirisha.I am a full stack devoloper',
       line2:'i am profficient in java.html.webdevolopment.css.javascript'
      }
    return <section className='flex flex-col md:flex-row bg-primary px-5 py-5 ' id='about' >
        <div className=' py-5 md:w-1/2  '>
            <img src={AboutImg} width={600} height={300} />
        </div>
        <div className=' md:w-1/2 flex '>
        <div className='flex flex-col justify-center text-white'>
             <h1 className='text-4xl  border-b-4 border-[indigo] mb-5 w-[180px] font-bold'>About Me</h1>
            <p className='pb-5' >{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
        </div>
           
        </div>
    </section>
}