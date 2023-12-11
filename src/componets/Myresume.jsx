import img1 from '../assets/images/pdf.pdf'
const Myresume = () => {
    return (
        <div className="w-1/2">
            <a href={img1} download><button className="btn w-full bg-blue-500 text-white">Download Resume</button></a>            
        </div>
    );
};

export default Myresume;