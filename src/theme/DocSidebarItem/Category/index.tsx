import React from 'react';
import Category from '@theme-original/DocSidebarItem/Category';
import type CategoryType from '@theme/DocSidebarItem/Category';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof CategoryType>;

export default function CategoryWrapper(props: Props): React.ReactElement {
  const {item} = props;
  const badge = item.customProps?.badge as string | undefined;
  
  if (badge) {
    return (
      <div style={{display: 'flex', alignItems: 'center', gap: '0.375rem'}}>
        <Category {...props} />
        <span className="beta-badge">{badge}</span>
      </div>
    );
  }
  
  return <Category {...props} />;
}
