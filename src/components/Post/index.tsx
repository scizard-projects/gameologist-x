import React, { useMemo } from 'react';

import { Post } from '../../types';
import Compact from './Compact';
import Standalone from './Standalone';
import Standard from './Standard';

type Props = {
  index: number;
  post: Post;
  compact?: boolean;
  onPress: Function;
  horizontal?: boolean;
  isFirstPostFeatured?: boolean;
};

export default (props: Props) => {
  const { post, index, horizontal, compact, isFirstPostFeatured, onPress } =
    props;
  const Component = useMemo(() => {
    if (horizontal) {
      return compact ? Compact : Standard;
    }
    if (index === 0 && isFirstPostFeatured) {
      return Standalone;
    }
    return compact ? Compact : Standard;
  }, [index, horizontal, compact, isFirstPostFeatured]);
  return <Component post={post} onPress={onPress} />;
};
