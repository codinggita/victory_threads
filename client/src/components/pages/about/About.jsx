import React from "react";

const About = () => {

    const containerStyle = {
        backgroundColor: "#1f2937", // Replace #yourColor with your desired background color
    };
    const containerStyle2 = {
        backgroundColor: "#828487",
        borderRadius: "0.75rem" // Replace #yourColor with your desired background color
    };

    return (
        <div style={containerStyle} className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-blue-600 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-200 ">
Explore our sports jersey collection, where passion meets style. Elevate your game-day experience with premium-quality jerseys crafted for comfort and performance. From iconic teams to customizable designs, VictoryThreads brings your sports spirit to life. Discover the perfect fit, celebrate victories, and showcase your team pride with every wear.</p>
                </div>
                <div style={containerStyle2} className="w-full lg:w-8/12  rounded-md overflow-hidden">
                    <img className="w-full h-full" src="https://img.freepik.com/premium-vector/premium-collection-soccer-jerseys-set-bundle-pack-sports-jersey-template_604996-177.jpg" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-blue-500 pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-100 ">
Embark on the VictoryThreads journey—a tale of passion for fashion and sports. Founded with a vision to merge style with team spirit, we create premium jerseys that redefine fan apparel. Our story is woven with dedication, innovation, and a commitment to bring your victories to life through exceptional designs and quality craftsmanship</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div style={containerStyle2} className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://contents.mediadecathlon.com/m13646712/adf3ad66094d9668886a955d5e468402/m13646712.jpg?format=auto&quality=70&f=650x0" alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Cricket</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Football</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Basketball</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                            
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olympics</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
