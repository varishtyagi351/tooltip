import './tooltip.css';

type TooltipProperties = {
  children: React.ReactElement;
  text: string;
};

export default function Tooltip({ children, text }: TooltipProperties) {
  return (
    <div className="tooltip-container">
      <div className="tooltip-children">
        {/* Render the children inside the tooltip */}
        {children}
        <div className="tooltip">
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}
