
import "./globals.css";

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <html>
      <body>
      <div className="bg-gray-900 min-h-screen text-white flex flex-col">
      <main className="flex-1">{children}</main>
    </div>
      </body>
    </html>
   
  );
};

export default Layout;