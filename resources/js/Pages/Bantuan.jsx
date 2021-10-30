import { React } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import Contact from "../components/Contact";

function Bantuan() {
    return (
        <>
            <Helmet>
                <title>Halaman Bantuan</title>
            </Helmet>

            <Navbar></Navbar>
            <main>
                <div className="flex flex-col container-auto gap-8 justify-center py-10 px-6 lg:px-0">
                    <div>
                        <h1 className="h2 text-center">Bantuan</h1>
                        <p className="my-6 text-xl">
                            Finddy merupakan aplikasi yang memudahkan mahasiswa
                            untuk mencari teman belajar sesuai dengan minat
                            ataupun bidang yang sedang dipelajarinya. Dengan
                            adanya teman belajar tersebut, mahasiswa dapat
                            berbagi sumber pembelajaran sekaligus menjadi tutor
                            sebaya dalam mempelajari fokus bidangnya tersebut.
                        </p>
                        <p className="text-xl">
                            Di dalam aplikasi Finddy juga terdapat forum tanya
                            jawab seputar permasalahan yang dialami selama
                            belajar, di satu sisi mahasiswa dapat mengajukan
                            pertanyaan terkait permasalahan yang dihadapinya dan
                            di sisi lain mahasiswa dapat memberikan jawaban
                            untuk pertanyaan dari mahasiswa lain yang telah
                            diajukan sebelumnya. Dengan hadirnya aplikasi
                            Finddy, kami berharap aplikasi ini dapat membantu
                            para mahasiswa untuk menemukan teman belajar yang
                            sesuai dan menyelesaikan permasalahan belajarnya
                            bersama dengan mahasiswa lain sehingga mampu
                            mengembalikan motivasi belajar setiap pengguna
                            aplikasi ini.
                        </p>
                    </div>
                    <div>
                        <h1 className="h2 text-center">Kontak Kami</h1>
                        <div className="contact flex flex-wrap justify-center gap-12 mt-6">
                            <Contact
                                name="Rizal Herliansyah H."
                                contact="089 332 443 112"
                            />
                            <Contact
                                name="Indra Kurinawan"
                                contact="089 332 443 112"
                            />
                            <Contact
                                name="Rian Febriansyah"
                                contact="089 332 443 112"
                            />
                        </div>
                    </div>
                    {/* <div>
                        <h1 className="h2 text-center">FAQ</h1>
                    </div> */}
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Bantuan;
