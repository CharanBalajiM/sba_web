export default function MapEmbed() {
  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.968270570183!2d77.71714571532977!3d11.338276791941655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f2a6be8c0d1%3A0xe510cf2eef8e0aa3!2sPeriyar%20Nagar%2C%20Erode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1689100000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Sree Balaji Advertising Location Map"
        className="grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
      />
    </div>
  );
}
