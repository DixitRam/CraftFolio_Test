import React from 'react';
import { motion } from 'framer-motion';
import { Github, Eye } from 'lucide-react';
import { Template } from '../../types/templateTypes';

interface TemplateCardProps {
  template: Template;
  onClick: () => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onClick }) => {
  return (
    <motion.div
    key={template.id}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={template.thumbnailPath}
          alt={template.templateName}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button 
            onClick={onClick}
            className="bg-white text-gray-800 px-4 py-2 rounded-full flex items-center font-medium transform scale-90 group-hover:scale-100 transition-transform duration-300"
          >
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </button>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{template.templateName}</h3>
        <div className="flex items-center text-sm text-gray-600">
          <span>Created by </span>
          <a
            href={template.creatorProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-600 hover:text-blue-800 flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {template.templateCreator}
            <Github className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TemplateCard;