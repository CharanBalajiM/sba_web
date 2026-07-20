export default function MapEmbed() {
  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.913437525381!2d77.71726671083944!3d11.341246088800918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f8ef1a473e7%3A0xca26eb5dd11fae8e!2sSree+Balaji+Advertising!5e0!3m2!1sen!2sin!4v1721487823528!5m2!1sen!2sin"
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
