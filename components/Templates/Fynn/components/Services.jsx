"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Responsive, high-quality websites built to meet your business needs with optimized performance.",
    href: "contact",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "Custom, high-performance mobile apps designed to meet your business goals.",
    href: "contact",
  },
  {
    num: "03",
    title: "Graphic Design",
    description:
      "Creative, impactful designs tailored to elevate your brand.",
    href: "contact",
  },
  {
    num: "04",
    title: "Desktop App Development",
    description:
      "Robust, tailored desktop applications to streamline your business operations.",
    href: "contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-12 xl:pt-7">
      <div className="container mx-auto pb-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[40px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex flex-1 flex-col justify-center gap-4 group">
                {/* top most */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[50px] h-[50px] flex justify-center rounded-full items-center hover:-rotate-45 bg-white group-hover:bg-accent transition-all duration-500">
                    <BsArrowDownRight className="text-primary text-[18px]"/>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-3xl group-hover:text-accent font-bold text-white leading-none transition-all duration-500">{service.title}</h2>
                {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
