import React from 'react';
import { StackRow } from '../../styles/stack.style';
import { TimeAgoContentComponent } from '../../time-ago/time-ago-content.component';
import { AvatarElement } from '../avatar/avatar.element';
import { SizeProps } from '../avatar/avatar-enum.enum';

export interface ImageContentTimeComponentProps {
  url: string;
  content: string;
  time: Date;
  sizeType?: SizeProps;
}

export const ImageContentTimeComponent: React.FC<ImageContentTimeComponentProps> = ({
  url,
  content,
  time,
  sizeType = 'medium',
}) => {
  return (
    <StackRow alignItems="center">
      <AvatarElement url={url} size={sizeType} />
      <TimeAgoContentComponent content={content} time={time} />
    </StackRow>
  );
};
