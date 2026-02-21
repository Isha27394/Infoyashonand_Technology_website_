import React, { useState, useEffect } from 'react';

const PrivacyPolicy = () => {
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
          <h2 style={styles.pageTitle}>Privacy Policy</h2>
          <p style={styles.subtitle}>Effective Date: January 1, 2023</p>
        </div>
      </section>

      <section style={styles.contentSection}>
        <div style={styles.contentContainer}>
          <div style={styles.contentWrapper}>
            
            <div style={styles.introSection}>
              <p style={styles.introParagraph}>
                At <strong>Infoyashonand Technology Pvt. Ltd.</strong>, we value your trust and are committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our website, 
                applications, products, and IT services.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>1. Information We Collect</h3>
              <p style={styles.paragraph}>
                We may collect personal information such as your name, email address, contact number, company name, and billing details when you:
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>Request a quote or subscribe to our services</li>
                <li style={styles.listItem}>Fill out forms on our website</li>
                <li style={styles.listItem}>Communicate with our support team</li>
              </ul>
              <p style={styles.paragraph}>
                In addition, we may collect non-personal data such as IP addresses, browser type, and usage statistics to improve 
                our website and services.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>2. Use of Information</h3>
              <p style={styles.paragraph}>
                Your information may be used to:
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>Provide IT solutions, AMC services, and support</li>
                <li style={styles.listItem}>Process payments and invoices</li>
                <li style={styles.listItem}>Improve our services and website experience</li>
                <li style={styles.listItem}>Send important updates, service alerts, or promotional offers</li>
                <li style={styles.listItem}>Comply with legal and regulatory requirements</li>
              </ul>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>3. Data Sharing</h3>
              <div style={styles.highlightBox}>
                <p style={styles.highlightText}>
                  <strong>We do not sell or rent your personal information.</strong>
                </p>
              </div>
              <p style={styles.paragraph}>
                Data may only be shared with trusted partners, service providers, or legal authorities where necessary for:
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>Payment processing</li>
                <li style={styles.listItem}>Service delivery (e.g., hardware/software partners)</li>
                <li style={styles.listItem}>Legal compliance or protection of rights</li>
              </ul>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>4. Cookies</h3>
              <p style={styles.paragraph}>
                Our website may use cookies to enhance your browsing experience, analyze traffic, and improve functionality. You can 
                choose to disable cookies in your browser settings, but some features of our site may not function properly.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>5. Data Security</h3>
              <p style={styles.paragraph}>
                We take reasonable measures—both technical and organizational—to protect your personal data from unauthorized access, 
                loss, misuse, or disclosure. However, no electronic transmission or storage is 100% secure.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>6. Data Retention</h3>
              <p style={styles.paragraph}>
                We retain your personal data only as long as necessary for business, contractual, or legal purposes. Once data is 
                no longer required, it will be securely deleted.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>7. Third-Party Links</h3>
              <p style={styles.paragraph}>
                Our website may contain links to external sites. We are not responsible for the privacy practices of such third-party 
                websites, and we encourage you to review their policies separately.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>8. Your Rights</h3>
              <p style={styles.paragraph}>
                You have the right to:
              </p>
              <div style={styles.rightsBox}>
                <ul style={styles.list}>
                  <li style={styles.listItem}>Access, correct, or update your personal information</li>
                  <li style={styles.listItem}>Request deletion of your personal data</li>
                  <li style={styles.listItem}>Opt out of marketing communications</li>
                </ul>
              </div>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>9. Changes to this Policy</h3>
              <p style={styles.paragraph}>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. 
                Please review this page periodically for updates.
              </p>
            </div>

            <div style={styles.contactSection}>
              <h3 style={styles.sectionTitle}>10. Contact Us</h3>
              <p style={styles.paragraph}>
                If you have any questions about this Privacy Policy or how your data is handled, please contact us at:
              </p>
              <div style={styles.contactBox}>
                <p style={styles.contactText}>
                  📧 <strong>Email:</strong> <a href="mailto:support@infoyashonand.com" style={styles.link}>support@infoyashonand.com</a>
                </p>
                <p style={styles.contactText}>
                  ☎ <strong>Phone:</strong> <a href="tel:+918055514368" style={styles.link}>+91-8055514368</a> / <a href="tel:+918600876577" style={styles.link}>+91-8600876577</a>
                </p>
                <p style={styles.contactText}>
                  📍 <strong>Address:</strong> 1st Floor, Pearl Enclave, M.S.E.B. Road, Vishrambag, Sangli, Maharashtra 416416
                </p>
              </div>
            </div>

            <div style={styles.aboutSection}>
              <h3 style={styles.aboutTitle}>About Us</h3>
              <p style={styles.aboutText}>
                <strong>Infoyashonand Technology Pvt. Ltd.</strong> is a pure play IT infrastructure services company established 
                with a mission to provide reliable and high-quality IT infrastructure services to consumer, small medium business 
                and enterprise companies.
              </p>
            </div>

            <div style={styles.effectiveSection}>
              <p style={styles.effectiveText}>
                This Privacy Policy is effective as of <strong>January 1, 2023</strong>, and applies to all visitors, customers, 
                and service users of Infoyashonand Technology Pvt. Ltd.
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
  header: { background: 'linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)', padding: '20px 0', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
  headerContainer: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' },
  mainHeading: { margin: 0, fontSize: '2rem', textAlign: 'center' },
  logoLink: { textDecoration: 'none', color: '#ffffff', fontWeight: '600', transition: 'opacity 0.3s ease' },
  titleBanner: { background: 'linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)', padding: '60px 20px', color: '#fff', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
  bannerContainer: { maxWidth: '1200px', margin: '0 auto' },
  pageTitle: { margin: '0 0 10px 0', fontSize: '2.5rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' },
  subtitle: { margin: 0, fontSize: '1rem', opacity: 0.9, fontWeight: '300' },
  contentSection: { padding: '60px 20px', backgroundColor: '#f8f9fa' },
  contentContainer: { maxWidth: '1000px', margin: '0 auto' },
  contentWrapper: { backgroundColor: '#ffffff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' },
  introSection: { backgroundColor: '#e3f2fd', padding: '25px', borderRadius: '8px', marginBottom: '40px', borderLeft: '4px solid #1e88e5' },
  introParagraph: { fontSize: '1.1rem', lineHeight: '1.8', color: '#0d47a1', margin: 0 },
  section: { marginBottom: '40px', paddingBottom: '30px', borderBottom: '1px solid #e9ecef' },
  sectionTitle: { fontSize: '1.75rem', color: '#1e88e5', marginBottom: '20px', fontWeight: '600', paddingBottom: '10px', borderBottom: '3px solid #1e88e5' },
  paragraph: { fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px', color: '#495057', textAlign: 'justify' },
  list: { marginLeft: '20px', marginBottom: '20px' },
  listItem: { fontSize: '1rem', lineHeight: '1.8', marginBottom: '12px', color: '#495057', paddingLeft: '10px' },
  highlightBox: { backgroundColor: '#fff3cd', border: '2px solid #ffc107', borderRadius: '8px', padding: '20px', marginBottom: '20px', textAlign: 'center' },
  highlightText: { fontSize: '1.1rem', color: '#856404', margin: 0, fontWeight: '600' },
  rightsBox: { backgroundColor: '#d1ecf1', border: '1px solid #bee5eb', borderRadius: '8px', padding: '20px', marginTop: '15px' },
  contactSection: { backgroundColor: '#e7f3ff', padding: '30px', borderRadius: '8px', marginBottom: '40px', border: '2px solid #1e88e5' },
  contactBox: { backgroundColor: '#ffffff', padding: '25px', borderRadius: '8px', marginTop: '15px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  contactText: { fontSize: '1rem', marginBottom: '15px', color: '#495057', lineHeight: '1.6' },
  link: { color: '#1e88e5', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' },
  aboutSection: { backgroundColor: '#f1f8e9', padding: '30px', borderRadius: '8px', marginBottom: '30px', border: '2px solid #7cb342' },
  aboutTitle: { fontSize: '1.75rem', color: '#558b2f', marginBottom: '15px', fontWeight: '600' },
  aboutText: { fontSize: '1rem', lineHeight: '1.8', color: '#33691e', margin: 0, textAlign: 'justify' },
  effectiveSection: { backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #1e88e5', marginTop: '30px' },
  effectiveText: { fontSize: '0.95rem', lineHeight: '1.6', color: '#495057', margin: 0, fontStyle: 'italic' },
  scrollTop: { position: 'fixed', bottom: '30px', right: '30px', width: '50px', height: '50px', borderRadius: '50%', background: 'darkorange', color: '#fff', border: 'none', fontSize: '24px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', transition: 'all 0.3s ease', zIndex: 1000 }
};

export default PrivacyPolicy;
