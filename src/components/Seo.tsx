import React from "react";
import Helmet from "react-helmet";
import { IAuthorFragmentFragment } from "../../graphql-types";
import { useSiteMetadata } from "../dal/site";
import { useAssets } from "../dal/content";

export interface IProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: Array<any>;
  author?: IAuthorFragmentFragment;
}

export default function SEO(props: IProps) {
  const { description = ``, lang = `en`, meta = [], title, author } = props;
  const siteMeta = useSiteMetadata();
  const assets = useAssets();

  const logo = assets.find((asset) => asset.base.includes("logo.svg"));

  const metaDescription = description || siteMeta.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMeta.title}`}
      meta={[
        {
          name: `title`,
          content: title,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          // Needs to be an absolute url
          content: `https://randomleplants.com${logo?.publicURL}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author?.twitter || siteMeta.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <MailchimpScript />
    </Helmet>
  );
}

export function MailchimpScript() {
  return (
    <script id="mcjs">
      {`!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/c388336980630bd93629517cb/79c014026202565af1500f561.js");
          `}
    </script>
  );
}
