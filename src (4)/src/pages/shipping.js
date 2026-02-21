import React, { useState, useEffect } from 'react';

const ShippingPolicy = () => {
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
          <h2 style={styles.pageTitle}>Shipping Policy</h2>
          <p style={styles.subtitle}>Digital Services Only</p>
        </div>
      </section>

      <section style={styles.contentSection}>
        <div style={styles.contentContainer}>
          <div style={styles.contentWrapper}>
            
            <div style={styles.noticeBox}>
              <div style={styles.iconWrapper}>
                <span style={styles.icon}>📦</span>
              </div>
              <h3 style={styles.noticeTitle}>No Physical Products</h3>
              <p style={styles.noticeParagraph}>
                <strong>INFOYASHONAND TECHNOLOGY PRIVATE LIMITED</strong> provides digital technology services only.
              </p>
            </div>

            <div style={styles.infoSection}>
              <h3 style={styles.sectionTitle}>Service Delivery</h3>
              <p style={styles.paragraph}>
                We do not sell or ship any physical products. All our services are delivered electronically through:
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <span style={styles.checkmark}>✓</span> Online platforms
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkmark}>✓</span> Email delivery
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkmark}>✓</span> Direct system access
                </li>
              </ul>
            </div>

            <div style={styles.contactSection}>
              <h3 style={styles.contactTitle}>Need Help?</h3>
              <p style={styles.paragraph}>
                For any queries regarding service delivery, you can contact us at:
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

            <div style={styles.servicesSection}>
              <h3 style={styles.servicesTitle}>Our Digital Services Include:</h3>
              <div style={styles.servicesGrid}>
                <div style={styles.serviceCard}>
                  <span style={styles.serviceIcon}>💻</span>
                  <p style={styles.serviceText}>IT Infrastructure Services</p>
                </div>
                <div style={styles.serviceCard}>
                  <span style={styles.serviceIcon}>🔧</span>
                  <p style={styles.serviceText}>AMC & Support</p>
                </div>
                <div style={styles.serviceCard}>
                  <span style={styles.serviceIcon}>☁️</span>
                  <p style={styles.serviceText}>Cloud Solutions</p>
                </div>
                <div style={styles.serviceCard}>
                  <span style={styles.serviceIcon}>📱</span>
                  <p style={styles.serviceText}>Software Development</p>
                </div>
              </div>
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
    background: 'linear-gradient(135deg, #92e4dbff 0%, #042b27ff 100%)',
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
    background: 'linear-gradient(135deg, #29e0cbff 0%, #01100eff 100%)',
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
    maxWidth: '900px',
    margin: '0 auto',
  },
  contentWrapper: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  },
  noticeBox: {
    backgroundColor: '#e0f2f1',
    border: '3px solid #00897b',
    borderRadius: '12px',
    padding: '40px',
    marginBottom: '40px',
    textAlign: 'center',
  },
  iconWrapper: {
    marginBottom: '20px',
  },
  icon: {
    fontSize: '4rem',
  },
  noticeTitle: {
    fontSize: '2rem',
    color: '#00695c',
    marginBottom: '15px',
    fontWeight: '700',
  },
  noticeParagraph: {
    fontSize: '1.1rem',
    color: '#004d40',
    lineHeight: '1.8',
    margin: 0,
  },
  infoSection: {
    marginBottom: '40px',
    paddingBottom: '30px',
    borderBottom: '1px solid #e9ecef',
  },
  sectionTitle: {
    fontSize: '1.75rem',
    color: '#00897b',
    marginBottom: '20px',
    fontWeight: '600',
    paddingBottom: '10px',
    borderBottom: '3px solid #00897b',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.8',
    marginBottom: '20px',
    color: '#495057',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '20px 0',
  },
  listItem: {
    fontSize: '1.1rem',
    lineHeight: '2',
    marginBottom: '15px',
    color: '#495057',
    paddingLeft: '10px',
  },
  checkmark: {
    color: '#00897b',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginRight: '10px',
  },
  contactSection: {
    backgroundColor: '#e7f3ff',
    padding: '30px',
    borderRadius: '8px',
    marginBottom: '40px',
    border: '2px solid #00897b',
  },
  contactTitle: {
    fontSize: '1.75rem',
    color: '#00695c',
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
    color: '#00897b',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  servicesSection: {
    marginTop: '40px',
  },
  servicesTitle: {
    fontSize: '1.75rem',
    color: '#00897b',
    marginBottom: '25px',
    fontWeight: '600',
    textAlign: 'center',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  serviceCard: {
    backgroundColor: '#f1f8f6',
    padding: '25px',
    borderRadius: '10px',
    textAlign: 'center',
    border: '2px solid #b2dfdb',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  serviceIcon: {
    fontSize: '2.5rem',
    display: 'block',
    marginBottom: '15px',
  },
  serviceText: {
    fontSize: '1rem',
    color: '#00695c',
    fontWeight: '600',
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

export default ShippingPolicy;
