import skill1 from '../assets/images/skill1.png'
import skill2 from '../assets/images/skill2.png'
import skill3 from '../assets/images/skill3.png'
import skill4 from '../assets/images/skill4.png'
import skill5 from '../assets/images/skill5.png'
const MySkill = () => {
    return (
        <div className="my-5">
            <div className="lg:my-10">
            <hr className="w-1/2 mx-auto border border-blue-300 md:border-2 lg:border-4 rounded-xl"/>
            <h1 className="text-center md:text-2xl lg:text-4xl font-bold md:py-2 lg:py-5 text-blue-500">My Skilled</h1>
            <hr className="w-1/2 mx-auto border border-blue-300 md:border-2 lg:border-4 rounded-xl"/>
           </div>
           {/* project card */}
           <div className="grid grid-cols-1 gap-y-5">
           <div className="card card-side bg-base-100 border border-blue-500">
  <figure><img src={skill1} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title mx-auto text-blue-500">TAILWIND</h2>
    <p>Tailwind is the most popular css framework. Because Tailwind is so low-level, it never encourages you to design the same site twice. Even with the same color palette and sizing scale, it is easy to build the same component with a completely different look in the next project. I know how to use tailwind.</p>
  </div>
</div>
           <div className="card card-side bg-base-100 border border-blue-500">
  <figure><img src={skill2} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title mx-auto text-blue-500">JAVASCRIPT</h2>
    <p>JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.). I know how to solve javascript related web problem. </p>
  </div>
</div>
           <div className="card card-side bg-base-100 border border-blue-500">
  <figure><img src={skill3} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title mx-auto text-blue-500">REACT</h2>
    <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug. I feel comfortable to using react</p>
  </div>
</div>
           <div className="card card-side bg-base-100 border border-blue-500">
  <figure><img src={skill4} alt="Movie" className=''/></figure>
  <div className="card-body">
    <h2 className="card-title mx-auto text-blue-500">FIREBASE</h2>
    <p>For many web apps, the backend functionality storing, processing, and retrieving data is predictable. Firebase is a fully managed backend service that gives you best-in-class infrastructure for your web apps, handling everything from user authentication and server scaling, right through to crash analytics and a reliable testing environment.</p>
  </div>
</div>
           <div className="card card-side bg-base-100 border border-blue-500">
  <figure><img src={skill5} alt="Movie" className=''/></figure>
  <div className="card-body">
    <h2 className="card-title mx-auto text-blue-500">MONGODB</h2>
    <p>MongoDB is a non-relational document database that provides support for JSON-like storage. The MongoDB database has a flexible data model that enables you to store unstructured data, and it provides full indexing support, and replication with rich and intuitive APIs.</p>
  </div>
</div>
           </div>
        </div>
    );
};

export default MySkill;