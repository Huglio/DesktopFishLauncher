import React from 'react';
import * as S from './styles';
import type { BreadcrumbProps } from './types';
import { Outlet } from 'react-router-dom';
import { FlexCenterContainer } from '../../atoms/FlexCenterContainer';

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <FlexCenterContainer $withMarginTop>
      <S.Nav>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item.path ? (
              <S.NavLink to={item.path}>{item.label}</S.NavLink>
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
