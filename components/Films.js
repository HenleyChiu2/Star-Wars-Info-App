import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Films({ data }) {
  return (
    <>
      <h1>Films</h1>
      <Grid columns={3}>
        {data.map((films, i) => {
          return (
            <div style={{border: '2px solid black', margin: 5}}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <h2>
                      <strong>
                        Star Wars: Episode {films.episode_id}
                      </strong>
                    </h2>
                  </Card.Header>
                  <Card.Description>
                    <strong>Title</strong>
                    <p>{films.title}</p>
                    <strong>Director</strong>
                    <p>{films.director}</p>
                    <strong>Producer</strong>
                    <p>{films.producer}</p>
                    <strong>Release Date</strong>
                    <p>{films.release_date}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          )
        })}
      </Grid>
    </>
  )
}