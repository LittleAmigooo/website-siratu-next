import './globals.css';

export const metadata = {
  title: 'SIRATU (Sistem Informasi Kelurahan Rawa Buntu)',
  description: 'Pelayanan Publik Cepat, Transparan, dan Terintegrasi untuk Warga Rawa Buntu',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* CDN FontAwesome untuk ikon */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
        {/* CDN Google Fonts Inter */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans text-gray-800 bg-gray-50 antialiased">
        {children}
      </body>
    </html>
  );
}