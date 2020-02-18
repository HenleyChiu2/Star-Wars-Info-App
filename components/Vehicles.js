import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Vehicles({ data }) {
  return (
    <>
      <h1>Vehicles</h1>
      <Grid columns={3}>
        {data.map((vehicles, i) => {
          return (
            <div style={{border: '2px solid black', margin: 5}}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <h2>
                      <strong>
                        {vehicles.name}
                      </strong>
                    </h2>                  
                  </Card.Header>
                  <Card.Description>
                    <strong>Model</strong>
                    <p>{vehicles.model}</p>
                    <strong>Manufacturer</strong>
                    <p>{vehicles.manufacturer}</p>
                    <strong>Cost</strong>
                    <p>{vehicles.cost_in_credits}</p>
                    <strong>Length</strong>
                    <p>{vehicles.length}</p>
                    <strong>Maximum Atmosphering Speed</strong>
                    <p>{vehicles.max_atmosphering_speed}</p>
                    <strong>Crew</strong>
                    <p>{vehicles.crew}</p>
                    <strong>Passengers</strong>
                    <p>{vehicles.passengers}</p>
                    <strong>Cargo Capacity</strong>
                    <p>{vehicles.cargo_capacity}</p>
                    <strong>Consumables</strong>
                    <p>{vehicles.consumables}</p>
                    <strong>Vehicle Class</strong>
                    <p>{vehicles.vehicle_class}</p>
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