import React from "react";
import { Link, navigate } from "gatsby";
import Tags from "./Tags";

interface IProps {
  slug: string;
  title: string;
  content: string;
  authorId: string;
  date: string;
  readingTime: string;
  tags: Array<string>;
}

const LatestPost = (props: IProps) => {
  const { slug, title, content, authorId, date, readingTime, tags } = props;

  function onClick(_e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    navigate(slug);
  }

  return (
    <div
      className="w-full sm:min-h-250 lg:w-1/3 bg-latestPostBg p-2 rounded-md shadow-sm flex flex-col px-4 justify-between"
      onClick={onClick}
    >
      <div>
        <div className="text-primary pt-1">
          <h3 className="p-0">
            <Link to={slug}>{title}</Link>
          </h3>
        </div>

        <div className="p-1 text-sm card-subheading-info">
          <div>
            {`${date} | ${readingTime}`}
            {` | by `}
            <span className="font-bold text-secondary text-sm">{authorId}</span>
          </div>
        </div>

        <section className="mt-2">
          <p
            className=" text-xl mb-3"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </section>
      </div>
      <Tags tags={tags} className="!mt-auto pt-5 mb-2" />
    </div>
  );
};

export default LatestPost;
