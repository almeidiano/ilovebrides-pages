// Importações e configurações
import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; 

// Componentes importados
import Footer from '@/components/Footer'
import Header from '@/components/Header'

// export async function generateMetadata() {
//   // fetch data
//   let req = await fetch(`${process.env.NEXT_PUBLIC_DEPLOY_API_CMS_URL}/seo/metadata`);
//   let json = await req.json();
 
//   return {
//     title: 'I Love Brides',
//     description: json.description,
//     keywords: json.keywords,
//     // openGraph: {
//     //   images: ['/some-specific-page-image.jpg', ...previousImages],
//     // },
//   }
// }

// Função de layout raiz
export default async function RootLayout({children}) {
  return (
    <html lang="en" className="bg-slate-100">
      <body className="px-10 text-slate-900 max-[1024px]:px-0">
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
