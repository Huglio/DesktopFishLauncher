import React from 'react';
import * as S from './styles';
import type { BreadcrumbProps } from './types';
import { Outlet } from 'react-router-dom';
import { FlexCenterContainer } from '../../atoms/FlexCenterContainer';

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <FlexCenterContainer>
      <S.Nav>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item.link ? (
              <S.NavLink to={item.link}>{item.label}</S.NavLink>
            ) : (
              item.label
            )}
            {index < items.length - 1 && <S.Arrow />}
          </React.Fragment>
        ))}
      </S.Nav>

      <Outlet />
    </FlexCenterContainer>
  );
}
