import { useObjectMetadataItem } from '@/object-metadata/hooks/useObjectMetadataItem';
import { useObjectMetadataItems } from '@/object-metadata/hooks/useObjectMetadataItems';
import { getObjectMorphJunctionConfig } from '@/object-record/record-field/ui/utils/junction/getObjectMorphJunctionConfig';
import { isDefined } from 'twenty-shared/utils';

import { type JunctionConfig } from '@/object-record/record-field/ui/utils/junction/getJunctionConfig';

export const useObjectMorphJunctionConfig = ({
  objectNameSingular,
}: {
  objectNameSingular: string;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const { objectMetadataItems } = useObjectMetadataItems();

  if (!isDefined(objectMetadataItem)) {
    return null;
}
  return (
    getObjectMorphJunctionConfig({
      objectMetadata: objectMetadataItem,
      objectMetadataItems,
    }) ?? null
  ) as JunctionConfig | null;
};
