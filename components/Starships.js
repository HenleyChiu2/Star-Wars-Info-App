import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Starships({ data }) {
  return (
    <>
      <h1>Starships</h1>
      <Grid columns={3}>
        {data.map((starships, i) => {
          return (
            <div style={{border: '2px solid black', margin: 5}}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <h2>
                      <strong>
                        {starships.name}
                      </strong>
                    </h2>
                  </Card.Header>
                  <Card.Description>
                    <strong>Model</strong>
                    <p>{starships.model}</p>
                    <strong>Manufacturer</strong>
                    <p>{starships.manufacturer}</p>
                    <strong>Cost</strong>
                    <p>{starships.cost_in_credits}</p>
                    <strong>Length</strong>
                    <p>{starships.length}</p>
                    <strong>Maximum Atmosphering Speed</strong>
                    <p>{starships.max_atmosphering_speed}</p>
                    <strong>Crew</strong>
                    <p>{starships.crew}</p>
                    <strong>Passengers</strong>
                    <p>{starships.passengers}</p>
                    <strong>Cargo Capacity</strong>
                    <p>{starships.cargo_capacity}</p>
                    <strong>Consumables</strong>
                    <p>{starships.consumables}</p>
                    <strong>Hyperdrive Rating</strong>
                    <p>{starships.hyperdrive_rating}</p>
                    <strong>MGLT</strong>
                    <p>{starships.MGLT}</p>
                    <strong>Starship Class</strong>
                    <p>{starships.starship_class}</p>
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