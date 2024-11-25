

const MissionVission = () => {
    return (
        <div id="mission-vision" className='relative bg-[url("/hero-bg.png")] bg-no-repeat bg-cover bg-fixed md:py-32 text-white flex flex-col gap-20 pt-10 md:pt-20'>
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <Section
                title="MISSION"
                paragraph={`
                To use sports as a tool to unlock the potential of every child by 
                creating pathways to education, leadership, and personal development, 
                promoting a healthier and more inclusive society
                `}
            />
            <Section
                title="VISION"
                paragraph={`
                A world where every child can access education, live a healthy life,
                and contribute to the betterment of society through sports and leadership 
                development.
                `}
            />
        </div>
    )
}

export default MissionVission;


type SectionProps = {
    title: string,
    paragraph: string,
}


const Section: React.FC<SectionProps> = ({
    title,
    paragraph,
}) => {
    return (
        <div className="w-fit flex items-center justify-center flex-col mx-auto py-10 gap-5 z-10">
            <h2 className="text-3xl md:text-4xl lg:text-6xl underline">{title}</h2>
            <p className="px-10 lg:w-3/5 md:text-xl lg:text-2xl text-md text-center">
                {paragraph}
            </p>
        </div>
    );
}
