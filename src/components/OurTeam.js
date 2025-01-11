import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';

const OurTeam = () => {
    const [modalData, setModalData] = useState(null);

    const teamData = [
        {
            id: 1,
            name: "Mr. Amit Mundawala",
            image: img1,
            details: `
               Mr. Amit is a veteran in the agri-tech industry and holds a vast experience in the financial involvements relating to the industry. He has been an avid technology promoter for leading the innovation based growth as well as being the financial matters expert who has led with exemplified strategic decision making in scaling the businesses across the Agri-tech industry.
               Mr. Amit is a DU graduate and post graduate who ventured into the technical solution based development for the agricultural industry and has been able to provide the best model for a successful business.
               At MedivationBio we are thrilled to have him as our Promoter for helping us in building the cutting edge products with the latest technology advancements enabling digital transformation in the medical device industry.
            `,
        },
        {
            id: 2,
            name: "Mr. Ankit Bansal",
            image: img2,
            details: `
               Mr. Ankit Bansal is a Commerce graduate and has an experience of 10+ years in various businesses. He belongs to well reputed Vidya group of Industries of NCR Delhi having business legacy of over 20 years. The group concerns of directors are dealing in providing packaging solutions for FMCG products and Pulses processing through own manufacturing units. The group concerns are engaged in manufacturing of Flexible Packaging Material. The group is in a long business association with big industrial concerns like Haldiram Group, Bikaji, Gopal Namkeen etc.
               Mr. Ankit is a proven leader and holds a great reputation in leading the management and other activities that help the enterprise to proceed well on the manufacturing front. With him getting associated with MedivationBio brings a great sense of work ethics and allows us to manage well in delivering the best of products to our consumers.     
            `,
        },
        {
            id: 3,
            name: "Mr. Parv Goyal",
            image: img3,
            details: `
            Mr. Parv Goyal is a dynamic leader and entrepreneur with a strong background in management and a passion for creating impactful solutions that improve lives. He holds a Bachelor's degree in Management Studies from H.R. College of Commerce and Economics, where he developed robust analytical and problem-solving skills. He has a Master's degree in Management from IE University, enhancing his business acumen and leadership potential through advanced concepts and frameworks.  

Before his role at Medivation Bio, Parv gained valuable experience across agribusiness, warehousing, and banking sectors. He played a pivotal role in implementing the AgriStack project in Madhya Pradesh, India, establishing a digital farming ecosystem using cutting-edge technologies. Additionally, he supported the formation, incubation, and development of 15 FPOs in Punjab and Haryana.  

At Medivation Bio, an upcoming organisation in the critical medical device industry, Parv oversees strategic direction and operational execution. His innovative thinking and entrepreneurial spirit, combined with mentorship from his father, Amit Goyal—a key figure in India’s post-harvest management industry through Star Agri Warehousing & Collateral Management—have positioned Medivation Bio for exceptional growth.  

His vision, dedication to continuous learning, and commitment to innovation drive his ambition to scale Medivation Bio to new heights, contributing significantly to the healthcare industry.
            `,
        },
        {
            id: 4,
            name: "Mr. Rahul Sheoran",
            image: img4,
            details: `
               Mr. Rahul is a leading product engineering and quality management expert in the field of medical device industry. He has been a catalyst for the various developments taking place for the medical product development and with his strategic approach and mindful decision making he has not just helped to be an innovative resource but a strategic expert as well. With an experience spanning over 11+ years in the industry it speaks volume of his potential and work delivery.

Mr. Rahul holds a B.E degree in Electronics and Communications Engineering, and with the zeal of an engineer’s mind and approach in his work he has been able to establish a great value in the Industry.

At MedivationBio we are extremely satisfied with having Mr. Rahul in our team and are aggressively looking to have his experience get counted for our valuable growth in the medical device industry.
            `,
        },
        {
            id: 5,
            name: "Mr. Harshit Panchal",
            image: img5,
            details: `
                Mr. Harshit is an experienced product design, development and management expert with work experience expanding 8+ years in the medical device industry. He brings the right approach of innovative thinking and excellence based execution delivery into his mode of working.

Mr. Harshit is a team player and likes to lead from the front, with leadership skills being his forte. He is a certified Autocad, NX 8.0 CAD/CAM expert.

At MedivationBio with his expertise and skills are utilized to enhance our product design and development along with strengthening our products quality with the focus of delivering the best value to the customer.
            `,
        },
        {
            id: 6,
            name: "Ms. Divya Chadha",
            image: img6,
            details: `
               A Post Graduate in Management with specialization in HR & Marketing domain, Ms Divya Chadha has prior work experience in HR handling End to End Recruitment, Applicant Tracking System, Policy Making & Competency Mapping. She has prior work experience in companies like Farmley & V Guard.

Ms Divya is responsible for handling HR function, managing & aligning Business Operations across the organization.
            `,
        },
    ];

    const openModal = (data) => {
        setModalData(data);
    };

    const closeModal = () => {
        setModalData(null);
    };

    return (
        <>
            <Header />
            <div className="team-section">
                <h2 className="team-title">Our Promoter, Directors</h2>
                <div className="team-grid">
                    {teamData.slice(0, 3).map((member) => (
                        <div className="team-card" key={member.id}>
                            <div className="img-wrapper">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="team-photo"
                                onClick={() => openModal(member)}
                            />
                            </div>
                            <p className="team-name">{member.name}</p>
                        </div>
                    ))}
                </div>

                <h2 className="team-title">Our Team</h2>
                <div className="team-grid">
                    {teamData.slice(3).map((member) => (
                        <div className="team-card" key={member.id}>
                            <div className="img-wrapper">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="team-photo"
                                onClick={() => openModal(member)}
                            />
                            </div>
                            <p className="team-name">{member.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {modalData && (
                 <div className="modal-overlay" onClick={closeModal}>
                 <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                 <button className="close-button" onClick={closeModal}>Close</button>

                 <h3>{modalData.name}</h3>
                        <p className="modal-details">{modalData.details}</p>
                         </div>
             </div>
            )}

            <Footer />
        </>
    );
};

export default OurTeam;
