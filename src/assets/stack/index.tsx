export type Tool = {
  name: string;
  img: ReactNode | string;
};

import NodeJs from "./nodeJs.svg";
import SpringBoot from "./springBoot.svg";
import Docker from "./docker.svg";
import Java from "./java.svg";
import Aws from "./aws.svg";
import Graphql from "./graphql.svg";
import PostgreSQL from "./postgreSql.svg";
import MySql from "./MySQL.svg";
import RabbitMq from "./rabbitmq.svg";
import Prometheus from "./prometheus.svg";
import JUnit from "./junit.svg";
import WebSocket from "./websocket.svg";
import Redis from "./redis.svg";
import Gradle from "./gradle.svg";
import Maven from "./maven.svg";
import Kafka from "./kafka.svg";
import Git from "./git.svg";
import GitHub from "./github.svg";
import DigitalOcean from "./digitalOcean.svg";
import Gcp from "./gcp.svg";
import Azure from "./azure.svg";
import DynamoDb from "./dynamoDb.svg";
import Mongodb from "./mongoDb.svg";
import Flutter from "./flutter.svg";
import Firebase from "./firebace.svg";
import GitLab from "./gitLab.svg";
import Kotlin from "./kotlin.svg";
import Cribl from "./cribl.png";
import Jira from "./jira.svg";
import ClickUp from "./clickup.svg";
import Trello from "./trello.svg";
import XMind from "./xmind.svg";
import GRpc from "./grpc.svg";
import TypeScript from "./typescript.svg";
import JavaScript from "./javaScript.svg";
import ReactJs from "./reactJs.svg";
import Figma from "./figma.svg";
import PhotoShop from "./photoShop.svg";
import Illustrator from "./illustrator.png";
import CodeCommit from "./codeCommit.svg";
import CircleCi from "./circleci.svg";
import Jenkins from "./jenkins.svg";
import Grafana from "./grafana.svg";
import Hibernate from "./hibernate.svg";
import Jpa from "./JPA.svg";

import { ReactNode } from "react";

export const TOOLS: Tool[] = [
  { name: "NodeJs", img: <NodeJs /> },
  { name: "Spring Boot", img: <SpringBoot /> },
  { name: "Docker", img: <Docker /> },
  { name: "Java", img: <Java /> },
  { name: "AWS", img: <Aws /> },
  { name: "GraphQL", img: <Graphql /> },
  { name: "PostgreSQL", img: <PostgreSQL /> },
  { name: "MySQL", img: <MySql /> },
  { name: "RabbitMQ", img: <RabbitMq /> },
  { name: "Prometheus", img: <Prometheus /> },
  { name: "JUnit", img: <JUnit /> },
  { name: "WebSocket", img: <WebSocket /> },
  { name: "Redis", img: <Redis /> },
  { name: "Gradle", img: <Gradle /> },
  { name: "Maven", img: <Maven /> },
  { name: "Kafka", img: <Kafka /> },
  { name: "Git", img: <Git /> },
  { name: "Github", img: <GitHub /> },
  { name: "Digital Ocean", img: <DigitalOcean /> },
  { name: "GCP", img: <Gcp /> },
  { name: "Azure", img: <Azure /> },
  { name: "DynamoDB", img: <DynamoDb /> },
  { name: "MongoDB", img: <Mongodb /> },
  { name: "Flutter", img: <Flutter /> },
  { name: "Firebace", img: <Firebase /> },
  { name: "GitLab", img: <GitLab /> },
  { name: "Kotlin", img: <Kotlin /> },
  { name: "Cribl", img: Cribl },
  // { name: "Cribl", img: <Image src={Cribl} alt="cribl" /> },
  { name: "Jira", img: <Jira /> },
  { name: "ClickUp", img: <ClickUp /> },
  { name: "Trello", img: <Trello /> },
  { name: "XMind", img: <XMind /> },
  { name: "gRPC", img: <GRpc /> },
  { name: "TypeScript", img: <TypeScript /> },
  { name: "JavaScript", img: <JavaScript /> },
  { name: "ReactJS", img: <ReactJs /> },
  { name: "Figma ", img: <Figma /> },
  { name: "Adobe Photoshop", img: <PhotoShop /> },
  {
    name: "Adobe Illustrator",
    img: Illustrator,
  },
  { name: "CodeCommit", img: <CodeCommit /> },
  { name: "CircleCi", img: <CircleCi /> },
  { name: "Jenkins", img: <Jenkins /> },
  { name: "Grafana", img: <Grafana /> },
  { name: "Hibernate", img: <Hibernate /> },
  { name: "JPA", img: <Jpa /> },
];
