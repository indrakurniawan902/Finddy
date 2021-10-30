import { React } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "./../components/Button";
import { Helmet } from "react-helmet";

function Home() {
    return (
        <>
            <Helmet>
                <title>Finddy - Find Your Buddy to Boost Your Study</title>
            </Helmet>

            <Navbar></Navbar>
            <main>
                <div className="hero bg-blue-1">
                    <div className="flex flex-col lg:flex-row gap-14 lg:gap-0 container-auto items-center justify-between py-20 px-4 lg:px-0 text-center lg:text-left">
                        <div className="flex-1">
                            <h1 className="text-black-1 font-extrabold text-4xl lg:text-5xl leading-normal lg:leading-normal">
                                Find Your{" "}
                                <span className="text-orange-3">Buddy</span> to{" "}
                                <br />
                                Boost Your{" "}
                                <span className="text-orange-3">Study</span>
                            </h1>
                            <p className="text-black-2 text-xl mt-4 mb-8">
                                Temukan teman belajarmu dengan aplikasi Finddy
                            </p>
                            <Button type="primary" href="/daftar">
                                Mulai Perjalananku
                            </Button>
                        </div>
                        <div className="flex-1 animate-bounce-slow flex items-center justify-center">
                            <img
                                src="img/illustration/girl-book.svg"
                                alt="illustration-girl-book"
                            />
                        </div>
                    </div>
                </div>
                <div className="py-14 bg-white-2">
                    <div className="flex flex-col container-auto items-center px-4 lg:px-0 text-center gap-10">
                        <h2 className="h2">Kenapa Harus Finddy?</h2>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <Card illustration="img/illustration/search.svg">
                                Temukan teman belajar sesuai dengan{" "}
                                <span className="bold-orange">
                                    bidang/minat{" "}
                                </span>
                                kamu
                            </Card>
                            <Card illustration="img/illustration/solve.svg">
                                Selesaikan{" "}
                                <span className="bold-orange">
                                    permasalahan belajar
                                </span>{" "}
                                kamu bersama dengan pengguna lain
                            </Card>
                            <Card illustration="img/illustration/connect.svg">
                                Jalin{" "}
                                <span className="bold-orange">
                                    koneksi dan relasi
                                </span>{" "}
                                dengan pengguna dari berbagai perguruan tinggi
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Home;
