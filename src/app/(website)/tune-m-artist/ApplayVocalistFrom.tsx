import React from 'react'

const ApplayVocalistFrom: React.FC = () => {
    const genres = [
        'POP',
        'DANCE POP',
        'HOUSE',
        'FUTURE HOUSE',
        'DEEP HOUSE',
        'COVERS',
        'OTHER'
    ];
    return (
        <div className=' bg-black  ' >
            <div className=' max-w-[1366px] mx-auto py-8 lg:py-[60px] px-4 ' >
                <div className=' flex lg:flex-row flex-col items-start gap-y-8 lg:gap-y-0 relative lg:gap-5 ' >
                    <div>
                        <p className=' lg:rotate-90 text-[#fff] lg:text-lg lg:absolute lg:top-14 lg:-ml-20   ' >JUST FOR YOU</p>
                    </div>
                    {/* left side  */}
                    <div className=' w-full ' >
                        <div className=' max-w-[301px] ' >
                            <h1 className=' text-white leading-9 text-xl lg:text-[35px] ' >Apply to become a vocalist at TUNEM.</h1>
                        </div>
                        <div className='  max-w-[449px] mt-5 text-white text-lg space-y-6 ' >
                            <p>Quality and transparency are our top priorities, therefore we want to be as transparent as possible when recruiting vocalists to Vocalsite.</p>
                            <div>
                                The payment split on TUNEM is: <br />
                                70% You | 30% TUNEM
                            </div>
                            <div>
                                <p>
                                    Read more about the vocalist qualification and terms here.When signing up to become a vocalist you agree to the terms & conditions and vocalist guidelines.
                                </p>
                            </div>

                        </div>

                        <div className=' max-w-[372px] mt-9 ' >
                            <p className=' text-[21px] text-[#E7F056] font-bold ' >Why would you wanna become a vocalist at TUNEM?</p>
                        </div>
                        <div className=' mt-10' >
                            <div className=' flex items-center gap-8 ' >
                                <div className=' w-[38px] h-[38px] rounded-full bg-[#D9D9D9] ' >

                                </div>
                                <div>
                                    <p className=' text-white leading-6 text-lg ' >Passive Income</p>
                                </div>
                            </div>
                            <div className=' flex items-center gap-8 my-8 ' >
                                <div className=' w-[38px] h-[38px] rounded-full bg-[#D9D9D9] ' >

                                </div>
                                <div>
                                    <p className='text-white leading-6 text-lg ' >Grow Your Brand</p>
                                </div>
                            </div>
                            <div className=' flex items-center gap-8 ' >
                                <div className=' w-[38px] h-[38px] rounded-full bg-[#D9D9D9] ' >

                                </div>
                                <div>
                                    <p className=' text-white leading-6 text-lg ' >Time Freedom</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* right side  */}
                    <div className='  w-full ' >

                        <form>
                            {/* name  */}
                            <div className=' flex flex-col ' >
                                <label className=' text-white text-lg font-bold leading-6  ' htmlFor="name">Name</label>
                                <input id='name' className='hover:outline-0  focus:outline-0 hover:ring-0 border-b border-[#818080] bg-black text-white py-1 text-lg font-medium ' type="text" />
                            </div>

                            {/* email  */}

                            <div className=' flex flex-col mt-5 text-lg font-bold leading-6  ' >
                                <label className=' text-white  ' htmlFor="email">Email</label>
                                <input id='email' className='hover:outline-0  focus:outline-0 hover:ring-0 border-b border-[#818080] bg-black text-white py-1 text-lg font-medium ' type="email" />
                            </div>

                            {/* Stage Name (optional) */}

                            <div className=' flex flex-col mt-5  ' >
                                <label className=' text-white text-lg font-bold leading-6  ' htmlFor="stageName">Stage Name (optional)</label>
                                <input id='stageName' className='hover:outline-0  focus:outline-0 hover:ring-0 border-b border-[#818080] bg-black text-white py-1 text-lg font-medium ' type="text" />
                            </div>


                            {/* Tell us about you */}

                            <div className='flex flex-col mt-5'>
                                <label className='text-white text-lg font-bold leading-6' htmlFor="aboutUs">
                                    Tell us about you
                                </label>
                                <textarea
                                    id='aboutUs'
                                    placeholder='What makes you a great fit for TUNEM? Feel free to introduce yourself and include social media links if you want to.'
                                    className='hover:outline-0 focus:outline-0 hover:ring-0 border-b border-[#818080] bg-black text-white py-1 text-lg font-medium resize-none'
                                    rows={4} // You can adjust the number of rows if needed
                                />
                            </div>

                            {/* genre  */}

                            <div className='bg-black mt-5 text-white max-w-5xl mx-auto'>
                                <h3 className='text-lg font-bold mb-4'>
                                    What genre do you work with the most? (multiple choice)
                                </h3>
                                <div className='flex flex-wrap gap-6  '>
                                    {genres.map((genre, index) => (
                                        <div key={index} className='flex items-center gap-2'>
                                            <input
                                                type='checkbox'
                                                id={genre}
                                                name='genre'
                                                className='appearance-none w-6 h-6 rounded-full border-2 border-white checked:bg-yellow-400 checked:border-yellow-400'
                                            />
                                            <label htmlFor={genre} className='text-white cursor-pointer'>
                                                {genre}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* other genre  */}
                            <div className='flex flex-col mt-5'>
                                <label className='text-white text-lg font-bold leading-6' htmlFor="otherGenre">
                                    If you choose "other", which genre?
                                </label>
                                <textarea
                                    id='otherGenre'
                                    placeholder='What makes  you a great fit for TUNEM? Feel free to introduce yourself and include social media links if you want to.'
                                    className='hover:outline-0 placeholder:text-[#818080] placeholder:text-lg placeholder:leading-6 focus:outline-0 hover:ring-0 border-b border-[#818080] bg-black text-white py-1 text-lg font-medium resize-none'
                                    rows={4} // You can adjust the number of rows if needed
                                />
                            </div>


                            {/* upload file  */}
                            <div className='flex flex-col mt-5'>
                                <label
                                    className='text-white text-lg font-bold leading-6'
                                    htmlFor='fileUpload'
                                >
                                    Upload Your File
                                </label>
                                <div>
                                    <input
                                        id='fileUpload'
                                        type='file'
                                        className='hover:outline-0 focus:outline-0 hover:ring-0 mt-5 border border-[#818080] px-10 rounded-2xl w-full lg:w-[45%] bg-black text-white py-2 text-lg font-medium cursor-pointer'
                                    />
                                </div>
                            </div>


                            <div className=' mt-9 ' >
                                <button className=' text-center text-lg font-medium bg-[#D9D9D9] w-full py-1.5 rounded-2xl   ' >SEND NOW</button>
                            </div>


                        </form>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default ApplayVocalistFrom; 
