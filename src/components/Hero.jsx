// import { Main } from "./first.styled";
import Img1 from "../components/ImgOne.jpg";
import { ButtonClick } from "./first.styled";

const Hero = () => {
  return (
    <div className='Hero bg-white flex items-center px-10 py-10'>
      <div className='tags gap-x-20'>
        <p className="mb-5">INSTAGRAM</p>
        <p>TWITTER</p>
        <p>FACEBOOK</p>
      </div>
      <div className='flex '>
        <div className='heroTxt bg-white'>
          <h1 className='bg-white text-5xl font-semibold pl-10 pt-24'>
            Shop <br />
            For <br />
            Spring
          </h1>
          <p className='bg-white w-[45rem] pl-10 pt-7 pr-28 text-base font-medium'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            iusto quia ipsam dolorum praesentium optio magni incidunt deserunt
            illo vitae? Officiis cum saepe optio cumque. Non voluptatem libero
            dolores nihil et officiis dignissimos. Maiores et possimus magnam
            blanditiis mollitia soluta ipsa! Repellendus dolor commodi laborum
            vitae harum sed explicabo dolore.
          </p>
          <ButtonClick className='ml-10 mt-4 hover:bg-blue-900'>
            EXPLORE
          </ButtonClick>
        </div>
        <div className='heroImg '>
          <img className='w-[27rem] ml-[3rem] pt-5 bg-white' src={Img1} alt='Img' />
        </div>
      </div>
      <div className='dashes ml-[4rem]'>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default Hero;
