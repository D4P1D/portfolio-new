import React from "react";
import Image from "next/image";
import heroImage from "../public/images/alim.jpg";
import { Element } from "react-scroll";

function Home() {
	return (
		<Element id="home" name="home">
			<div>
				<div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 ">
					<div className=" w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
						<Image
							src={heroImage}
							alt="heroImage"
							layout="fill"
							objectFit="cover"
							className=" rounded-full cursor-pointer hidden md:block"
						/>
					</div>
					<div className="flex flex-col md:ml-20 mx-10 mt-10">
						<h1 className="font-bold text-7xl text-left mb-5">
							Hello, I am <span className="text-indigo-900">Dapid Ahmad Satibi</span>
						</h1>
						<p className="text-left font-normal font mb-5 flex-wrap">
							Saya Seorang Laki-Laki Lahir Di Bandung 07 Desember 2002, 
							Berat Bandan Terakhir 75 Mungkin Sekarang Naik,
							Tinggi Badan 179 Kalo Ngga Salah, Saya Belum Menikah.
							No Whatshap :  
							<a href="https://wa.me/081317838941">
							081317838941
							</a>	
							Email		: dapidahmad04@gmail.com
						</p>
						<a
							href="#"
							className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black "
						>
							See My Portfolio !
						</a>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default Home;
