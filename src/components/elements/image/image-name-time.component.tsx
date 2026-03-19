import React from 'react';
import { SizeProps } from '../../../common';
import { StackRow } from '../../styles';
import { AvatarElement } from '../avatar';
import { TimeAgoContentComponent } from '../time-ago';

export interface ImageContentTimeComponentProps {
  url: string;
  content: string;
  time: Date;
  sizeType?: SizeProps | string;
}

export const ImageContentTimeComponent: React.FC<ImageContentTimeComponentProps> = ({
  url,
  content,
  time,
  sizeType = SizeProps.MEDIUM,
}) => {
  return (
    <StackRow alignItems='center'>
      <AvatarElement url={url} size={sizeType} />
      <TimeAgoContentComponent content={content} time={time} />
    </StackRow>
  );
};
