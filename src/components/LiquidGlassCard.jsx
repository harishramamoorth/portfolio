// src/components/LiquidGlassCard.jsx


const LiquidGlassCard = ({ children, className = "", hover = true }) => {
  return (
    <div className={`liquid-glass p-6 ${hover ? 'hover-lift' : ''} ${className}`}>
      {children}
    </div>
  );
};
export default LiquidGlassCard;