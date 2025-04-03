/* "use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiCode, FiUser, FiBriefcase, FiSend } from 'react-icons/fi';

const Navbar = () => {
  const router = useRouter();
  const links = [
    { path: '/', name: 'Home', icon: <FiUser /> },
    { path: '/projects', name: 'Projects', icon: <FiBriefcase /> },
    { path: '/contact', name: 'Contact', icon: <FiSend /> }
  ];

  const pathname = usePathname();

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Bildad
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link href={link.path} key={link.path} className={`flex items-center gap-2 ${pathname === link.path ? 'text-blue-400' : 'hover:text-blue-400'}`}>
              {link.icon}
              <motion.span whileHover={{ scale: 1.05 }}>{link.name}</motion.span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; */