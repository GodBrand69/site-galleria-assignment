import Head from 'next/head';
import Image from 'next/image';

export default function Home() {

  const handleClick = (event) => {
    const name = event.target.name;
    if(name === "next"){
      document.getElementById("one").style.backgroundColor = "#22c55e";
    } else if(name === "dump"){
      document.getElementById("one").style.backgroundColor = "white";
    } else if(name === "review"){
      document.getElementById("one").style.backgroundColor = "#fde047";
    }
    console.log("Working");
  }

  return (
    <div>
      <Head>
        <title>Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-[82%]'>
      <div className="flex font-semibold justify-between w-full p-1 text-white mt-2 ml-2 bluebg">
        <div>
          Q No.: 1
        </div>
        <div className='flex'>
          View in: <span className='px-3 flex border-2 border-black bg-white text-black ml-2 '>English<Image src="/down.svg" className='ml-2' width={13} height={10} /></span>
        </div>
      </div>
      <div className='flex border-[1px] shadow-xl ml-2 mt-2'>
        <div className='w-1/2  pl-2 pr-6 border-r-[1px]'>
          <h2 className="text-blue-700 border-b-[1px] font-semibold text-md">QUESTIONS INSTRUCTIONS</h2>
          <p className='text-justify  mt-2'>
            Passage you want to hit smallbox on the floor with a marble 
            fired from a spring-loaded gun that is mounted on a table. 
            The target box is distance R horzontally from the edge of the table; 
            see the figure to thr right. You compress the spring a distance d, but the centre of the marble falls short by a distace e of the
            center of the box. How far should you compress the spring to score
            a direct hit (negelct friction)? 
          </p>
        </div>
        <div className='w-1/2 pl-6'>
          <h2 className="text-blue-700 border-b-[1px] font-semibold text-md">QUESTION</h2>
          <p className='text-justify mt-2'>
          A block of mass m is moving with an initial velocity v0 towards a stationary spring of stiffness k
          attached to the wall as shown. Find the maximum compression in the spring.
          <Image src="/question.png" width={250} height={150} />
          </p>
          <ul>
          <li className='flex border-y-[1px]'><input type="radio" id="html" name="fav_language" value="HTML" /><Image src="/op1.png" className='ml-4' width={80} alt="" height={80} /></li>
          <li className='flex border-b-[1px]'><input type="radio" id="html" name="fav_language" value="HTML" /><Image src="/op2.png" className='ml-4' width={80} alt="" height={80} /></li>
          <li className='flex border-b-[1px]'><input type="radio" id="html" name="fav_language" value="HTML" /><Image src="/op3.png" className='ml-4' width={80} alt="" height={80} /></li>
          <li className='flex border-b-[1px]'><input type="radio" id="html" name="fav_language" value="HTML" /><Image src="/op4.png" className='ml-4' width={80} alt="" height={80} /></li>
          </ul>
        </div>
      </div>
      <div className='w-[15%] absolute right-0 top-14'>
          <div className='flex bg-blue-100 font-semibold border-2 shadow-lg rounded-lg'>
            <Image className='rounded-lg' src="/pfp.jpg" width={110} height={100} alt="" />
            <div className='ml-2'>
            <div className='flex mt-3'>
              <h2>Time<br/> Left: </h2>
              <p className='mt-3 ml-2'> 02:39:29</p>
            </div>
            <div className='mt-7 italic'>
              Ashish Kumar
            </div>
            </div>
          </div>

          <div className='bg-blue-100 h-[500px] rounded-lg '>
            <h2 className="font-semibold justify-between w-full p-1 rounded-t-md text-white mt-4 bluebg">Questions Palette</h2>
            <div className='text-center'>
            <div className='mt-1'>
            <button id='one' className='py- mx-[2px] bg-white px-[14px] font-medium text-md'>1</button>
            <button className='py- mx-[2px] bg-red-500 px-[14px] font-medium text-md'>2</button>
            <button className='py- mx-[2px] bg-green-500 px-[14px] font-medium text-md'>3</button>
            <button className='py- mx-[2px] bg-green-500 px-[14px] font-medium text-md'>4</button>
            <button className='py- mx-[2px] bg-red-500 px-[14px] font-medium text-md'>5</button>
            </div>

            <div className='mt-1'>
            <button className='py- mx-[2px] bg-yellow-300 px-[14px] font-medium text-md'>6</button>
            <button className='py- mx-[2px] bg-green-500 px-[14px] font-medium text-md'>7</button>
            <button className='py- mx-[2px] bg-white px-[14px] font-medium text-md'>8</button>
            <button className='py- mx-[2px] bg-purple-400 px-[14px] font-medium text-md'>9</button>
            <button className='py  mx-[2px] bg-gray-400 px-[10px] font-medium text-md'>10</button>
            </div>
            </div>

            <div>
            <h2 className="font-semibold justify-between w-full rounded-t-md mt-[150px] p-1 text-white bluebg">Legend (Click to view)</h2>
            <div className='text-center flex mt-1'>
            <button className='w-[120px] text-sm py-1 mx-[2px] bg-green-500 font-semibold'>4 Answer</button>
            <button className='w-[120px] text-sm py-1 mx-[2px] bg-red-500 font-semibold'>2 No Answer</button>
            </div>
            <div className='text-center flex mt-1'>
            <button className='w-[120px] text-sm py-1 mx-[2px] bg-purple-400 font-semibold'>Review+Answer</button>
            <button className='w-[120px] text-sm py-1 mx-[2px] bg-yellow-300 font-semibold'>Review-Answer</button>
            </div>
            <div className='text-center flex mt-1'>
            <button className='w-[120px] text-sm py-1 mx-[2px] bg-gray-400 font-semibold'>Dump</button>
            <button className='w-[120px] text-sm py-1 mx-[2px] bg-white font-semibold'>No Visit</button>
            </div>
            <h2 className="font-medium justify-between w-full p- text-center text-black mt-1 bluebg">10 All Questions</h2>
            <hr className='border-white border-[1px] mt-5'></hr>
            <div className="text-center">
            <div className='text-center  mt-2'>
            <button className="px-5  rounded-md mr-1 w-[90px] py-1 font-medium text-[15px] text-white bluebg">Profile</button>
            <button className="px-5  rounded-md py-1 w-[90px] font-medium text-[15px] text-white bluebg">Instr</button>
            </div>
            <div className='text-center  mt-1'>
            <button className="px-3  rounded-md mr-1 w-[90px] py-1 font-medium text-[15px] text-white bluebg">Questions</button>
            <button className="px-3  rounded-md py-1 w-[90px] font-medium text-[15px] text-white bluebg">Submit</button>
            </div>
            </div>
            </div>
              

          </div>
        </div>
      </div>
      
      <div>
      <ul className="flex gap-2 mt-3 ml-4">
                    <li>
                        <button className="px-10 py-1 font-semibold text-[16px] text-white bluebg">CLEAR RESPONSE</button>
                    </li>
                    <li>
                        <button onClick={handleClick} name="review" className="px-10 py-1 font-semibold text-[16px] text-white bluebg">REVIEW</button>
                    </li>
                    <li>
                        <button onClick={handleClick} name="dump" className="px-10 py-1 font-semibold text-[16px] text-white bluebg">DUMP</button>
                    </li>
                    <li>
                        <button className="px-10 py-1 font-semibold text-[16px] text-white bluebg">PREVIOUS</button>
                    </li>
                    <li>
                        <button onClick={handleClick} name="next" className="px-10 py-1 font-semibold text-[16px] text-white bluebg">NEXT</button>
                    </li>
                </ul>
      </div>

      
    </div>
  )
}
