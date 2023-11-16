import image1 from "../../assets/home/chef-service.jpg";

const ChafService = () => {
    return (
        <div
        style={{ backgroundImage: `url(${image1})` }}
        className=" h-screen bg-no-repeat bg-cover bg-center max-w-screen-xl mx-auto mt-20 flex items-center justify-center">
           <div className="p-20 bg-white text-center space-y-6 w-3/4 mx-auto
           ">
           <h1 className="text-xl md:text-4xl font-medium uppercase">Bistro Boss</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
           </div>
        </div>
    );
};

export default ChafService;