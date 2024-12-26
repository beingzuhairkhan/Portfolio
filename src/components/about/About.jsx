
import profile from '../../assets/avatarRemoveBg.png';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto mt-3 md:mt-8 lg:mt-6 px-4" id="about">
      <h5 className="text-gray-400 text-center">Get To Know</h5>
      <h1 className="text-3xl text-center font-bold mt-2">About Me</h1>
      <div className="flex justify-center mt-2">
        <div className="h-[3px] w-9 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
        {/* Image Section */}
        <div className="w-full lg:w-[900px] hidden lg:block">
           <img
               className="
                 h-[20rem]
                 bg-gray-100
                 shadow-xl
                  rounded-lg
                 z-20
                 backdrop-blur-md
                 filter
          
                 
               "
               src={profile}
               alt="Profile"
             />
        </div>

        {/* Text Section */}
        <div className="text-justify leading-7 lg:mt-0 p-2 ">
          <p className="">
            I am a passionate Full Stack Developer who loves to explore new technologies and build scalable applications. Although I specialize in full-stack development, I prefer to work on the backend of any application.
          </p>
          <p className=" mt-4">
            A little bit about my education, I am a 2nd-year student of <em>M H Saboo Siddik College of Engineering, Mumbai</em>, pursuing B.E in <em>Computer Science</em>. My current cumulative grade point average is 7.8 (till the 3rd semester).
          </p>
          <div className="mt-6">
        
         <a href='#contact' className='btn btn-primary about_btn '>Let&apos;s Connect </a>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

