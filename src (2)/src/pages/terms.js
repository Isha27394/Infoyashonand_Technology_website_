import React, { useState, useEffect } from 'react';

const TermsAndConditions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.pageYOffset > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <h1 style={styles.mainHeading}>
            <a href="/" style={styles.logoLink}>Infoyashonand Technology</a>
          </h1>
        </div>
      </header>

      <section style={styles.titleBanner}>
        <div style={styles.bannerContainer}>
          <h2 style={styles.pageTitle}>Terms & Conditions</h2>
          <p style={styles.subtitle}>Last Updated: December 2024</p>
        </div>
      </section>

      <section style={styles.contentSection}>
        <div style={styles.contentContainer}>
          <div style={styles.contentWrapper}>
            
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>1. Introduction</h3>
              <p style={styles.paragraph}>
                These Terms & Conditions ("Terms") of (a) use of our website <strong>Infoyashonand Technology.in</strong> ("Website"), 
                our applications ("Application") or any products or services in connection with the Application/Website/products ("Services") 
                or (b) any modes of registrations or usage of products, including through SD cards, tablets or other storage/transmitting 
                device are between Think & Learn Private Limited ("Company/We/Us/Our") and its users ("User/You/Your").
              </p>
              <p style={styles.paragraph}>
                These Terms constitute an electronic record in accordance with the provisions of the Information Technology Act, 2000 
                and the Information Technology (Intermediaries guidelines) Rules, 2011 thereunder, as amended from time to time.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>2. Acceptance of Terms</h3>
              <p style={styles.paragraph}>
                Please read the Terms and the privacy policy of the Company ("Privacy Policy") with respect to registration with us, 
                the use of the Application, Website, Services and products carefully before using the Application, Website, Services 
                or products. In the event of any discrepancy between the Terms and any other policies with respect to the Application 
                or Website or Services or products, the provisions of the Terms shall prevail.
              </p>
              <p style={styles.paragraph}>
                Your use/access/browsing of the Application or Website or the Services or products or registration (with or without 
                payment/with or without subscription) through any means shall signify Your acceptance of the Terms and Your agreement 
                to be legally bound by the same.
              </p>
              <p style={styles.paragraph}>
                If You do not agree with the Terms or the Privacy Policy, please do not use the Application or Website or avail the 
                Services or products. Any access to our Services/Application/products through registrations/subscription is non-transferable.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>3. Intellectual Property Rights</h3>
              <p style={styles.paragraph}>
                Except as mentioned below, all information, content, material, trademarks, services marks, trade names, and trade secrets 
                including but not limited to the software, text, images, graphics, video, script and audio, contained in the Application, 
                Website, Services and products are proprietary property of the Company ("Proprietary Information").
              </p>
              <p style={styles.paragraph}>
                No Proprietary Information may be copied, downloaded, reproduced, modified, republished, uploaded, posted, transmitted 
                or distributed in any way without obtaining prior written permission from the Company and nothing on this Application 
                or Website or Services shall be or products deemed to confer a license of or any other right, interest or title to or 
                in any of the intellectual property rights belonging to the Company, to the User.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>4. Personal and Non-Commercial Use</h3>
              <p style={styles.paragraph}>
                Your use of our products, Website, Application and Services is solely for Your personal and non-commercial use. Any use 
                of the Application, Website, Services or products or their contents other than for personal purposes is prohibited.
              </p>
              <div style={styles.restrictionBox}>
                <h4 style={styles.restrictionTitle}>Your personal and non-commercial use shall be subject to the following restrictions:</h4>
                <ul style={styles.list}>
                  <li style={styles.listItem}>You may not decompile, reverse engineer, or disassemble the contents of the Application</li>
                  <li style={styles.listItem}>You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information or software obtained from the Application</li>
                  <li style={styles.listItem}>You may not remove any copyright, trademark registration, or other proprietary notices from the contents</li>
                  <li style={styles.listItem}>You will not use this Application for commercial purposes of any kind</li>
                  <li style={styles.listItem}>You will not use the Application in any way that is unlawful, or harms the Company or any other person or entity</li>
                </ul>
              </div>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>5. Prohibited Activities</h3>
              <p style={styles.paragraph}>
                No User shall be permitted to perform any of the following prohibited activities while availing our Services:
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>Making available any content that is misleading, unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable</li>
                <li style={styles.listItem}>Stalking, intimidating and/or harassing another and/or inciting other to commit violence</li>
                <li style={styles.listItem}>Transmitting material that encourages anyone to commit a criminal offence</li>
                <li style={styles.listItem}>Interfering with any other person's use or enjoyment of the Application/Website/Services</li>
                <li style={styles.listItem}>Making, transmitting or storing electronic copies of materials protected by copyright without permission</li>
                <li style={styles.listItem}>Impersonating any person or entity</li>
                <li style={styles.listItem}>Posting, transmitting or making available any material that contains viruses or other harmful code</li>
                <li style={styles.listItem}>Using automated tools to access, acquire, copy or monitor any portion of the Application</li>
                <li style={styles.listItem}>Altering or modifying any part of the Services</li>
              </ul>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>6. User Content and License</h3>
              <p style={styles.paragraph}>
                By submitting content on or through the Services (your "Material"), you grant us a worldwide, non-exclusive, royalty-free 
                license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display and 
                distribute such Material in any and all media or distribution methods (now known or later developed).
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>7. Accuracy of Information</h3>
              <p style={styles.paragraph}>
                In the preparation of the Application/Website/Services/products and contents therein, every effort has been made to offer 
                the most current, correct, and clearly expressed information possible. Nevertheless, inadvertent errors may occur. The 
                Company disclaims any responsibility for any errors and accuracy of the information that may be contained in the Application.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>8. Educational Content</h3>
              <p style={styles.paragraph}>
                Our Website provides Users with access to compiled educational information and related sources. Such information is provided 
                on an "As Is" basis and We assume no liability for the accuracy or completeness or use or non-obsolescence of such information.
              </p>
              <div style={styles.warningBox}>
                <p style={styles.warningText}>
                  <strong>Important:</strong> Subscription to the Application or usage of our Services/Website/products does not in any 
                  manner guarantee admission to any educational institutions or passing of any exams or achievement of any specified 
                  percentage of marks in any examinations.
                </p>
              </div>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>9. Communication and Contact</h3>
              <p style={styles.paragraph}>
                The Company may, based on any form of access to the Application or Services or Website, contact the User through SMS, 
                email, WhatsApp and call, to give information about its products as well as notifications on various important updates.
              </p>
              <p style={styles.paragraph}>
                By registering yourself, you agree to make your contact details available to Our employees, associates and partners so 
                that you may be contacted for education information and promotions through telephone, SMS, email, WhatsApp etc.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>10. Product Compatibility and Delivery</h3>
              <p style={styles.paragraph}>
                The Company's products and/or Services, including the Application and content, are compatible only with certain 
                devices/tablets/instruments/hardware. The Company shall not be obligated to provide workable products and/or services 
                for any instruments that are not recognized by the Company.
              </p>
              <h4 style={styles.subSectionTitle}>Shipping and Delivery:</h4>
              <ul style={styles.list}>
                <li style={styles.listItem}>You have to specify the address to which the shipment has to be made at the time of purchase</li>
                <li style={styles.listItem}>All product(s) shall be delivered directly to the address as specified at the point of ordering</li>
                <li style={styles.listItem}>You cannot change the address after the order is processed</li>
                <li style={styles.listItem}>Any inconsistencies in name or address will result in non-delivery of the product(s)</li>
              </ul>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>11. Returns and Refunds</h3>
              <div style={styles.infoBox}>
                <p style={styles.paragraph}>
                  <strong>(a)</strong> For return of product(s) damaged at the time of delivery, the shipping charges shall be borne by 
                  the Company. However, for return any of the product(s) for any other reasons, the shipping charges shall be borne by the User.
                </p>
                <p style={styles.paragraph}>
                  <strong>(b)</strong> We request You not to accept any product package that seems to be tampered with, opened or damaged 
                  at the time of delivery. The products must be returned in the same condition as delivered by the Company.
                </p>
                <p style={styles.paragraph}>
                  <strong>(c)</strong> All requests for return of products have to be placed within <strong>15 (fifteen) days</strong> from 
                  the date of delivery. Please note that no refunds shall be claimed or will be entertained post 15 days from the date of delivery.
                </p>
              </div>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>12. Account Security and Responsibility</h3>
              <p style={styles.paragraph}>
                It is Your sole responsibility to ensure that the account information provided by You is accurate, complete and latest.
                You shall be responsible for maintaining the confidentiality of the account information and for all activities that occur 
                under Your account.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>13. Eligibility</h3>
              <p style={styles.paragraph}>
                Persons who are "competent/capable" of contracting within the meaning of the Indian Contract Act, 1872 shall be eligible 
                to register for the Application and all Our products or Services. Persons who are minors, un-discharged insolvents etc. 
                are not eligible to register for Our products or Services.
              </p>
              <div style={styles.warningBox}>
                <p style={styles.warningText}>
                  <strong>For Minors:</strong> As a minor if You wish to use Our products or Services, such use shall be made available 
                  to You by Your legal guardian or parents, who has agreed to these Terms. The Company reserves the right to terminate 
                  Your subscription if it is discovered that You are under the age of 18 years and the consent to use the products or 
                  Services is not made by Your parent/legal guardian.
                </p>
              </div>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>14. Indemnification</h3>
              <p style={styles.paragraph}>
                You agree to defend, indemnify and hold harmless the Company, its officers, directors, employees and agents, from and 
                against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not 
                limited to attorney's fees) arising from:
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>Your use of and access of the Application/Website/Services</li>
                <li style={styles.listItem}>Your violation of any term of these Terms or any other policy of the Company</li>
                <li style={styles.listItem}>Your violation of any third party right, including any copyright, property, or privacy right</li>
                <li style={styles.listItem}>Any claim that Your use of the Application/Website/Services has caused damage to a third party</li>
              </ul>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>15. Limitation of Liability</h3>
              <p style={styles.paragraph}>
                In no event shall the Company, its officers, directors, employees, partners or agents be liable to You or any third party 
                for any special, incidental, indirect, consequential or punitive damages whatsoever, including those resulting from loss 
                of use, data or profits or any other claim arising out, of or in connection with, Your use of, or access to, the Application.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>16. Governing Law and Jurisdiction</h3>
              <p style={styles.paragraph}>
                The Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law 
                principles. Further, the Terms shall be subject to the exclusive jurisdiction of the competent courts located in Bangalore.
              </p>
            </div>

            <div style={styles.disclaimerSection}>
              <h3 style={styles.disclaimerTitle}>DISCLAIMER</h3>
              <p style={styles.disclaimerText}>
                THIS WEBSITE, THE APPLICATION AND THE SERVICES ARE PROVIDED ON AN "AS IS" BASIS WITH ALL FAULTS AND WITHOUT ANY WARRANTY 
                OF ANY KIND. THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS WITH REGARD TO THE WEBSITE, APPLICATION/PRODUCTS 
                AND THE SERVICES, INCLUDING WITHOUT LIMITATION, ALL IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A 
                PARTICULAR PURPOSE, TITLE, ACCURACY, TIMELINESS, PERFORMANCE, COMPLETENESS, SUITABILITY AND NON-INFRINGEMENT.
              </p>
              <p style={styles.disclaimerText}>
                YOUR USE OF ANY INFORMATION OR MATERIALS ON THIS WEBSITE/APPLICATION/SERVICES/PRODUCTS IS ENTIRELY AT YOUR OWN RISK, FOR 
                WHICH WE SHALL NOT BE LIABLE. IT SHALL BE YOUR OWN RESPONSIBILITY TO ENSURE THAT SERVICES PROVIDED BY US MEET YOUR SPECIFIC 
                REQUIREMENTS.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>17. General Provisions</h3>
              
              <h4 style={styles.subSectionTitle}>Notice:</h4>
              <p style={styles.paragraph}>
                All notices served by the Company shall be provided via email to Your account or as a general notification on the Application. 
                Any notice to be provided to the Company should be sent to <a href="mailto:stockeducation001@gmail.com" style={styles.link}>stockeducation001@gmail.com</a>
              </p>

              <h4 style={styles.subSectionTitle}>Entire Agreement:</h4>
              <p style={styles.paragraph}>
                The Terms, along with the Privacy Policy, and any other guidelines made applicable to the Application from time to time, 
                constitute the entire agreement between the Company and You with respect to Your access to or use of the Application, 
                Website and the Services thereof.
              </p>

              <h4 style={styles.subSectionTitle}>Assignment:</h4>
              <p style={styles.paragraph}>
                You cannot assign or otherwise transfer Your obligations under the Terms to any third party. The Company's rights under 
                the Terms are freely transferable by the Company to any third parties without the requirement of seeking Your consent.
              </p>

              <h4 style={styles.subSectionTitle}>Severability:</h4>
              <p style={styles.paragraph}>
                If, for any reason, a court of competent jurisdiction finds any provision of the Terms to be unenforceable, that provision 
                shall be enforced to the maximum extent permissible, and the remainder of the Terms shall continue in full force and effect.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>18. Feedback</h3>
              <p style={styles.paragraph}>
                Any feedback You provide with respect to the Application shall be deemed to be non-confidential. The Application shall 
                be free to use such information on an unrestricted basis. You are not entitled to any compensation or reimbursement of 
                any kind from the Company for the feedback under any circumstances, unless specified.
              </p>
            </div>

            <div style={styles.contactSection}>
              <h3 style={styles.sectionTitle}>19. Customer Care</h3>
              <p style={styles.paragraph}>
                We make all best endeavors to provide You with a pleasant experience. In the unlikely event that You face any issues, 
                please contact us at:
              </p>
              <div style={styles.contactBox}>
                <p style={styles.contactText}>
                  <strong>Email:</strong> <a href="mailto:stockeducation001@gmail.com" style={styles.link}>stockeducation001@gmail.com</a>
                </p>
                <p style={styles.contactText}>
                  <strong>Website:</strong> <a href="https://infoyashonandtechnology.in" style={styles.link} target="_blank" rel="noopener noreferrer">Infoyashonand Technology.in</a>
                </p>
              </div>
            </div>

            <div style={styles.acknowledgmentSection}>
              <p style={styles.acknowledgmentText}>
                The Company provides these Terms so that You are aware of the terms that apply to your use of the Website/Application 
                and Services. You acknowledge that, the Company has given You a reasonable opportunity to review these Terms and that 
                You have agreed to them.
              </p>
            </div>

          </div>
        </div>
      </section>

      {showScrollTop && (
        <button style={styles.scrollTop} onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
    </div>
  );
};

