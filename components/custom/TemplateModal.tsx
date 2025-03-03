import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowLeft, Github, ZoomIn, ZoomOut } from 'lucide-react';
import { Template } from '../../types/templateTypes';
import { useState } from 'react';

interface TemplateModalProps {
  template: Template | null;
  isOpen: boolean;
  onClose: () => void;
  onSelect: (template: Template) => void;
}

const TemplateModal: React.FC<TemplateModalProps> = ({ template, isOpen, onClose, onSelect }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!template) return null;

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Blurred background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${template.thumbnailPath})`,
              filter: 'blur(30px) brightness(0.3)',
              transform: 'scale(1.1)', // Prevent blur edges
            }}
          />
          
          {/* Overlay to darken the blurred background */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4 flex justify-between items-center">
            <motion.button
              className="flex items-center text-white bg-black/40 hover:bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm transition-colors"
              onClick={onClose}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span>Back</span>
            </motion.button>
            
            <motion.div
              className="text-white text-center flex-1 font-medium"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {template.templateName}
            </motion.div>
            
            <motion.div className="flex items-center space-x-2">
              <motion.button
                className="text-white bg-black/40 hover:bg-black/60 p-2 rounded-full backdrop-blur-sm transition-colors"
                onClick={toggleZoom}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                title={isZoomed ? "Zoom out" : "Zoom in"}
              >
                {isZoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
              </motion.button>
              
              <motion.button
                className="text-white bg-black/40 hover:bg-black/60 p-2 rounded-full backdrop-blur-sm transition-colors"
                onClick={onClose}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
          
          {/* Main content - Scrollable container */}
          <div 
            className={`h-full overflow-auto py-16 px-4 flex ${isZoomed ? 'items-start' : 'items-center'} justify-center ${isZoomed ? 'cursor-move' : ''}`}
            style={{ scrollBehavior: 'smooth' }}
          >
            <motion.div 
              className={`relative ${isZoomed ? 'w-auto max-w-none' : 'w-full max-w-6xl'}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <img
                src={template.thumbnailPath}
                alt={template.templateName}
                className={`rounded-xl ${isZoomed ? 'w-auto h-auto max-w-none' : 'w-full object-contain max-h-[80vh]'}`}
                style={{ 
                  boxShadow: '0 0 30px rgba(0,0,0,0.5)',
                  cursor: isZoomed ? 'move' : 'pointer',
                  transformOrigin: 'top center', // Set transform origin to top center

                }}
                onClick={isZoomed ? undefined : toggleZoom}
              />
              
              {/* Template info overlay - only show when not zoomed */}
              {!isZoomed && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-xl">
                  <h2 className="text-2xl font-bold mb-2">{template.templateName}</h2>
                  <div className="flex items-center text-gray-300 mb-4">
                    <span>Created by </span>
                    <a
                      href={template.creatorProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 text-blue-400 hover:text-blue-300 flex items-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {template.templateCreator}
                      <Github className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
          
          {/* Zoom instructions - only show when zoomed */}
          {isZoomed && (
            <motion.div
              className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              Scroll to explore the full template
            </motion.div>
          )}
          
          {/* Footer with action buttons - only show when not zoomed */}
          {!isZoomed && (
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-6 flex justify-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white/10 backdrop-blur-md p-1 rounded-full flex space-x-2">
                <button
                  className="px-6 py-3 rounded-full text-white hover:bg-white/10 transition-colors"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  className="px-8 py-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors flex items-center"
                  onClick={() => onSelect(template)}
                >
                  <Check className="mr-2 h-5 w-5" />
                  Select This Template
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TemplateModal;