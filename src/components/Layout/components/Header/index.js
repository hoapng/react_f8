import classNames from 'classnames/bind';
import styles from './header.module.scss';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { Wrapper as ProperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
function Header() {
    const cx = classNames.bind(styles);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <img src={images.logo} alt="Tiktok" />
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <ProperWrapper>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </ProperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input placeholder="Search accounts and videos" spellCheck={false} />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>
                    <div className={cx('actions')}></div>
                </div>
            </header>
        </>
    );
}

export default Header;
