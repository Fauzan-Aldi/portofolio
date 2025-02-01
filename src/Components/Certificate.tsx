import CertificateCard from "./CertifCard";
import img1 from '../assets/Sertifikat CSIRT UBBG.png';
import img2 from '../assets/Sertifikat Apresiasi BRIN.jpg';
import img3 from '../assets/Sertifikat Apresiasi Kota Bekasi.png';
import img4 from '../assets/Sertifikat Apresiasi BMKG.jpg';
import img5 from '../assets/Sertifikat Apresiasi Insitusi Teknologi Bandung.png';
import img6 from '../assets/csirt.jpg';
import img7 from '../assets/bappenas.jpeg';
import img8 from '../assets/Sertifikat Apresiasi Banyuwangi.png';
import img9 from '../assets/Sertifkat Apresiasi Kota Cimahi.jpg';
import img10 from '../assets/tanjungpinang.jpeg';
import img11 from '../assets/Diskominfo bantul.jpeg';
import img12 from '../assets/Us.jpeg';
import img13 from '../assets/pom.jpeg';
import img14 from '../assets/jawatimur.jpeg';
import img15 from '../assets/magelang.jpeg';
import img16 from '../assets/kesehatan.jpeg';
import img17 from '../assets/yogyakarta.jpeg';
import img18 from '../assets/riau.jpeg';
import img19 from '../assets/ahmadyani.jpeg';
import img20 from '../assets/ub.jpeg';
import img21 from '../assets/bumn.jpeg';
import img22 from '../assets/banjarmasin.jpeg';
import img23 from '../assets/jombang.jpeg';
import img24 from '../assets/Sertifikasi Apresiasi TanggerangSelatan_page-0001.jpg';
import img25 from '../assets/gresik.jpg';
import img26 from '../assets/perdagangan.jpg';
import img27 from '../assets/kaltim.jpg';
import img28 from '../assets/baznas.jpg';
import img29 from '../assets/Certi prof Cyber Security Awarenes.png';
import img30 from '../assets/google siber.jpeg';
import img31 from '../assets/cisco.jpeg';
import img32 from '../assets/pentesting.jpeg';
import img33 from '../assets/cwl.jpg';
import img34 from '../assets/selukbeluk.jpg';
import img35 from '../assets/BSSN VVIP Jawa Timur_page-0001.jpg';
import img36 from '../assets/BSSN VVIP Yogyakarta_page-0001.jpg';
import img37 from '../assets/Sertifikat HIGH BSSN Fauzan Aldi_page-0001.jpg';
import img38 from '../assets/coursera net_page-0001.jpg';
import img39 from '../assets/kementerian agama.jpg';
import img40 from '../assets/kota pekalongan.jpg';
const categories = ["All" ,"Certified", "Rewards", "Courses", "Projects"];
const certificates = [
    { id: 35, title: "BSSN VVIP PROGRAM : JAWA TIMUR", image: img35 },
    { id: 37, title: "BSSN VVIP PROGRAM : VULNERABILITY ( HIGH )", image: img37 },
    { id: 36, title: "BSSN VVIP PROGRAM : D. I. YOGYAKARTA", image: img36 },
    { id: 1, title: "Universitas Bina Bangsa Getsempena", image: img1},
    { id: 2, title: "Badan Riset dan Inovasi Nasional RI (BRIN RI)", image: img2 },
    { id: 3, title: "Diskominfo Kota Bekasi", image: img3 },
    { id: 4, title: "Badan Meteorologi Klimatologi dan Geofisika (BMKG)", image: img4 },
    { id: 5, title: "Institut Teknologi Bandung (ITB)", image: img5 },
    { id: 6, title: "Badan Pusat Statistic", image: img6 },
    { id: 7, title: "Kementerian Perencanaan Pembangunan Nasional Republik Indonesia/Bappenas RI", image: img7 },
    { id: 8, title: "Pemerintah Kabupaten Banyuwangi", image: img8},
    { id: 9, title: "Pemerintah Kota Cimahi", image: img9 },
    { id: 10, title: "Pemerintah Kota Tanjung Pinang", image: img10 },
    { id: 11, title: "Pemerintah Kabupaten Bantul", image: img11 },
    { id: 13, title: "Badan Pengawas Obat dan Makanan", image: img13 },
    { id: 15, title: "Pemerintah Kabupaten Magelang", image: img15 },
    { id: 16, title: "Kementerian Kesehatan RI", image: img16 },
    { id: 17, title: "Universitas Negeri Yogyakarta", image: img17 },
    { id: 19, title: "Universitas Jenderal Achmad Yani Yogyakarta", image: img19 },
    { id: 20, title: "Universitas Brawijaya", image: img20 },
    { id: 21, title: "PT Nindya Karya (Persero)", image: img21},
    { id: 22, title: "Diskominfo Kota Banjarmasin", image: img22 },
    { id: 23, title: "Diskominfo Kabupaten Jombang", image: img23 },
    { id: 24, title: "Diskominfo Kota TanggerangSelatan", image: img24 },
    { id: 25, title: "Diskominfo Kabupaten Gresik", image: img25 },
    { id: 26, title: "Kementerian Perdagangan Republik Indonesia", image: img26 },
    { id: 28, title: "Badan Amil Zakat Nasional (BAZNAS)", image: img28 },
    { id: 12, title: "U.S. Department of Education", image: img12 },
    { id: 27, title: "Pemerintah Provinsi Kalimantan Timur", image: img27 },
    { id: 14, title: "Pemerintah Provinsi Jawa Timur", image: img14 },
    { id: 39, title: "Kementerian Agama Republik Indonesia", image: img39 },
    { id: 40, title: "Diskominfo Kota Pekalongan",   image: img40 },
    { id: 18, title: "Diskominfo Kota Riau", image: img18 },
    { id: 29, title: "Cyber ​​Security Awareness - CAPC ", image: img29 },
    { id: 30, title: "Google Cybersecurity Professional", image: img30 },
    { id: 31, title: "Cisco networking academy - ENDPOINT SECURITY", image: img31 },
    { id: 32, title: "The SecOps Group AI/ML Pentester", image: img32},
    { id: 33, title: "Cyber Security Analyst [C3SA]", image: img33 },
    { id: 34, title: "Google : Seluk Beluk Jaringan Komputer", image: img34 },
    { id: 38, title: "Fundamental cyber security", image: img38 },

];

function Certificate() {
    return (
        <section id="Certificate" className="py-10">
            <div className="container mx-auto px-15">
                <h1 className="text-2xl font-bold text-center mb-4">Certificates</h1>
                <div className="flex justify-center space-x-6 mb-6">
                    {categories.map((category, index) => (
                        <button key={index} className="text-lg font-medium hover:underline">{category}</button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((certificate, index) =>
                        <CertificateCard
                            key={index}
                            image={certificate.image}
                            title={certificate.title}
                        />
                    )}
                </div>
            </div>
            

        </section>
    );
}

export default Certificate;
