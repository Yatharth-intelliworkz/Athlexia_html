import { useState } from 'react';
import Select from 'react-select';
import styles from './Header.module.css';

// 🔁 replace these with your real asset paths
import headLogo from '@/assets/images/header/head_logo.svg';
import headLoc from '@/assets/images/header/head_loc.png';
import helpIcon from '@/assets/images/header/help.svg';
import signIcon from '@/assets/images/header/sign.svg';

type Option = { value: string; label: string };

const stateOptions: Option[] = [
    { value: 'AL', label: 'Alabama' },
    { value: 'RJ', label: 'Rajasthan' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [state, setState] = useState<Option | null>(stateOptions[1]); // default Rajasthan

    return (
        <header className={styles.header}>
            <div className="container-fluid">
                <div className={styles.header_wrapper}>
                    {/* left */}
                    <div className={styles.head_left}>
                        <button
                            type="button"
                            aria-label="Toggle menu"
                            className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
                            onClick={() => setMenuOpen((v) => !v)}
                        >
                            <div className={styles.line} />
                            <div className={styles.line} />
                            <div className={styles.line} />
                        </button>

                        <div className={styles.logo}>
                            <a href="/">
                                <img src={headLogo} alt="Athlexia" className="img-fluid" />
                            </a>
                        </div>
                    </div>

                    {/* center */}
                    <div className={styles.head_center}>
                        <div className="d-flex gap-2">
                            <img src={headLoc} alt="pin" height={50} width={41} />
                            <div className="d-flex flex-column">
                                <p>Location</p>

                                {/* react-select replaces select2 */}
                                <div className={styles.head_state_wrap}>
                                    <Select<Option, false>
                                        classNamePrefix="head_select"
                                        value={state}
                                        onChange={(opt) => setState(opt)}
                                        options={stateOptions}
                                        isSearchable
                                        styles={{
                                            container: (base) => ({ ...base, width: 160 }),
                                            control: (base, state) => ({
                                                ...base,
                                                minHeight: 36,
                                                borderRadius: 8,
                                                borderColor: 'var(--grey-bbb)',
                                                boxShadow: 'none',
                                                '&:hover': { borderColor: 'var(--grey-bbb)' }, // 🔥 override blue border
                                            }),
                                            valueContainer: (base) => ({ ...base, padding: '0 8px' }),
                                            indicatorsContainer: (base) => ({ ...base, paddingRight: 6 }),
                                            menu: (base) => ({ ...base, zIndex: 1000 }),
                                        }}
                                        theme={(theme) => ({
                                            ...theme,
                                            colors: {
                                                ...theme.colors,
                                                primary: 'var(--grey-bbb)',        // active border color
                                                primary25: 'rgba(0,0,0,0.05)',    // hover background in menu
                                            },
                                        })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.search_container}>
                            <div className={styles.head_pro_search}>
                                <input
                                    type="text"
                                    placeholder="Search.."
                                    name="search"
                                    className={styles.head_search}
                                />
                                <span><i className="fa fa-search" aria-hidden="true" /></span>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className={styles.head_right}>
                        <div>
                            <img src={helpIcon} alt="help" />
                        </div>

                        <div className={styles.sign_block}>
                            <img src={signIcon} alt="sign" />
                            <select className={styles.signin_select} aria-label="Sign in options">
                                <option>Sign Up</option>
                                <option>Sign In</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
