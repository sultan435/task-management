import banner from '../assets/banner/c-banner.jpg'
import Container from '../components/ui/Container';
const About = () => {
    return (
        <div>
            <div className="hero h-[350px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-8 text-5xl font-bold text-[#FF7594] ">About<span className="text-gray-700"> Us</span></h1>
                        <div className="border-2 border-[#FF7594] w-24 rounded-lg mx-auto"></div>
                    </div>
                </div>
            </div>
            <Container>
            <div >
                <h1 className='text-[#FF7594] mb-2'>About Me</h1>
                <p className='text-4xl'>I am an enthusiastic web developer based in New York, with a rich experience of over 6 years in website & product design.</p>
            </div>
            <div className='flex flex-col md:flex-row gap-10 mt-10 pb-16'>
                <div className='flex-1'>
                <h1 className='text-3xl text-[#FF7594] font-medium'>Award-winning web design <br /> & development professional</h1>
                </div>
                <div className='flex-1'>
                    <h3 className='mb-3 text-base font-medium'>With years of experience in graphic and web design I have mastered the skills of understanding client requirements according to the latest trends. I have worked with businesses from different niches so you can rely on me for yours.</h3>
                    <p className='text-sm text-gray-700'>I’ve spent most of these years working across different areas of design like front-end development, landing pages, email design, app UI/UX, to my current role designing products for mobile platforms. Having worked on various projects that are already live, I can help you with the best possible suggestions and ideas that we can proceed with. With me, you aren’t forced to accept anything. I give you a variety of options we can work on together.</p>

                </div>
            </div>
            </Container>
            
        </div>
    );
};

export default About;