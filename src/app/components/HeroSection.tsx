// components/HeroSection.tsx
import Image from 'next/image';

interface HeroSectionProps {
    src: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ src }) => {
    return (
        <div className="relative w-full min-h-screen">
            {/* Container for the full-screen hero image */}
            <div className="absolute inset-0">
                <Image 
                    src={src} 
                    alt="Teaching Portfolio Hero" 
                    layout="fill"
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
            </div>
        </div>
    );
};

export default HeroSection;