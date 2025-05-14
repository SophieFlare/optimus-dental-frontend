import Logo from '@/assets/logo.svg'
import XSocial from '@/assets/social-x.svg';
import InstaSocial from '@/assets/social-instagram.svg';
import YTSocial from '@/assets/social-youtube.svg';

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className='flex flex-col lg:flex-row lg:items-center gap-8'>
          <div className='flex gap-2 items-center lg:flex-1'>
            <Logo className="h-6 w-6"/>
            <div className='font-medium'>OPTIMUS Dental Studio</div>
          </div>
          <nav className='flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center'>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">Features</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">Developers</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">Company</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">ChangeLog</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">Features</a>
          </nav>
          <div className='flex gap-5 lg:flex-1 lg:justify-end'>
            <a href="https://www.facebook.com/profile.php?id=100090535125686" target="_blank" rel="noopener noreferrer">
            <XSocial className="text-white/40 hover:text-[#2de4b9] transition" />
            </a>
            <a href="https://www.instagram.com/optimus.dental.studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <InstaSocial className="text-white/40 hover:text-[#2de4b9] transition" />
            </a>
            <YTSocial className="text-white/40 hover:text-[#2de4b9] transition" />
          </div>
        </div>
      </div>
    </footer>
  )
};
