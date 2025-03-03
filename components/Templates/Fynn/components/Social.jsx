import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Social = ({ containerStyles, iconStyles, socialLinks }) => {
  // Create social media config with icons
  const socialConfig = [
    {
      icon: <FaGithub />,
      url: socialLinks?.github,
      name: 'github'
    },
    {
      icon: <FaLinkedin />,
      url: socialLinks?.linkedin,
      name: 'linkedin'
    },
    // Add more social media platforms as needed
  ];

  return (
    <div className={containerStyles}>
      {socialConfig.map((item, index) => {
        // Only render if URL exists
        if (!item.url) return null;
        
        return (
          <Link 
            key={index} 
            target="_blank" 
            href={item.url} 
            className={iconStyles}
            aria-label={`Visit ${item.name} profile`}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
