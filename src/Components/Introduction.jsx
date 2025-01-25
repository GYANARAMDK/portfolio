

export default function Introduction() {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-evenly m-4 gap-8'>
        <div className="img-section shadow-all-sides ">
            <img src="myphoto.jpeg" alt="photo" className=" h-72 w-auto aspect-ratio-[16/9] rounded-full"/>
        </div>
        <div className='information-section'>
           <h1> Gyanaram dhaka </h1>
           <h1> </h1>
        </div>
    </div>
  )
}
