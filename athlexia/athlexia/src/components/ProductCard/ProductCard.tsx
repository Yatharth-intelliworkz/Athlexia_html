import { useState } from 'react';
import styles from './ProductCard.module.css';
import Button2 from '@/components/ui/Button2';
import defaultPinIcon from '@/assets/images/tp_pin.svg';
import ContactSupplierModal from '@/feature/contact/ContactSupplierModal';

export type Img = { src: string; alt: string };

export type ProductCardProps = Readonly<{
    id: string;
    image: Img;
    title: string;
    priceText: string;                 // "₹ 35,000/Piece"
    company: string;                   // "KD Sports & Fitness"
    location: { city: string; area: string }; // { city: "Ahmedabad", area: "Jahangirpura" }
    liked?: boolean;
    onToggleLike?: (id: string, nextLiked: boolean) => void;
    onContact?: (id: string) => void;  // fires when contact is clicked
    pinIconSrc?: string;               // override location icon
    className?: string;
}>;

export default function ProductCard({
    id,
    image,
    title,
    priceText,
    company,
    location,
    liked = false,
    onToggleLike,
    onContact,
    pinIconSrc,
    className,
}: ProductCardProps) {
    const [open, setOpen] = useState(false);

    const handleContactClick = () => {
        setOpen(true);
        onContact?.(id);
    };

    const pinSrc = pinIconSrc ?? defaultPinIcon;

    return (
        <div className={`${styles.prod_card} ${className ?? ''}`}>
            {/* like */}
            <button
                type="button"
                aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
                aria-pressed={liked}
                className={`${styles.pd_like} ${liked ? styles.active : ''}`}
                onClick={() => onToggleLike?.(id, !liked)}
            >
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.1587 1.9624C21.5751 1.34025 20.8821 0.846725 20.1195 0.510014C19.3568 0.173304 18.5394 0 17.7139 0C16.8884 0 16.071 0.173304 15.3083 0.510014C14.5457 0.846725 13.8527 1.34025 13.269 1.9624L11.9999 3.31501L10.7308 1.9624C9.55198 0.705988 7.95312 0.000141468 6.28597 0.000141468C4.61883 0.000141468 3.01997 0.705988 1.84112 1.9624C0.66227 3.21882 0 4.92288 0 6.69972C0 8.47656 0.66227 10.1806 1.84112 11.437L11.5779 21.8145C11.6901 21.9333 11.8418 22 11.9999 22C12.1581 22 12.3098 21.9333 12.422 21.8145L22.1587 11.437C22.7425 10.8149 23.2055 10.0764 23.5215 9.26356C23.8374 8.45073 24 7.57953 24 6.69972C24 5.8199 23.8374 4.94871 23.5215 4.13587C23.2055 3.32304 22.7425 2.58449 22.1587 1.9624Z" fill="#DDDDDD" />
                </svg>
            </button>

            {/* image */}
            <figure className={styles.pd_img}>
                <img src={image.src} alt={image.alt} className="img-fluid" />
            </figure>

            {/* title + price */}
            <div className={styles.pd_name}>
                <h4 className={styles.pd_title}>{title}</h4>
                <p className={styles.pd_price}>{priceText}</p>
            </div>

            {/* info */}
            <div className={styles.pd_info}>
                <p className={styles.pd_company}>{company}</p>

                <p className={styles.pd_address}>
                    {pinSrc && (
                        <span>
                            <img src={pinSrc} alt="" />
                        </span>
                    )}
                    <b>{location.city} - </b>{location.area}
                </p>

                <div className={styles.pd_btn}>
                    <Button2
                        label="Contact Supplier"
                        onClick={handleContactClick}  // opens modal
                    />
                </div>
            </div>

            {/* modal */}            
            <ContactSupplierModal
                show={open}
                onClose={() => setOpen(false)}
                productId={id}
                productName={title}
                company={company}
                city={location.city}
                area={location.area}
            />
        </div>
    );
}
