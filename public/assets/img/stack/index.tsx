export type Tool = {
  name: string;
  img: ReactNode;
};

import NodeJs from "./nodeJs.svg";
import { ReactComponent as SpringBoot } from "./springBoot.svg";
import { ReactComponent as Docker } from "./docker.svg";
import { ReactComponent as Java } from "./java.svg";
import { ReactComponent as Aws } from "./aws.svg";
import { ReactComponent as Graphql } from "./graphql.svg";
import { ReactComponent as PostgreSQL } from "./postgreSql.svg";
import { ReactComponent as MySql } from "./MySQL.svg";
import { ReactComponent as RabbitMq } from "./rabbitmq.svg";
import { ReactComponent as Prometheus } from "./prometheus.svg";
import { ReactComponent as JUnit } from "./junit.svg";
import { ReactComponent as WebSocket } from "./websocket.svg";
import { ReactComponent as Redis } from "./redis.svg";
import { ReactComponent as Gradle } from "./gradle.svg";
import { ReactComponent as Maven } from "./maven.svg";
import { ReactComponent as Kafka } from "./kafka.svg";
import { ReactComponent as Git } from "./git.svg";
import { ReactComponent as GitHub } from "./github.svg";
import { ReactComponent as DigitalOcean } from "./digitalOcean.svg";
import { ReactComponent as Gcp } from "./gcp.svg";
import { ReactComponent as Azure } from "./azure.svg";
import { ReactComponent as DynamoDb } from "./dynamoDb.svg";
import { ReactComponent as Mongodb } from "./mongoDb.svg";
import { ReactComponent as Flutter } from "./flutter.svg";
import { ReactComponent as Firebase } from "./firebace.svg";
import { ReactComponent as GitLab } from "./gitLab.svg";
import { ReactComponent as Kotlin } from "./kotlin.svg";
import Cribl from "./cribl.png";
import { ReactComponent as Jira } from "./jira.svg";
import { ReactComponent as ClickUp } from "./clickup.svg";
import { ReactComponent as Trello } from "./trello.svg";
import { ReactComponent as XMind } from "./xmind.svg";
import { ReactComponent as GRpc } from "./grpc.svg";
import { ReactComponent as TypeScript } from "./typescript.svg";
import { ReactComponent as JavaScript } from "./javaScript.svg";
import { ReactComponent as ReactJs } from "./reactJs.svg";
import { ReactComponent as Figma } from "./figma.svg";
import { ReactComponent as PhotoShop } from "./photoShop.svg";
// import Illustrator from "./illustrator.png";
import { ReactComponent as CodeCommit } from "./codeCommit.svg";
import { ReactComponent as CircleCi } from "./circleci.svg";
import { ReactComponent as Jenkins } from "./jenkins.svg";
import { ReactComponent as Grafana } from "./grafana.svg";
import { ReactComponent as Hibernate } from "./hibernate.svg";
import { ReactComponent as Jpa } from "./JPA.svg";
import { ReactNode } from "react";
// import Image from "next/image";

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
  { name: "Cribl", img: <Image src={Cribl} alt="cribl" /> },
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
  // {
  //   name: "Adobe Illustrator",
  //   img: <Image src={Illustrator} alt="Illustrator" />,
  // },
  { name: "CodeCommit", img: <CodeCommit /> },
  { name: "CircleCi", img: <CircleCi /> },
  { name: "Jenkins", img: <Jenkins /> },
  { name: "Grafana", img: <Grafana /> },
  { name: "Hibernate", img: <Hibernate /> },
  { name: "JPA", img: <Jpa /> },
];
