import styled from "@emotion/styled";
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../pages/components/Layout";

const WorkDetails = ({ data }) => {
    const { html } = data.markdownRemark;
    const { stack, title, link } = data.markdownRemark.frontmatter;

    const Header = styled.header`
        margin: 16px 0;
    `;

    const Title = styled.h1`
        margin: 0;
    `;

    const Detail = styled.div`
        width: 100%;
        & > p > img {
            max-width: 100%;
        }
    `;

    return (
        <Layout>
            <Header>
                <Title>{title}</Title>
                <subtitle>{stack}</subtitle>
            </Header>
            {link ? <Link to={link}>link to the project.</Link> : <></>}
            <Detail dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    );
};

export default WorkDetails;

export const query = graphql`
    query ($slug: String) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                stack
                title
                link
            }
        }
    }
`;
