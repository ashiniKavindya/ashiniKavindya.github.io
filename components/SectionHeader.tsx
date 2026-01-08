
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        <span className="text-indigo-500 mr-2 font-mono">&lt;</span>
        {title}
        <span className="text-indigo-500 ml-2 font-mono">/&gt;</span>
      </h2>
      {subtitle && <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="h-1 w-20 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
    </div>
  );
};

export default SectionHeader;
