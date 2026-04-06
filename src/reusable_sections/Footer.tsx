"use client";
 
import React from "react";
import { Link } from "@/components/common/Link";
import { EcommerceTermsProvider, useEcommerceTerms } from "@/integrations/wordpress/WordPressEcommerceTermsProvider";
import { WP_Term_Query } from "@/integrations/wordpress/wp_term_query";
 
const linkClass = "text-sm font-bold text-secondary-foreground/80 transition-all hover:text-accent hover:underline hover:decoration-accent hover:decoration-2 hover:underline-offset-4 font-sans";
const headingClass = "text-sm font-extrabold text-secondary-foreground mb-6 uppercase tracking-widest font-sans";
 
const systemLinks = [
  { label: "Digital Kisan Portal", to: "/DigitalKisanPortalPage" },
  { label: "Soil Health Card", to: "/SoilHealthPage" },
  { label: "Kisan News Feed", to: "/KisanNewsPage" },
  { label: "Agri Support", to: "mailto:support@agrikisan.gov.in" },
];
 
const protocolLinks = [
  { label: "Facebook Page", to: "#" },
  { label: "Twitter / X", to: "#" },
  { label: "WhatsApp Helpline", to: "#" },
];
 
const legalLinks = [
  { label: "Privacy Policy", to: "#" },
  { label: "Terms of Service", to: "#" },
  { label: "Farmer Rights", to: "#" },
];
 
function FooterCategories() {
  const { terms, loading, error } = useEcommerceTerms();
 
  if (loading) {
    return (
      <ul className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <li key={i} data-index={i}>
            <div className="h-4 w-24 bg-primary/20 animate-pulse rounded-sm" />
          </li>
        ))}
      </ul>
    );
  }
 
  if (error || terms.length === 0) {
    return (
      <ul className="space-y-4">
        <li data-index={0}>
          <Link to="/DigitalKisanPortalPage" className={linkClass}>All Resources</Link>
        </li>
      </ul>
    );
  }
 
  return (
    <ul className="space-y-4">
      {terms.map((term, i) => (
        <li key={term.id} data-index={i}>
          <Link to={term.link || "/DigitalKisanPortalPage"} className={linkClass}>
            {term.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
 
const wp_term_query_params = { taxonomy: "product_cat", per_page: 5, orderby: "count", order: "desc" };
const wp_term_query = new WP_Term_Query(wp_term_query_params);
 
export default function SystemTerminal() {
  return (
    <footer data-section-id="166748" id="portal-footer" className="dark bg-secondary text-secondary-foreground py-20 px-8 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {}
          <div className="flex flex-col justify-between lg:col-span-1">
            <div>
              <Link to="/DigitalKisanPortalPage">
                <img 
                  src="https://wpvc-images.s3.us-east-1.amazonaws.com/images/1620659/img/uniformist_logo_footer.png" 
                  alt="AgriKisan" 
                  className="h-7 mb-6 brightness-0 invert"
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="mt-12 lg:mt-0">
              <p className="text-sm text-secondary-foreground/60 font-sans">
                &copy; {new Date().getFullYear()} AgriKisan - Digital India Initiative.<br />
                All rights reserved.
              </p>
            </div>
          </div>
 
          {}
          <div>
            <h3 className={headingClass}>Emergency Helplines</h3>
            <EcommerceTermsProvider wp_term_query={wp_term_query}>
              <FooterCategories />
            </EcommerceTermsProvider>
          </div>
 
          {}
          <div>
            <h3 className={headingClass}>Digital Services</h3>
            <ul className="space-y-4">
              {systemLinks.map((link, i) => (
                <li key={link.label} data-index={i}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {}
          <div>
            <h3 className={headingClass}>Social Media</h3>
            <ul className="space-y-4">
              {protocolLinks.map((link, i) => (
                <li key={link.label} data-index={i}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {}
          <div>
            <h3 className={headingClass}>Site Policies</h3>
            <ul className="space-y-4">
              {legalLinks.map((link, i) => (
                <li key={link.label} data-index={i}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
        </div>
      </div>
    </footer>
  );
}