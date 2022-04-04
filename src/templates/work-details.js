import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';
import Layout from '../pages/components/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const WorkDetails = ({ data }) => {
    const { slug, title, stack, github, website, description } =
        data.contentfulWork;
    const renderedDesc = renderRichText(description);

    const Header = styled.header`
        margin: 16px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 768px) {
            align-items: flex-start;
            flex-direction: column;
            gap: 16px;
        }
    `;

    const ButtonGroup = styled.div`
        display: flex;
        gap: 16px;
        @media (max-width: 768px) {
            margin: 8px 0;
        }
    `;

    const WorkLink = styled.a`
        text-decoration: none;
        color: black;
        padding: 8px 16px;
        box-shadow: 0 2px 4px 0 #c5c5c5;
        &:hover {
            box-shadow: 0 4px 8px 0 #c5c5c5;
        }
    `;

    const Title = styled.h1`
        margin: 0;
    `;

    const Stack = styled.div``;

    const Detail = styled.div`
        width: 100%;
        & > p > img {
            max-width: 100%;
        }
    `;

    const DetailImages = styled.div`
        display: flex;
        flex-direction: column;
        gap: 8px;
    `;

    return (
        <Layout>
            <Header>
                <div>
                    <Title>{title}</Title>
                    <Stack>{stack.join(', ')}</Stack>
                </div>
                <ButtonGroup>
                    {github ? (
                        <WorkLink href={github} target='__blank'>
                            Project repo
                        </WorkLink>
                    ) : null}
                    {website ? (
                        <WorkLink href={website} target='__blank'>
                            Check me out!
                        </WorkLink>
                    ) : null}
                </ButtonGroup>
            </Header>
            <Detail>
                {renderedDesc}
                <DetailImages>
                    {description.references.map((r, i) => {
                        return (
                            <GatsbyImage
                                key={`${slug}_${i}`}
                                image={getImage(r.gatsbyImageData)}
                                alt={r.title}
                            />
                        );
                    })}
                </DetailImages>
            </Detail>
        </Layout>
    );
};

export default WorkDetails;

export const query = graphql`
    query ($slug: String) {
        contentfulWork(slug: { eq: $slug }) {
            title
            slug
            date(formatString: "yyyy-MM-DD")
            github
            website
            stack
            description {
                raw
                references {
                    title
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
        }
    }
`;
