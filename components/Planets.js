import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Planets({ data }) {
  return (
    <>
      <h1>Planets</h1>
      <Grid columns={3}>
        {data.map((planets, i) => {
          return (
            <div style={{border: '2px solid black', margin: 5}}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <h2>
                      <strong>
                        {planets.name}
                      </strong>
                    </h2>
                  </Card.Header>
                  <Card.Description>
                    <strong>Rotation Period</strong>
                    <p>{planets.rotation_period}</p>
                    <strong>Orbital Period</strong>
                    <p>{planets.orbital_period}</p>
                    <strong>Diameter</strong>
                    <p>{planets.diameter}</p>
                    <strong>Climate</strong>
                    <p>{planets.climate}</p>
                    <strong>Gravity</strong>
                    <p>{planets.gravity}</p>
                    <strong>Terrain</strong>
                    <p>{planets.terrain}</p>
                    <strong>Surface Water</strong>
                    <p>{planets.surface_water}</p>
                    <strong>Population</strong>
                    <p>{planets.population}</p>
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