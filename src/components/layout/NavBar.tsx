import classNames from 'classnames/bind';
import React from 'react';
import { useSemanticHook } from 'src/common/hooks';

import styles from './NavBar.module.scss';

import AccountBox from '@/atom/AccountBox';
import DesktopNav from '@/atom/DesktopNav';
import MobileNav from '@/atom/MobileNav';
import { Item } from '@/types/HeaderProps';

const items: Item[] = [
   { name: '홈', path: '/' },
   { name: 'My 지출 관리', path: '/ji' },
   { name: 'My 저축 관리', path: '/ju' },
   { name: 'My 구독 관리', path: '/gu' }
];

const NavBar:React.FC = () =>
{
   const isSemantic = useSemanticHook();
   const cn = classNames.bind(styles);

   return (
      <nav className={cn('menu')}>
         <h1 className={cn('logo')}>Show Me The Money</h1>

         <div className={cn('wrapper')}>
            {isSemantic ? <DesktopNav menuList={items} /> : <MobileNav menuList={items} />}

            <AccountBox />
         </div>
      </nav>
   );
};

export default NavBar;