import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import { View, StyleSheet, FlatList } from 'react-native';

export default function People({ data }) {
  return (
    <>
      <h1>People</h1>
      <Grid columns={3}>
        {data.map((people, i) => {
          return (
            <div style={{border: '2px solid black', margin: 5}}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <h2>
                      <strong>
                        {people.name}
                      </strong>
                   </h2>
                  </Card.Header>
                  <Card.Description>
                    <strong>Height</strong>
                    <p>{people.height}</p>
                    <strong>Mass</strong>
                    <p>{people.mass}</p>
                    <strong>Hair Color</strong>
                    <p>{people.hair_color}</p>
                    <strong>Skin Color</strong>
                    <p>{people.skin_color}</p>
                    <strong>Eye Color</strong>
                    <p>{people.eye_color}</p>
                    <strong>Birth Year</strong>
                    <p>{people.birth_year}</p>
                    <strong>Gender</strong>
                    <p>{people.gender}</p>
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