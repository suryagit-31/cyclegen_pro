import { motion } from "framer-motion";

const MyVision = () => {
  return (
    <section className="py-20 bg-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold"
        >
          Our Vision for the Future
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
        >
          We envision a world where technology and sustainability go hand in
          hand, creating smarter, greener, and more efficient mobility solutions
          for everyone.
        </motion.p>

        {/* Vision Points */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Sustainable Innovation",
              description:
                "Developing eco-friendly solutions that reduce carbon footprint and promote a greener planet.",
            },
            {
              title: "Smart Mobility",
              description:
                "Creating intelligent transportation systems that integrate cutting-edge technology with everyday convenience.",
            },
            {
              title: "Empowering Communities",
              description:
                "Making advanced mobility accessible and affordable for people worldwide.",
            },
          ].map((vision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 1 }}
              className="p-6 bg-white/10 rounded-xl backdrop-blur-lg hover:bg-white/20 transition-all"
            >
              <h3 className="text-2xl font-semibold">{vision.title}</h3>
              <p className="mt-2 text-gray-300">{vision.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyVision;