const styles = {
  container: { fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#f8f9fa', minHeight: '100vh' },
  header: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px 0', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
  headerContainer: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' },
  mainHeading: { margin: 0, fontSize: '2rem', textAlign: 'center' },
  logoLink: { textDecoration: 'none', color: '#ffffff', fontWeight: '600', transition: 'opacity 0.3s ease' },
  titleBanner: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '60px 20px', color: '#fff', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
  bannerContainer: { maxWidth: '1200px', margin: '0 auto' },
  pageTitle: { margin: '0 0 10px 0', fontSize: '2.5rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' },
  subtitle: { margin: 0, fontSize: '1rem', opacity: 0.9, fontWeight: '300' },
  contentSection: { padding: '60px 20px', backgroundColor: '#f8f9fa' },
  contentContainer: { maxWidth: '1000px', margin: '0 auto' },
  contentWrapper: { backgroundColor: '#ffffff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' },
  section: { marginBottom: '40px', paddingBottom: '30px', borderBottom: '1px solid #e9ecef' },
  sectionTitle: { fontSize: '1.75rem', color: '#667eea', marginBottom: '20px', fontWeight: '600', paddingBottom: '10px', borderBottom: '3px solid #667eea' },
  subSectionTitle: { fontSize: '1.25rem', color: '#495057', marginTop: '25px', marginBottom: '15px', fontWeight: '600' },
  paragraph: { fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px', color: '#495057', textAlign: 'justify' },
  list: { marginLeft: '20px', marginBottom: '20px' },
  listItem: { fontSize: '1rem', lineHeight: '1.8', marginBottom: '12px', color: '#495057', paddingLeft: '10px' },
  restrictionBox: { backgroundColor: '#fff3cd', border: '1px solid #ffc107', borderRadius: '8px', padding: '20px', marginTop: '20px', marginBottom: '20px' },
  restrictionTitle: { fontSize: '1.1rem', color: '#856404', marginBottom: '15px', fontWeight: '600' },
  warningBox: { backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '8px', padding: '20px', marginTop: '20px', marginBottom: '20px' },
  warningText: { fontSize: '1rem', color: '#721c24', margin: 0, lineHeight: '1.8' },
  infoBox: { backgroundColor: '#d1ecf1', border: '1px solid #bee5eb', borderRadius: '8px', padding: '20px', marginTop: '20px', marginBottom: '20px' },
  disclaimerSection: { backgroundColor: '#343a40', color: '#ffffff', padding: '30px', borderRadius: '8px', marginBottom: '40px', marginTop: '40px' },
  disclaimerTitle: { fontSize: '1.75rem', color: '#ffc107', marginBottom: '20px', fontWeight: '700', textAlign: 'center' },
  disclaimerText: { fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '15px', color: '#ffffff', textAlign: 'justify' },
  contactSection: { backgroundColor: '#e7f3ff', padding: '30px', borderRadius: '8px', marginBottom: '40px', border: '2px solid #667eea' },
  contactBox: { backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginTop: '15px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  contactText: { fontSize: '1rem', marginBottom: '10px', color: '#495057' },
  link: { color: '#667eea', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' },
  acknowledgmentSection: { backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', borderLeft: '4px solid #667eea', marginTop: '40px' },
  acknowledgmentText: { fontSize: '1rem', lineHeight: '1.8', color: '#495057', margin: 0, fontStyle: 'italic' },
  scrollTop: { position: 'fixed', bottom: '30px', right: '30px', width: '50px', height: '50px', borderRadius: '50%', background: 'darkorange', color: '#fff', border: 'none', fontSize: '24px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', transition: 'all 0.3s ease', zIndex: 1000 }
};

export default TermsAndConditions;
