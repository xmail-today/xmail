import xmailLogo from '@/assets/xmail-logo.png';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const sizeMap = {
  small: 'h-8 sm:h-10',
  medium: 'h-10 sm:h-12',
  large: 'h-14 sm:h-16 md:h-20',
};

// Initial clipped width (square box)
const clipWidthMap = {
  small: 'max-w-[32px] sm:max-w-[40px]',
  medium: 'max-w-[40px] sm:max-w-[48px]',
  large: 'max-w-[56px] sm:max-w-[64px] md:max-w-[80px]',
};

// Border radius per size
const radiusMap = {
  small: 'rounded-[10px] sm:rounded-[12px]',
  medium: 'rounded-[12px] sm:rounded-[14px]',
  large: 'rounded-[14px] sm:rounded-[16px] md:rounded-[18px]',
};

// Expanded width on hover
const revealMaxMap = {
  small: 'group-hover:max-w-[180px]',
  medium: 'group-hover:max-w-[220px]',
  large: 'group-hover:max-w-[300px]',
};

export const Logo = ({ size = 'medium', className = '' }: LogoProps) => {
  return (
    <div
      className={`inline-flex items-center group cursor-hover ${className}`}
      role="img"
      aria-label="xmail logo"
    >
      <div
        className={`relative overflow-hidden transition-all duration-500 ease-out ${radiusMap[size]}`}
      >
        <img
          src={xmailLogo}
          alt="xmail"
          className={`${sizeMap[size]} w-auto transition-transform duration-500 group-hover:scale-105`}
        />
      </div>
    </div>
  );
};
