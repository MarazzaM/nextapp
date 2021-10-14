import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import { UrlObject } from "url";
import Image from "next/image";

export default function CardStep(props: {
    path: string | UrlObject;
    id: string | undefined;
    title:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    text:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
}) {
  return (
    <Link href={props.path}>
      <Card sx={{ maxWidth: 345 }} id={props.id}>
        <CardActionArea>
        
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.text}
            </Typography>
            <Image
                src="/../public/logoimg.webp"
                width="200"
                height="200"
              ></Image>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
