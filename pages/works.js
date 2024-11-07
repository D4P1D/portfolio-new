import Image from "next/image";
import One from "../public/images/a.jpg";
import Two from "../public/images/b.jpg";
import Three from "../public/images/c.jpg";
import Four from "../public/images/d.jpg";
import Five from "../public/images/e.jpg";
import Six from "../public/images/f.jpg";
import { Element } from "react-scroll";

function Works() {
  return (
    <Element id="work" name="work">
      <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
        <h1 className="text-indigo-900 text-6xl font-bold text-center">Hobby</h1>

        {/* First Row of Images */}
        <div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
          <div className="flex flex-col items-center">
            <div className="rounded w-80 h-60 shadow-xl relative">
              <Image
                src={One}
                alt="Painting hobby"
                layout="fill"
                objectFit="cover"
                className="p-2 rounded cursor-pointer"
              />
            </div>
            <p className="text-center mt-2 text-gray-600">Bermain Futsal</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="rounded w-80 h-60 shadow-xl relative">
              <Image
                src={Two}
                alt="Photography hobby"
                layout="fill"
                objectFit="cover"
                className="p-2 rounded cursor-pointer"
              />
            </div>
            <p className="text-center mt-2 text-gray-600">Bermain Badminton</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="rounded w-80 h-60 shadow-xl relative">
              <Image
                src={Three}
                alt="Traveling hobby"
                layout="fill"
                objectFit="cover"
                className="p-2 rounded cursor-pointer"
              />
            </div>
            <p className="text-center mt-2 text-gray-600">Bermain Volly</p>
          </div>
        </div>

        {/* Second Row of Images */}
        <div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
          <div className="flex flex-col items-center">
            <div className="rounded w-80 h-60 shadow-xl relative">
              <Image
                src={Four}
                alt="Cycling hobby"
                layout="fill"
                objectFit="cover"
                className="p-2 rounded cursor-pointer"
              />
            </div>
            <p className="text-center mt-2 text-gray-600">Bermain Futsal</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="rounded w-80 h-60 shadow-xl relative">
              <Image
                src={Five}
                alt="Music hobby"
                layout="fill"
                objectFit="cover"
                className="p-2 rounded cursor-pointer"
              />
            </div>
            <p className="text-center mt-2 text-gray-600">Shoping</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="rounded w-80 h-60 shadow-xl relative">
              <Image
                src={Six}
                alt="Cooking hobby"
                layout="fill"
                objectFit="cover"
                className="p-2 rounded cursor-pointer"
              />
            </div>
            <p className="text-center mt-2 text-gray-600">Makan Att Bisi Mati</p>
          </div>
        </div>

    
      </div>
    </Element>
  );
}

export default Works;
