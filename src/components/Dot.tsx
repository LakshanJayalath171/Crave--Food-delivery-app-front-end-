interface BlinkingDotProps {
  color: string;
  size?: string;
}

const BlinkingDot = ({ color, size = "h-2 w-2" }: BlinkingDotProps) => {
  return (
    <span className="relative flex items-center justify-center">
      {/* Blinking animation */}
      <span
        className={`absolute inline-flex ${size} rounded-full ${color} opacity-75 animate-ping`}
      />

      {/* Main dot */}
      <span
        className={`relative inline-flex ${size} rounded-full ${color}`}
      />
    </span>
  );
};

export default BlinkingDot;
