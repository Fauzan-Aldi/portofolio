import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
    return (
        <section id="Contact" className="py-8 bg-gray-50 -translate-y-[31rem]">
            <div className="container mx-auto max-w-2xl">
            <h1 className="text-2xl font-bold text-center mb-4">Contact</h1>
            
                

                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4 flex items-center">
                        <FaMapMarkerAlt className="text-blue-500 text-x1 mr-" />
                        <div>
                            <p className="font-semibold">Location:</p>
                            <p className="text-gray-600">Provinsi Kepulauan Riau, Indonesia</p>
                        </div>
                    </div>

                    <div className="mb-4 flex items-center">
                        <FaEnvelope className="text-blue-500 text-x1 mr-3" />
                        <div>
                            <p className="font-semibold">Email:</p>
                            <p className="text-gray-600">fauzanalditester@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <FaPhone className="text-blue-500 text-xl mr-3" />
                        <div>
                            <p className="font-semibold">Phone:</p>
                            <p className="text-gray-600">+62 8 **** **** ****</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
