import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Instagram, Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  const BRAND = {
    name: "Soujanya Enterprises",
    tagline: "Your Trusted Partner in Tarpaulins & Rope",
    phone: "+91 9966887762",
    phoneDigits: "919966887762",
    email: "soujanyaenterprisesvzm@gmail.com",
    instagram: "soujanya_enterprise",
    address: "Door no. 5-15-1, NCS Road, Opp. NVR Gas, Vizianagaram",
    dealer: "Dealer of Silpaulin",
  };

  const whatsappLink = (message: string) => 
    `https://wa.me/${BRAND.phoneDigits}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact details */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-700">
            We typically respond within the day. For urgent queries, call or WhatsApp.
          </p>
          <div className="space-y-3 text-gray-800">
            <p className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-0.5"/> 
              <a href={`tel:${BRAND.phone}`} className="hover:underline">{BRAND.phone}</a>
            </p>
            <p className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-0.5"/> 
              <a href={`mailto:${BRAND.email}`} className="hover:underline">{BRAND.email}</a>
            </p>
            <p className="flex items-start gap-3">
              <Instagram className="w-5 h-5 mt-0.5"/> 
              <a 
                href={`https://instagram.com/${BRAND.instagram}`} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:underline"
              >
                @{BRAND.instagram}
              </a>
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5"/>
              {BRAND.address}
            </p>
          </div>
        </div>

        {/* Enquiry form */}
        <div className="lg:col-span-3">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Quick Enquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" required />
                <Input type="tel" placeholder="Phone / WhatsApp" required />
                <Input className="md:col-span-2" type="email" placeholder="Email (optional)" />
                <textarea 
                  className="md:col-span-2 border rounded-md p-2 focus:outline-none focus:ring w-full" 
                  placeholder="Tell us your requirement: size, GSM, color, quantity" 
                  rows={4} 
                />
                <div className="md:col-span-2 flex items-center justify-between">
                  <Button type="submit" className="rounded-2xl">Send</Button>
                  <Button asChild variant="secondary" className="rounded-2xl">
                    <a href={whatsappLink("Hello, I’d like to place an order / request a quote.")}>
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
