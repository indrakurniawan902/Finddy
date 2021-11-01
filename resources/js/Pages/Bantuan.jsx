import { React, useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import FAQCard from "../partials/FAQCard";
import { faqs } from "../data/faq-data";
import AOS from "AOS";

function Bantuan() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Helmet>
                <title>Halaman Bantuan</title>
            </Helmet>

            <Navbar></Navbar>
            <main>
                <div className="flex flex-col container-auto gap-10 justify-center py-10 px-6 lg:px-0">
                    <div data-aos="fade-up" data-aos-duration="800">
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
                    <div data-aos="fade-up" data-aos-duration="1200">
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
                    <div data-aos="fade-up" data-aos-duration="1400">
                        <h1 className="h2 text-center mb-6">FAQ</h1>
                        {faqs.map((faq) => (
                            <FAQCard
                                key={faq.id}
                                question={faq.question}
                                answer={faq.answer}
                            ></FAQCard>
                        ))}
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Bantuan;
