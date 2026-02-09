export default function WhatsAppButton({ message, cta }: { message: string, cta: string }) {
    const phoneNumber = '905515215958';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-3 md:p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center group"
            aria-label={cta}
        >
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold px-0 group-hover:px-2">
                {cta}
            </span>
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 13.5105 4.42392 14.922 5.16309 16.1429L4.2 20L8.17415 19.1207C9.32415 19.6896 10.6214 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2974 22 8.6943 21.5723 7.28441 20.811L2.09459 21.9594C1.65752 22.0561 1.25056 21.6882 1.30605 21.244L2.3023 16.2625C1.46592 14.9926 1 13.5359 1 12ZM16.3813 14.7175C16.1739 15.2865 15.3653 15.8016 14.7646 15.8983C14.1843 15.9922 13.4357 15.9657 11.2372 15.0645C9.03874 14.1633 7.62174 11.9796 7.51268 11.8344C7.40361 11.6892 6.61869 10.6483 6.61869 9.57018C6.61869 8.49206 7.16383 7.96695 7.38194 7.7248C7.60005 7.48261 7.84534 7.4342 8.03614 7.4342C8.22695 7.4342 8.41775 7.43851 8.58129 7.44795C8.76182 7.45839 8.8521 7.47169 8.9701 7.71269C9.08809 7.95369 9.38792 8.68725 9.49694 8.90509C9.60596 9.12293 9.68772 9.25595 9.60596 9.40118C9.5242 9.54642 9.45606 9.60695 9.33342 9.75218C9.21077 9.89741 9.07923 9.99849 8.95213 10.1383C8.82502 10.2781 8.69344 10.4398 8.84334 10.6974C8.99325 10.955 9.51016 11.8021 10.2713 12.4807C11.2443 13.3482 12.0315 13.6247 12.3041 13.7457C12.5767 13.8667 12.7485 13.8425 12.912 13.6731C13.0755 13.5037 13.6206 12.8727 13.8115 12.6065C14.0023 12.3402 14.1931 12.3768 14.4384 12.4678C14.6837 12.5587 15.8943 13.1565 16.1487 13.2838C16.4032 13.4111 16.5716 13.4745 16.6575 13.6198C16.7434 13.765 16.7434 14.4391 16.3813 14.7175Z" />
            </svg>
        </a>
    );
}
