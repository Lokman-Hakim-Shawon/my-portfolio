import Contactdiv from "../componets/Contactdiv";
import EmailForm from "../componets/EmailForm";

const Contact = () => {
    return (
        <div>
            <Contactdiv></Contactdiv>
            <EmailForm></EmailForm>
            <div className="w-full py-10">
                <h1 className="text-4xl font-bold text-blue-500 text-center underline mb-10">Local Contact</h1>
                <div className="w-full border py-10">
                    <h1 className="text-center">Phone : +8801404142439</h1>
                    <h1 className="text-center">Phone : +8801914236490</h1>
                    <div className="flex flex-col lg:flex-row text-center lg:text-left w-full justify-around mx-auto">
                        <div className="">
                            <h1 className="underline py-5 text-xl font-bold text-blue-500">Present Adress</h1>
                            <p>Post Office: Sataish</p>
                            <p>Police Station : Tongi</p>
                            <p>District : Gazipur</p>
                            <p>Division : Dhaka</p>
                        </div>
                        <div className="">
                            <h1 className="underline py-5 text-xl text-blue-500 font-bold">Permanent Adress</h1>
                            <p>Post Office: Legura</p>
                            <p>Police Station : Kolmakanda</p>
                            <p>District : Netrokuna</p>
                            <p>Division : Maymensing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;