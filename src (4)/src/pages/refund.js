import React, { useState, useEffect } from 'react';

const RefundPolicy = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
         
        </div>
      </header>

      <section style={styles.titleBanner}>
        <div style={styles.bannerContainer}>
          <h2 style={styles.pageTitle}>Refund Policy</h2>
          <p style={styles.subtitle}>Our Commitment to Fair Refund Practices</p>
        </div>
      </section>

      <section style={styles.contentSection}>
        <div style={styles.contentContainer}>
          <div style={styles.contentWrapper}>
            
            <div style={styles.introSection}>
              <p style={styles.introParagraph}>
                At <strong>Infoyashonand Technology Pvt. Ltd.</strong>, we strive to deliver high-quality IT solutions and services. 
                However, we understand that there may be situations where a refund is requested. This policy explains our approach 
                towards refunds and cancellations.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>1. Services</h3>
              <p style={styles.paragraph}>
                Fees paid for IT services, AMC (Annual Maintenance Contracts), or customized software development are generally{' '}
                <strong>non-refundable</strong> once the service has been initiated. If services are not delivered as per the agreed 
                scope, clients may request a review, and refunds may be issued at the management's discretion.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>2. Software / Digital Products</h3>
              <p style={styles.paragraph}>
                Payments made for software licenses, digital tools, or subscriptions are <strong>non-refundable</strong> once 
                activated or delivered, except in cases of duplicate payments or technical errors from our side.
              </p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>3. Hardware / Equipment</h3>
              <p style={styles.paragraph}>
                If any hardware or IT equipment purchased through us is found to be defective or damaged at the time of delivery, 
                you must notify us within <strong>7 days</strong> of receipt. Replacement or refund will be provided as per the 
                manufacturer's warranty terms.
              </p>
              <div style={styles.warningBox}>
                <p style={styles.warningText}>
                  ⚠️ <strong>Important:</strong> Hardware issues must be reported within 7 days of delivery for refund eligibility.
                </p>
              </div>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>4. Cancellations</h3>
              <p style={styles.paragraph}>
                Service orders can be cancelled before the commencement of work. Once the project, AMC, or service engagement has 
                started, cancellations are not eligible for a refund.
              </p>
              <div style={styles.infoBox}>
                <ul style={styles.list}>
                  <li style={styles.listItem}>✓ Cancellations allowed before work starts</li>
                  <li style={styles.listItem}>✗ No refunds after service initiation</li>
                </ul>
              </div>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>5. Refund Timeline</h3>
              <div style={styles.timelineBox}>
                <p style={styles.timelineParagraph}>
                  Approved refunds will be processed within <strong style={styles.highlightText}>7–10 business days</strong> through 
                  the original mode of payment.
                </p>
              </div>
            </div>

            <div style={styles.contactSection}>
              <h3 style={styles.contactTitle}>6. Contact</h3>
              <p style={styles.paragraph}>
                For any refund-related queries, please contact us at:
              </p>
              <div style={styles.contactBox}>
                <p style={styles.contactText}>
                  📧 <strong>Email:</strong>{' '}
                  <a href="mailto:support@infoyashonand.com" style={styles.link}>
                    support@infoyashonand.com
                  </a>
                </p>
                <p style={styles.contactText}>
                  ☎ <strong>Phone:</strong>{' '}
                  <a href="tel:+918055514368" style={styles.link}>+91-8055514368</a> /{' '}
                  <a href="tel:+918600876577" style={styles.link}>+91-8600876577</a>
                </p>
                <p style={styles.contactText}>
                  📍 <strong>Address:</strong> 1st Floor, Pearl Enclave, M.S.E.B. Road, Vishrambag, Sangli, Maharashtra 416416
                </p>
              </div>
            </div>

            <div style={styles.noteSection}>
              <p style={styles.noteText}>
                <em>
                  <strong>Note:</strong> This Refund Policy is subject to change at the discretion of Infoyashonand Technology Pvt. Ltd. 
                  Please review it periodically for updates.
                </em>
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
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  header: {
    background: 'linear-gradient(135deg, #d32f2f 0%, #c62828 100%)',
    padding: '20px 0',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  headerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  mainHeading: {
    margin: 0,
    fontSize: '2rem',
    textAlign: 'center',
  },
  logoLink: {
    textDecoration: 'none',
    color: '#ffffff',
    fontWeight: '600',
    transition: 'opacity 0.3s ease',
  },
  titleBanner: {
    background: 'linear-gradient(135deg, #f86868ff 0%, #2a0202ff 100%)',
    padding: '60px 20px',
    color: '#fff',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  bannerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  pageTitle: {
    margin: '0 0 10px 0',
    fontSize: '2.5rem',
    fontWeight: '700',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  },
  subtitle: {
    margin: 0,
    fontSize: '1rem',
    opacity: 0.9,
    fontWeight: '300',
  },
  contentSection: {
    padding: '60px 20px',
    backgroundColor: '#f8f9fa',
  },
  contentContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  contentWrapper: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  },
  introSection: {
    backgroundColor: '#ffebee',
    padding: '25px',
    borderRadius: '8px',
    marginBottom: '40px',
    borderLeft: '4px solid #d32f2f',
  },
  introParagraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#b71c1c',
    margin: 0,
  },
  section: {
    marginBottom: '40px',
    paddingBottom: '30px',
    borderBottom: '1px solid #e9ecef',
  },
  sectionTitle: {
    fontSize: '1.75rem',
    color: '#d32f2f',
    marginBottom: '20px',
    fontWeight: '600',
    paddingBottom: '10px',
    borderBottom: '3px solid #d32f2f',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.8',
    marginBottom: '20px',
    color: '#495057',
    textAlign: 'justify',
  },
  warningBox: {
    backgroundColor: '#fff3cd',
    border: '2px solid #ffc107',
    borderRadius: '8px',
    padding: '20px',
    marginTop: '20px',
  },
  warningText: {
    fontSize: '1rem',
    color: '#856404',
    margin: 0,
    lineHeight: '1.6',
  },
  infoBox: {
    backgroundColor: '#e3f2fd',
    border: '1px solid #90caf9',
    borderRadius: '8px',
    padding: '20px',
    marginTop: '20px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    fontSize: '1rem',
    lineHeight: '2',
    marginBottom: '10px',
    color: '#0d47a1',
    paddingLeft: '10px',
  },
  timelineBox: {
    backgroundColor: '#c8e6c9',
    border: '2px solid #66bb6a',
    borderRadius: '8px',
    padding: '25px',
    textAlign: 'center',
  },
  timelineParagraph: {
    fontSize: '1.1rem',
    color: '#2e7d32',
    margin: 0,
    lineHeight: '1.6',
  },
  highlightText: {
    color: '#1b5e20',
    fontSize: '1.3rem',
  },
  contactSection: {
    backgroundColor: '#e7f3ff',
    padding: '30px',
    borderRadius: '8px',
    marginBottom: '40px',
    border: '2px solid #d32f2f',
  },
  contactTitle: {
    fontSize: '1.75rem',
    color: '#c62828',
    marginBottom: '15px',
    fontWeight: '600',
  },
  contactBox: {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '8px',
    marginTop: '15px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  contactText: {
    fontSize: '1rem',
    marginBottom: '15px',
    color: '#495057',
    lineHeight: '1.6',
  },
  link: {
    color: '#d32f2f',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  noteSection: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    borderLeft: '4px solid #d32f2f',
    marginTop: '30px',
  },
  noteText: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#616161',
    margin: 0,
  },
  scrollTop: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'darkorange',
    color: '#fff',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    transition: 'all 0.3s ease',
    zIndex: 1000,
  },
};

export default RefundPolicy;
