import React from 'react';
import Category from '@theme-original/DocSidebarItem/Category';
import type CategoryType from '@theme/DocSidebarItem/Category';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof CategoryType>;

export default function CategoryWrapper(props: Props): React.ReactElement {
  const {item, ...rest} = props;
  const badge = item.customProps?.badge as string | undefined;
  
  if (!badge) {
    return <Category {...props} />;
  }

  // Create modified props with badge className for CSS targeting
  const modifiedProps = {
    ...rest,
    item: {
      ...item,
      className: `${item.className || ''} has-badge`.trim(),
      customProps: {
        ...item.customProps,
        badgeText: badge,
      }
    }
  };

  return (
    <div className="sidebar-item-with-badge">
      <Category {...modifiedProps} />
      <span className="beta-badge">{badge}</span>
    </div>
  );
}
