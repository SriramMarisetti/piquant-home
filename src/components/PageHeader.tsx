
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  showBackButton?: boolean;
}

const PageHeader = ({ title, showBackButton = true }: PageHeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center justify-between mb-6">
      {showBackButton ? (
        <button 
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>
      ) : (
        <div className="w-10"></div> // Spacer for alignment
      )}
      
      <h1 className="text-2xl font-bold text-center flex-1">{title}</h1>
      
      <div className="w-10"></div> // Spacer for alignment
    </div>
  );
};

export default PageHeader;
