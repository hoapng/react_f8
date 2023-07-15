import classNames from 'classnames/bind';
import styles from './header.module.scss';
function Header() {
    const cx = classNames.bind(styles);
    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}></div>
            </header>
        </>
    );
}

export default Header;
