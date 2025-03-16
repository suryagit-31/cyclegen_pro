import { motion } from "framer-motion";
import { Bike } from "lucide-react";

const Founder = () => {
  return (
    <section className="py-24 bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Founder Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-5xl font-bold text-gray-900 flex align-middle">
            Meet Our Founder <Bike className=" h-16 w-16  text-blue-600" />
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            John Doe is the visionary behind Cycle-Gen. With a passion for
            innovation and sustainability, he has dedicated his career to
            redefining urban mobility. His expertise in technology and business
            has led Cycle-Gen to become a leader in eco-friendly transportation.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            "I believe in a future where technology and nature coexist
            seamlessly, empowering people to move smarter and greener."
          </p>
        </motion.div>

        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VpdCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Founder"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-120"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
