import React from "react";
import styled from "styled-components";
import { PrimaryColor } from "./stockAnalysisDashboard";

type NewsLink = {
  title: string;
  link: string;
};

type NewsLinksListProps = {
  newsLinks: NewsLink[];
};

const Container = styled.div`
  width: 100%;
`;

const ScrollArea = styled.div`
  height: calc(100% - 42px); /* subtract title height */
  overflow-y: auto;
  padding: 10px 12px;
`;

const NewsLinkItem = styled.a`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${PrimaryColor};
  font-size: 12px;
  text-decoration: none;
  margin-bottom: 8px;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const NewsLinksList: React.FC<NewsLinksListProps> = ({ newsLinks }) => {
  return (
    <Container>
      <div>In the News</div>

      <ScrollArea>
        {newsLinks.map((news) => (
          <NewsLinkItem
            key={news.link}
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            title={news.title}
          >
            {news.title}
          </NewsLinkItem>
        ))}
      </ScrollArea>
    </Container>
  );
};

export default NewsLinksList;
