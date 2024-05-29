import { useTranslation } from 'react-i18next';

type TagsProps = {
  tags?: string[];
  onClick?: (tag: string) => void;
};
export function TagsList(props: TagsProps) {
  const { tags, onClick } = props;
  const { t } = useTranslation();
  return (
    <>
      <p>{t('articles:tags')}</p>
      <div className="tag-list">
        {tags &&
          tags.map((tag, key) => (
            <span
              className="tag-pill tag-default"
              key={key}
              onClick={() => onClick && onClick(tag)}
            >
              {tag}
            </span>
          ))}
      </div>
    </>
  );
}
