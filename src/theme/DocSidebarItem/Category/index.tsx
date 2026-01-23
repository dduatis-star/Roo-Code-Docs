import React from 'react';
import Category from '@theme-original/DocSidebarItem/Category';
import type CategoryType from '@theme/DocSidebarItem/Category';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof CategoryType>;

export default function CategoryWrapper(props: Props): React.ReactElement {
  const {item} = props;
  const badge = item.customProps?.badge as string | undefined;
  
  // If there's a badge, modify the item label to include it
  if (badge) {
    const modifiedItem = {
      ...item,
      label: (
        <>
          {item.label}
          {' '}
          <span className="beta-badge">{badge}</span>
        </>
      ),
    };
    
    return <Category {...props} item={modifiedItem} />;
  }
  
  return <Category {...props} />;
}
