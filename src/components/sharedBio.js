import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

export default function SharedBio(props) {
  const { authors = [] } = props

  return (
    <Container>
      <p>
        A blog by <MiniBio author={authors[0]} />
        {" and "}
        <MiniBio author={authors[1]} />
        {"."}
      </p>
      <p>We talk about Programming, Tech Culture and random stuff.</p>
      <p>
        <Link to="about">About us</Link>
      </p>
    </Container>
  )
}

export function MiniBio({ author }) {
  return (
    <span>
      <strong>
        <a href={`https://twitter.com/${author.twitter}`}>{author.id}</a>
      </strong>
    </span>
  )
}

const Container = styled.div`
  text-align: center;

  & > p {
    margin: 0;
  }
`
