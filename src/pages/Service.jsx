import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useAuth } from "../store/auth";
import { useState } from "react";

export const Service = () => {
  const { service } = useAuth();
  
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Services</h1>
        </div>

        <div className="container grid grid-three-cols">
          {service && service.map(service => {
            return (
              <Card key={service._id} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image='https://happay.com/blog/wp-content/uploads/sites/12/2022/09/baas-banking-as-a-service-.png'
                    alt="service"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {service.service}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )
          }
          )}
        </div>
      </section >
    </>
  );
}
