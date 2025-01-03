import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const QuoteButton = () => {
    const handleDownload = () => {
      const fileUrl = "/Gobind_Products_Catalogue.pdf";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "Gobind_Products_Catalogue.pdf";
      link.click();
    }
  return (
    
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleDownload}
      className="fixed bottom-8 left-8 md:left-auto md:right-8 z-50 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
    >
      <FileText className="h-5 w-5" />
      <span>Catalogue </span>
    </motion.button>
  );
};

export default QuoteButton;