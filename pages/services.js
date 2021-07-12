import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Layout components
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
//UI components
import Form from "../components/Form";
//Icons
import { BiCodeAlt } from "react-icons/bi";
import { GoServer } from "react-icons/go";
import { MdWeb } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";

const Services = () => (
  <>
    <div className="pb-12">
      <Navbar />
    </div>
    <main className="p-12">
      <motion.h1
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
            translateY: 100,
          },
          pageAnimate: {
            opacity: 1,
            translateY: 0,
          },
        }}
        transition={{ duration: 0.7, delay: 1.0 }}
        className="font-sans font-bold text-center text-xl md:text-2xl p-4"
      >
        <span className="marker-text-4">Nuestros Servicios</span>
      </motion.h1>
      <div className="flex flex-col justify-center md:p-10">
        <p className="text-lg md:px-8">
          Te acompañamos durante el desarrollo de tu proyecto y adaptamos la
          tecnología y nuestras metodologias <br /> a los requerimientos que
          necesite
        </p>
        <p className="text-lg font-bold md:px-8">
          Imaginalo. Nosotros lo hacemos realidad.
        </p>
      </div>
    </main>
    <ServicesBlock />
    <ContactBlock />
    <Footer />
  </>
);

const ServicesBlock = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("pageAnimate");
  }, [controls, inView]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-auto-rows justify-items-start py-8 md:py-12 gap-2">
      <div className="col-start-1 row-start-1 p-8 pl-8 md:pl-12">
        <motion.h1
          ref={ref}
          initial="pageInitial"
          animate={controls}
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: 100,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-sans font-black text-3xl md:text-5xl"
        >
          Creamos tu visión e ideas con tecnologías seguras y escalables
        </motion.h1>
        <motion.p
          ref={ref}
          initial="pageInitial"
          animate={controls}
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: 100,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="pt-4 md:pt-6 text-md md:text-lg"
        >
          Tu proyecto será contruido con una aproximación personalizada, a base
          de tecnologías basadas en JavaScript y usando soluciones web modernas
          como la arquitectura JAMstack.
        </motion.p>
      </div>
      <div className="col-start-1 md:col-start-2 row-start-2 md:row-start-1 place-self-center">
        <div className="grid grid-auto-cols grid-auto-rows justify-items-center gap-4 md:gap-6">
          <motion.div
            ref={ref}
            initial="pageInitial"
            animate={controls}
            variants={{
              pageInitial: {
                opacity: 0,
                translateY: 100,
              },
              pageAnimate: {
                opacity: 1,
                translateY: 0,
              },
            }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="col-start-1 row-start-1 shadow-md hover:shadow-xl rounded-2xl p-7 md:p-6"
          >
            <div className="flex flex-col justify-center bg-green-100 text-green-500 rounded-full w-16 h-16 md:w-20 md:h-20">
              <div className="flex justify-center self-center animate-pulse">
                <BiCodeAlt size={32} />
              </div>
            </div>
            <p className="text-sm text-center pt-2">
              Desarrollo <br /> Frontend
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial="pageInitial"
            animate={controls}
            variants={{
              pageInitial: {
                opacity: 0,
                translateY: 100,
              },
              pageAnimate: {
                opacity: 1,
                translateY: 0,
              },
            }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="col-start-2 row-start-1 shadow-md hover:shadow-xl  rounded-2xl p-7 md:p-6"
          >
            <div className="flex flex-col justify-center bg-purple-100 text-purple-500 rounded-full w-16 h-16 md:w-20 md:h-20">
              <div className="flex justify-center self-center animate-pulse">
                <GoServer size={32} />
              </div>
            </div>
            <p className="text-sm text-center pt-2">
              Desarrollo <br /> Backend
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial="pageInitial"
            animate={controls}
            variants={{
              pageInitial: {
                opacity: 0,
                translateY: 100,
              },
              pageAnimate: {
                opacity: 1,
                translateY: 0,
              },
            }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="col-start-1 row-start-2 shadow-md hover:shadow-xl  rounded-2xl p-7 md:p-6"
          >
            <div className="flex flex-col justify-center bg-red-100 text-red-600 rounded-full w-16 h-16 md:w-20 md:h-20">
              <div className="flex justify-center self-center animate-pulse">
                <MdWeb size={32} />
              </div>
            </div>
            <p className="text-sm text-center pt-2">
              Diseño <br /> UI/UX
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial="pageInitial"
            animate={controls}
            variants={{
              pageInitial: {
                opacity: 0,
                translateY: 100,
              },
              pageAnimate: {
                opacity: 1,
                translateY: 0,
              },
            }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="col-start-2 row-start-2 shadow-md hover:shadow-xl  rounded-2xl p-7 md:p-6"
          >
            <div className="flex flex-col justify-center bg-blue-100 text-blue-500 rounded-full w-16 h-16 md:w-20 md:h-20">
              <div className="flex justify-center self-center animate-pulse">
                <AiOutlineMobile size={32} />
              </div>
            </div>
            <p className="text-sm  text-center pt-2">
              Desarrollo <br /> Móvil
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContactBlock = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [domEl, inObserver] = useInView();

  useEffect(() => {
    if (inView) controls.start("pageAnimate");
  }, [controls, inView]);

  useEffect(() => {
    if (inObserver) controls.start("pageAnimate");
  }, [controls, inObserver]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-0 md:gap-2 px-6 py-14">
      <div className="col-start-1 row-start-2 md:row-start-1 md:row-end-3 px-0 md:px-8 py-4 md:py-0">
        <Form />
      </div>
      <div className="col-start-1 md:col-start-2 row-start-1 p-2 md:p-0 w-full md:w-3/4">
        <motion.h1
          ref={ref}
          initial="pageInitial"
          animate={controls}
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: 100,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-sans font-black text-2xl md:text-3xl"
        >
          Contactános
        </motion.h1>
        <motion.p
          ref={ref}
          initial="pageInitial"
          animate={controls}
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: 100,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-sans text-md md:text-lg py-4"
        >
          Envíanos un correo con tus datos y cuentanos un poco más sobre tu
          idea, nos encantaría trabajar contigo.
        </motion.p>
      </div>
      <motion.div
        ref={domEl}
        initial="pageInitial"
        animate={controls}
        variants={{
          pageInitial: {
            opacity: 0,
            translateY: 100,
          },
          pageAnimate: {
            opacity: 1,
            translateY: 0,
          },
        }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="hidden md:block md:col-start-2 md:row-start-2 md:p-4"
      >
        <Image
          src="/contact_us.png"
          width="332"
          height="230"
          alt="contactanos"
        />
      </motion.div>
    </div>
  );
};

export default Services;
