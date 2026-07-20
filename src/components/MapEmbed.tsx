export default function MapEmbed() {
  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
      <iframe
        src="https://maps.google.com/maps?q=Sree%20Balaji%20Advertising,%20Vasuki%20Street%20Number%201,%20opposite%20to%20SCS%20hospital,%20Erode%20Fort,%20Erode,%20Tamil%20Nadu%20638001&t=&z=17&ie=UTF8&iwloc=&output=embed"
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
