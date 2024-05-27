import React from 'react';
import styles from './FilterTags.module.scss';

interface IFilterTags {
    currentFilterTag: string,
    tags: string[],
    setCurrentFilterTag: (filter: string) => void
}

const FilterTags: React.FC<IFilterTags> = React.memo(({ currentFilterTag, tags, setCurrentFilterTag }) => {

    const filterChangeHandler = (e: React.MouseEvent<HTMLLIElement>) => {
        const target = e.target as HTMLLIElement;
        setCurrentFilterTag(target.textContent || 'Все темы');
    }

    return (
        <div className={styles.filterTags}>
            <ul>
                {
                    tags.map((tag, index) => (
                        <li
                            className={tag === currentFilterTag
                                ? `${styles.filterTagsItemActive} ${styles.filterTagsItem}`
                                : `${styles.filterTagsItem}`}
                            onClick={filterChangeHandler}
                            key={index}
                        >{tag}</li>
                    ))
                }
            </ul>
        </div>
    );
});

export default FilterTags;